"use client"

import { useState } from "react";

interface AddStudentProps {
    onAdd: (
      firstName: string, 
      lastName: string,
      grade: number,
      average: number,
    ) => void;
  }

export default function AddStudent({ onAdd }: AddStudentProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("9")
  const [average, setAverage] = useState("70")

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleGradeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGrade(event.target.value);
  };

  const handleAverageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAverage(event.target.value);
  };

  const handleClick = () => {
    if (firstName === "" || lastName === "") {
      return;
    }
    onAdd(firstName, lastName, Number(grade), Number(average));
    setFirstName("");
    setLastName("");
    setGrade("9");
    setAverage("70");
  };

  return (
    <div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="Student first name"
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2
          text-slate-800 focus:border-emerald-700 focus:outline-none"
        />
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Student last name"
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2
          text-slate-800 focus:border-emerald-700 focus:outline-none"
        />
        <div className="flex justify-between">
          <input
            type="number"
            value={grade}
            onChange={handleGradeChange}
            className="w-26 rounded-lg border border-slate-300 px-4 py-2
            text-slate-800 focus:border-emerald-700 focus:outline-none"
          />
          <input
            type="number"
            value={average}
            onChange={handleAverageChange}
            className="w-26 rounded-lg border border-slate-300 px-4 py-2
            text-slate-800 focus:border-emerald-700 focus:outline-none"
          />
        </div>
      </div>
      <button
        onClick={handleClick}
        className="mx-60 mt-4 w-55 h-10.5 rounded-lg bg-emerald-800 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
      >
        Add student
      </button>
    </div>
  );
}