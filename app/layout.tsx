import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const fonts = Parkinsans({
  subsets: ["latin"],
  display: "swap",
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
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`${fonts.className} antialiased`}
      >
        <main
          className="
            flex
            flex-col
            bg-cover 
            bg-center 
            text-white
            bg-no-repeat
            min-h-screen 
          "
          style={{ backgroundImage: "url('/img/bg-by-pexels-francesco-sommacal.jpg')" }}
        >
          <nav
            className="
              flex
              py-4
              px-4
              xl:px-24
              items-center
              bg-opacity-50
              justify-between
        ">
            <Link
              href="/"
              className="text-xl text-primary_light">
              regalbrains.
            </Link>
            <Link href="/">
              <Image
                src="/img/rb-dark-logo-header.svg"
                alt="Regal Brains logo"
                width={24}
                height={24}
              />
            </Link>
            <ul className="flex uppercase text-xs gap-12">
              <li><a className="text-primary_light" href="https://www.linkedin.com/company/regalbrain/">LinkedIn</a></li>
            </ul>
          </nav>
          <section
            className="
              flex
              flex-grow
              p-4
              xl:p-12
              xl:m-12
              bg-opacity-0
              backdrop-blur-md
            ">

          {children}
        </section>
          <footer className="px-4 xl:px-24 py-12 flex text-sm">
            <p>&copy; Regal Brains, LLC {year}</p>
            <p className="pl-6 hidden xl:inline">Follow us on <a className="text-primary_light" href="https://www.linkedin.com/company/regalbrain/">LinkedIn</a></p>
          </footer>
        </main>
      </body>
    </html>
  );
}
