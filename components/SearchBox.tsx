"use client";
/*
  File: components/SearchBox.tsx
  Author: Iris Dunbar
  Date: October 22, 2026

  This component is the search field above the student cards.
  Inputs: query and onQuery from StudentPortal.
  Processing: it is a controlled input. Typing calls onQuery so the parent
  stores the text. The parent then filters first and last names.
  Output: a text box. This file uses "use client" because it handles onChange.
*/
interface SearchBoxProps {
  query: string;
  onQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox=({ query, onQuery }: SearchBoxProps) =>{
  return(
    <div className="flex gap-3 mt-4">
      <input
        type="text"
        value={query}
        onChange={onQuery}
        placeholder="Search students"
        className="flex-1 rounded-lg border-2 border-slate-400 px-4 py-2
          text-slate-800 focus:border-emerald-700 focus:outline-none"
      />
    </div>
  );
}

export default SearchBox;