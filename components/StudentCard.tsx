"use client";
/*
  File: components/StudentCard.tsx
  Author: Nguyen Hoang Yen
  Date: October 22, 2026

  This component draws one student as a card.
  Inputs: student (a Student) and onRemove (a callback that takes the id).
  Processing: it keeps one piece of state, showDetails, so each card opens
  and closes on its own. The Honour roll badge is worked out from the
  average on every render, so it is not state.
  Output: a card with the full name, the grade, a Show/Hide details button
  and a Remove button. Remove only asks the parent to remove the student.
*/
import { useState } from "react";
import { Student } from "@/data/students";

// ---- Props ----
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // ---- State: only this card's details panel ----
  const [showDetails, setShowDetails] = useState(false);

  // ---- Worked out from props, not stored in state ----
  const isHonourRoll = student.average >= 80;

  return (
    <div className="rounded-xl bg-white border-2 border-slate-400 shadow-md p-4 flex flex-col gap-3">
      {/* ---- Name and grade ---- */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 wrap-break-word">
          {student.firstName} {student.lastName}
        </h3>
        <p className="text-lg text-slate-600">Grade {student.grade}</p>
      </div>

      {/* ---- Details (only when opened) ---- */}
      {showDetails && (
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg bg-slate-200 p-3">
          <p className="text-sm font-semibold text-slate-800">
            Average: <span className="font-bold px-2 text-red-800">{student.average}</span>
          </p>
          {isHonourRoll && (
            <span className="rounded-full font-bold bg-emerald-100 px-2 py-0.5 text-sm font-semibold text-emerald-800">
              Honour roll
            </span>
          )}
        </div>
      )}

      {/* ---- Buttons ---- */}
      <div className="flex flex-wrap gap-2 mt-auto px-8 items-center justify-between">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="rounded-lg bg-emerald-800 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700 cursor-pointer shadow-sm"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          type="button"
          onClick={() => onRemove(student.id)}
          className="rounded-lg border border-red-600 px-3 py-1.5 text-sm font-semibold text-red-600 hover:bg-red-50 cursor-pointer shadow-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;