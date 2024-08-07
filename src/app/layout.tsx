import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const Luciole = localFont({
  src: '../../public/fonts/Luciole-Regular.ttf',
  display: 'swap',
  variable: '--font-Luciole',
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
    <html lang="en" className=" bg-[#100E05] bg-cover bg-center bg-no-repeat">
      <body className={`${DeadSpaceTitle.variable} ${falconpunchstraight.variable} ${Luciole.variable} ${Orienta_Regular.variable}`}>{children}</body>
    </html>
  );
}
