/*
  File: data/students.ts
  Author: Nguyen Hoang Yen
  Date: October 22, 2026

  This file holds the Student interface and the starting list of students.
  Inputs: none. It is a plain data file and does not take props.
  Processing: it describes the shape of one student, then lists ten students.
  The list has every grade from 9 to 12, three students in grade 12 and
  four students with an average of 80 or more.
  Output: the Student interface and the initialStudents array, which
  StudentPortal uses as the starting value of its state.
*/

// The shape of one student (shared by every component)
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number; // 9 to 12
  average: number; // mark out of 100
}

// Starting data
export const initialStudents: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 91 },
  { id: 2, firstName: "Liam", lastName: "Tremblay", grade: 9, average: 74 },
  { id: 3, firstName: "Sofia", lastName: "Garcia", grade: 10, average: 85 },
  { id: 4, firstName: "Noah", lastName: "Singh", grade: 11, average: 68 },
  { id: 5, firstName: "Emma", lastName: "Wong", grade: 12, average: 79 },
  { id: 6, firstName: "Ethan", lastName: "Campbell", grade: 9, average: 88 },
  { id: 7, firstName: "Amira", lastName: "Hassan", grade: 10, average: 72 },
  { id: 8, firstName: "Lucas", lastName: "Nguyen", grade: 11, average: 80 },
  { id: 9, firstName: "Olivia", lastName: "Martin", grade: 12, average: 65 },
  { id: 10, firstName: "Mateo", lastName: "Lopez", grade: 9, average: 77 },
];