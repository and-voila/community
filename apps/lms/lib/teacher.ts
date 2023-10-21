/* eslint-disable no-console */
export const isTeacher = (userId?: string | null) => {
  console.log('UserId:', userId);
  console.log('NEXT_PUBLIC_TEACHER_ID:', process.env.NEXT_PUBLIC_TEACHER_ID);

  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_ID.split(',');
  console.log('TeacherIds:', teacherIds);

  return teacherIds.includes(userId);
};
