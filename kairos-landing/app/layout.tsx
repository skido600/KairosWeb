import type { Metadata } from "next";
import "./globals.css";
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
      <body>{children}</body>
    </html>
  );
}
