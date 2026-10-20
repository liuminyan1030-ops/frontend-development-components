import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title:"New Generation High School Portal",
  description:"Student portal for New Generation High School",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
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
