/*
  File: components/Footer.tsx
  Author: Minyan Liu
  Date: October 21, 2026

  This component draws the footer on every page.
  Inputs: none. It does not take props.
  Processing: it lists the school name, address, phone and email as static text.
  Output: a footer that layout.tsx places below the portal.
*/
const Footer = () => {
  return <footer className="bg-emerald-800 text-white">
    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 md:flex-row items-center justify-between">
      <p className="text-sm font-semibold">&copy;New Generation High School</p>
      <p className="text-sm font-semibold">Address: 123 Main Street, Calgary, AB, E2N 5T6</p>
      <p className="text-sm font-semibold">Phone: (123) 456-7890</p>
      <p className="text-sm font-semibold">Email: newgenerationhighschool@edu.com</p>
    </div>
  </footer>;
};

export default Footer;