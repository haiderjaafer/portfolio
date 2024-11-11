import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "سيرة ذاتية الكترونية",
  description: "سيرة ذاتية الكترونية تتضمن التعليم الدورات السكن والاتصال",
  authors: [
    { name: 'haider jaafer kaream', url: 'https://github.com/haiderjaafer' }
  ]
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer  style={{ width: "400px",textAlign:"center" ,fontWeight:"bolder",fontSize:"18px" }} theme="colored" position="top-center" />
        {children}
      </body>
    </html>
  );
}
