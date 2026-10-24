/*
  File: app/page.tsx
  Author: Minyan Liu
  Date: October 21, 2026

  This file is the only page in the assignment.
  Inputs: none.
  Processing: it does not add extra routes or Next.js Link. It only renders
  StudentPortal, which owns the student list and the rest of the page.
  Output: the home page of the portal.
*/

import StudentPortal from "@/components/StudentPortal";


const Home = () => {
  return (    
      <StudentPortal />
  );
};

export default Home;
