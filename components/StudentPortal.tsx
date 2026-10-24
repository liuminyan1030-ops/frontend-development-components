"use client";
/*
  File: components/StudentPortal.tsx
  Author: Iris Dunbar
  Date: October 22, 2026

  This is the parent that owns the student list for the whole page.
  Inputs: none. It copies initialStudents from the data file into state.
  Processing: it stores students and search text. Stats and the visible list
  are calculated on every render. Add copies the array and appends a unique id.
  Remove and Clear all copy the array or replace it with an empty one.
  Output: Overview, Students, Add a student, and the Clear all button.
*/

import { useState } from "react";
import StudentList from "./StudentList";
import { initialStudents } from "@/data/students";
import { Student } from "@/data/students";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import AddStudent from "./AddStudent";


const StudentPortal=()=> {
  // The list and the search text live only in this parent.
  const [students, setStudents] = useState<Student[]>(initialStudents)
  const [query, setQuery] = useState("");

  // Stats and search results are derived. They are not extra state.
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

  // Children ask for a change. This parent updates the list with a new array.
  const handleRemove = (id: number) => {
    setStudents(students.filter((Student) => Student.id !== id));
  };

  const handleQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(event.target.value);
  };

  const handleAdd = (firstName: string, lastName: string, grade: number, average: number) => {
    const nextId=
      students.length === 0 ? 1 : Math.max(...students.map((student) => student.id)) + 1;
    const newStudent = { id: nextId, firstName: firstName, lastName: lastName, grade: grade, average: average};
    setStudents([...students, newStudent]);
  };

  const handleClear = () => {
    setStudents([]);
  };


  return(
    <main className="max-w-6xl mx-auto px-4 py-6 w-full">
      {/* Overview section: three numbers about the full list */}
      <div id="overview">
        <h2 className="text-2xl font-bold text-emerald-800 mt-4">Overview</h2>
        <StatsPanel studentCount={students.length} honourRollCount={honourRollCount(students)} gradeTwelveCount={gradeTwelveCount(students)}/>
      </div>
      {/* Students section: search box and the filtered cards */}
      <div id="students">
        <h2 className="text-2xl font-bold text-emerald-800 mt-4">Students</h2>
        <SearchBox query={query} onQuery={handleQueryChange} />
        <StudentList students={matching} onRemove={handleRemove}/>
      </div>
      {/* Add a student section */}
      <div id="add-a-student">
        <h2 className="text-2xl font-bold text-emerald-800 mt-4">Add a student</h2>
        <AddStudent onAdd={handleAdd}/>
      </div>
      {/* Clear all belongs here, not in AddStudent */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={handleClear}
          className="rounded-lg border border-red-600 px-4 py-2 font-semibold text-red-600 hover:bg-red-50 cursor-pointer shadow-sm"
        >
          Clear all
        </button>
      </div>
    </main>
  )
}

export default StudentPortal;