import { NextResponse } from 'next/server';

import { db } from '@/app/lib/db';
import { getCurrentUser } from '@/app/lib/session';

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const user = await getCurrentUser();
    const userId = user?.id;
    const { isCompleted } = await req.json();

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
        isCompleted,
      },
      create: {
        userId,
        chapterId: params.chapterId,
        isCompleted,
      },
    });

    return NextResponse.json(userProgress);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
