/*
  File: components/SearchBox.tsx
  Author: Iris Dunbar
  Date: October 22, 2026

  Creates search box input field and wrapper for search box.
  Creates and holds base handler logic for search box.

  Inputs: Search term, and search state passed as a prop.
  Processing: Doesn't hold state, parent passes state to it.
  Output: Input field and wrapper for search box.
*/
interface StudentCardProps {
  query: string;
  onQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ query, onQuery }: StudentCardProps) {
  return(
    <div className="flex gap-3 mt-4">
      <input
        type="text"
        value={query}
        onChange={onQuery}
        placeholder="Search students"
        className="flex-1 rounded-lg border border-slate-300 px-4 py-2
          text-slate-800 focus:border-emerald-700 focus:outline-none"
      />
    </div>
  );
}