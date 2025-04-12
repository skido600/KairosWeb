import type { Metadata } from "next";
import { Geist_Mono, DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Kairos - Keep Streaks",
  description:
    "Kairos is a intuitive dev community that allows you create project, keep streaks, get reviews with a leaderboard feature.",
  keywords:
    "kairos, streak, 30 days challenge, #30daysofcide, reddit, vickyjaychallenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(dmSans.className, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
