import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { db } from '@/app/lib/db';
import { isTeacher } from '@/app/lib/teacher';

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = auth();
    const { url } = await req.json();

    if (!isTeacher(userId)) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
    });

    if (!course) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const attachment = await db.attachment.create({
      data: {
        url,
        name: url.split('/').pop(),
        courseId: params.courseId,
      },
    });

    return NextResponse.json(attachment);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
