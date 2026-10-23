"use client"

import { useState } from "react";
import StudentList from "./StudentList";
import { initialStudents } from "@/data/students";
import { Student } from "@/data/students";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import AddStudent from "./AddStudent";

/*
  File: components/StudentPortal.tsx
  Author:Iris Dunbar
  Date: October 22, 2026

  Main component of application. 
  Brings together all other components and manages state for most of the application.
  Handles all state changes and passes down necessary props to child components.
  Styles page to combine all components into one cohesive portal.

  Inputs: Technically none, but uses student.ts data file to get initial students.
  Processing: 
  Output: Three separate sections which can be reached through Navbar buttons, and one clear all button.
          Each section contains the necessary components for functionality and display.
          First section contains StatsPanel.
          Second section contains SearchBox and StudentList.
          Third section contains AddStudent.
*/
export default function StudentPortal() {
  const [students, setStudents] = useState<Student[]>(initialStudents)
  const [query, setQuery] = useState("");

  const matching = students.filter((student) =>
    student.firstName.toLowerCase().includes(query.toLowerCase()) || 
    student.lastName.toLowerCase().includes(query.toLowerCase())
  );

  const honourRollCount = (students: Student[]) => {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
      if (students[i].average >= 80) {
        count ++;
      }
    }
    return (count);
  }

  const gradeTwelveCount = (students: Student[]) => {
    let count = 0;
    for (let i = 0; i < students.length; i++) {
      if (students[i].grade == 12) {
        count ++;
      }
    }
    return (count);
  };

  const handleRemove = (id: number) => {
    setStudents(students.filter((Student) => Student.id !== id));
  };

  const handleQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value);
  };

  const handleAdd = (firstName: string, lastName: string, grade: number, average: number) => {
    const newStudent = { id: (students.length + 1), firstName: firstName, lastName: lastName, grade: grade, average: average};
    setStudents([...students, newStudent]);
  };

  const handleClear = () => {
    setStudents([]);
  };


  return(
    <main>
      <div id="overview">
        <StatsPanel studentCount={students.length} honourRollCount={honourRollCount(students)} gradeTwelveCount={gradeTwelveCount(students)}/>
      </div>
      <div id="students">
        <SearchBox query={query} onQuery={handleQueryChange} />
        <StudentList students={matching} onRemove={handleRemove}/>
      </div>
      <div id="add-a-student">
        <AddStudent onAdd={handleAdd}/>
      </div>
      <button
        onClick={handleClear}
        className="mx-60 mt-4 w-55 h-10.5 rounded-lg border border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-50"
      >
        Clear all
      </button>
    </main>
  )
}