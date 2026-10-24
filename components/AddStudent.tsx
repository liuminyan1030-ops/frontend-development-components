"use client";

/*
  File: components/AddStudent.tsx
  Author: Iris Dunbar
  Date: October 22, 2026

  This component lets a user type a new student and add that student.
  Inputs: onAdd from StudentPortal. The four fields are local state, not props.
  Processing: grade starts at 9 and average starts at 70. Add is a button click,
  not a form submit. Empty names do nothing. After a successful add the fields reset.
  Output: four controlled inputs and an Add student button.
*/

import { useState } from "react";

interface AddStudentProps {
    onAdd: (
      firstName: string, 
      lastName: string,
      grade: number,
      average: number,
    ) => void;
  }

const AddStudent = ({ onAdd }: AddStudentProps)=> {
  // These four fields stay in this child. The parent only receives the finished student.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(9);
  const [average, setAverage] = useState(70);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleGradeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGrade(Number(event.target.value));
  };

  const handleAverageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAverage(Number(event.target.value));
  };

  // Add is a button click, not a form submit. Empty names do nothing.
  const handleClick = () => {
    if (firstName.trim() === "" || lastName.trim() === "") {
      return;
    }
    onAdd(firstName.trim(), lastName.trim(), Number(grade), Number(average));
    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  return (
    <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-3">
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="Student first name"
        className="w-full lg:flex-1 rounded-lg border-2 border-slate-400 px-4 py-2
        text-slate-800 focus:border-emerald-700 focus:outline-none"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Student last name"
        className="w-full lg:flex-1 rounded-lg border-2 border-slate-400 px-4 py-2
        text-slate-800 focus:border-emerald-700 focus:outline-none"
      />
      <div className="flex items-center gap-2 shrink-0">
        <p className="text-sm font-semibold text-slate-600">Grade</p>
        <input
          type="number"
          value={grade}
          onChange={handleGradeChange}
          className="w-20 rounded-lg border-2 border-slate-400 px-3 py-2
          text-slate-800 focus:border-emerald-700 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <p className="text-sm font-semibold text-slate-600">Average</p>
        <input
          type="number"
          value={average}
          onChange={handleAverageChange}
          className="w-20 rounded-lg border-2 border-slate-400 px-3 py-2
          text-slate-800 focus:border-emerald-700 focus:outline-none"
        />
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="w-full lg:w-auto lg:ml-auto rounded-lg bg-emerald-800 px-4 py-2 font-semibold text-white hover:bg-emerald-700 cursor-pointer shadow-sm"
      >
        Add student
      </button>
    </div>
  );
}

export default AddStudent;