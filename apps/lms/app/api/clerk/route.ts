/* eslint-disable camelcase */
import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';

import { db } from '@/lib/db';

export async function POST(req: Request) {
  // Extract Clerk webhook secret from environment variables
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!CLERK_WEBHOOK_SECRET) {
    throw new Error(
      'Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local',
    );
  }

  // Get the headers
  const headerPayload = req.headers;
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(CLERK_WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400,
    });
  }

  // Get the event type
  const eventType = evt.type;

  switch (eventType) {
    case 'user.created':
      const userData = evt.data;
      await db.user.create({
        data: {
          id: userData.id,
          email: userData.email_addresses[0].email_address,
          image: userData.image_url,
          createdAt: new Date(userData.created_at),
          updatedAt: new Date(userData.updated_at),
        },
      });

      break;

    case 'user.updated':
      const updatedUserData = evt.data;
      await db.user.update({
        where: { id: updatedUserData.id },
        data: {
          email: updatedUserData.email_addresses[0]?.email_address,
          image: updatedUserData.image_url,
          updatedAt: new Date(updatedUserData.updated_at),
        },
      });
      break;

    case 'user.deleted':
      const deletedUserData = evt.data;
      await db.user.delete({
        where: { id: deletedUserData.id },
      });
      break;
  }

  return new Response('', { status: 201 });
}