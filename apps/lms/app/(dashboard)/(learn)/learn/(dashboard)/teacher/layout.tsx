import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/app/lib/session';
import { isTeacher } from '@/app/lib/teacher';

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();
  const userId = user?.id;

  if (!isTeacher(userId)) {
    return redirect('/');
  }

  return <>{children}</>;
};

export default TeacherLayout;
