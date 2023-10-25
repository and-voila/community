import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { db } from '@/lib/db';
import { isTeacher } from '@/lib/teacher';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title, price } = await req.json();

    if (!userId || !isTeacher(userId)) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
        price,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
