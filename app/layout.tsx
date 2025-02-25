import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const fontPrimary = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regal Brains",
  description: "Makers of the app that changes its users lives for the better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
