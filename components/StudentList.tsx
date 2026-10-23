/*
  File: components/StudentList.tsx
  Author: Nguyen Hoang Yen
  Date: October 22, 2026

  This component draws the grid of student cards.
  Inputs: students (the students to show) and onRemove (a callback that
  takes a student id and is passed down to each card).
  Processing: it has no state. If the array is empty it shows a message;
  otherwise it maps each student to one StudentCard, using the id as key.
  Output: a responsive grid (1 column on phones, more on wider screens)
  or the "No students to show." message.
*/
import { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

// ---- Props ----
interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  // ---- Empty case ----
  if (students.length === 0) {
    return (
      <p className="mt-4 rounded-xl bg-white p-4 text-center text-slate-600 shadow">
        No students to show.
      </p>
    );
  }

  // ---- Grid of cards ----
  return (
    <div id="students" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default StudentList;