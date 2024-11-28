export interface Grade {
  courseId: string;
  courseName: string;
  credit: number;
  score: number;
  semester: string;
  teacher: string;
}

export interface Student {
  id: string;
  name: string;
  class: string;
  major: string;
}