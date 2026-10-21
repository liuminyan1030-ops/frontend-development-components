/*
  File: components/NavBar.tsx
  Author: Minyan Liu
  Date: October 21, 2026

  This component draws the bar across the top of every page.
  Inputs: none. It does not take props and does not use state.
  Processing: it shows the school name and three in-page links.
  Each link uses href="#section-id" so the browser jumps down the same page.
  Output: a header that layout.tsx places above the portal.
*/const Navbar = () => {
  return <header className="bg-emerald-800 text-white">
    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 md:flex-row items-center justify-between">
      <h1 className="text-xl font-bold">New Generation High School</h1>
      <nav className="flex flex-wrap gap-3 text-sm font-semibold">       
          <a href="#overview" className="hover:underline">Overview</a>
          <a href="#students" className="hover:underline">Students</a>
          <a href="#add-a-student" className="hover:underline">Add a Student</a>      
      </nav>
    </div>
  </header>;
};

export default Navbar;