'use client';
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "./globals.css";
import TopNav from "@/components/TopNav";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <TopNav/>
          <Toaster/>
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
