import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

//components

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Mock Helpdesk",
  description: "A Helpdesk app created by Jonathan Su (hjonsu)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}

// children is the page component being viewed in browser
