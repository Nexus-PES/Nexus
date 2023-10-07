import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Nexus",
  description: "Official Website of NEXUS PES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} first-line:font-inter bg-background text-text-primary`}
      >
        <Navbar />
        {/* <div className="main -z-30">
					<div className="gradient" />
				</div> */}
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
