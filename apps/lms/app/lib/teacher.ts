export const isTeacher = (userId?: string | null) => {
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_ID.split(',');

  return teacherIds.includes(userId);
};
