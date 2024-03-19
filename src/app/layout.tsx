import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const DeadSpaceTitle = localFont({
  src: '../../public/fonts/DeadSpaceTitleFont.ttf',
  display: 'swap',
  variable: '--font-DeadSpaceTitle',
}); 

const falconpunchstraight = localFont({
  src: '../../public/fonts/falconpunchstraight.ttf',
  display: 'swap',
  variable: '--font-falconpunchstraight',
}); 

const OCRAEXT = localFont({
  src: '../../public/fonts/OCRAEXT.ttf',
  display: 'swap',
  variable: '--font-OCRAEXT',
}); 

const Orienta_Regular = localFont({
  src: '../../public/fonts/Orienta-Regular.ttf',
  display: 'swap',
  variable: '--font-Orienta_Regular',
}); 

export const metadata: Metadata = {
  title: "Benjamin Desmet",
  description: "Personnal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-[url('../../public/images/bg-star.png')] bg-cover bg-no-repeat">
      <body className={`${inter.className} ${DeadSpaceTitle.variable} ${falconpunchstraight.variable} ${OCRAEXT.variable} ${Orienta_Regular.variable}`}>{children}</body>
    </html>
  );
}
