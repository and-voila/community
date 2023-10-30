import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { db } from '@/app/lib/db';

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const { userId } = auth();
    const { isStarted } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const userProgress = await db.userProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId: params.chapterId,
        },
      },
      update: {
        isStarted,
      },
      create: {
        userId,
        chapterId: params.chapterId,
        isStarted,
      },
    });

    return NextResponse.json(userProgress);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
