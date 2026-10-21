/*
  File: app/layout.tsx
  Author: Minyan Liu
  Date: October 21, 2026

  This file is the App Router layout. Next.js wraps every page with it.
  Inputs: children, which is the page content.
  Processing: it imports global Tailwind styles, then draws Navbar, children,
  and Footer. The page itself is only StudentPortal.
  Output: the HTML shell for the one-page portal.
*/
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title:"New Generation High School Portal",
  description:"Student portal for New Generation High School",
}
const RootLayout=({ children }: { children: React.ReactNode })=> {
  return (
    <html
      lang="en"
     >
      
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;