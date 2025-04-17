import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Kairos - Keep Streaks",
    description:
        "Kairos is a intuitive dev community that allows you create project, keep streaks, get reviews with a leaderboard feature.",
        keywords: "kairos, streak, 30 days challenge, #30daysofcide, reddit, vickyjaychallenge",
    metadataBase: new URL("https://kairosapp.vercel.app"),
    openGraph: {
        images: [
            {
                url: "/thumbnail.jpg",
                alt: "thumbnail"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        }
    }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
