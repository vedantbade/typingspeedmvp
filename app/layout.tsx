import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Free Typing Speed Test – Check Your WPM Online",
  description:
    "Test your typing speed online with our free 60-second typing test. Measure WPM, accuracy, and improve your typing skills instantly.",
  keywords: [
    "typing speed test",
    "WPM test",
    "typing test online",
    "free typing test",
    "typing speed",
    "words per minute",
  ],
  openGraph: {
    title: "Free Typing Speed Test – Check Your WPM Online",
    description:
      "Test your typing speed online with our free 60-second typing test. Measure WPM, accuracy, and improve your typing skills instantly.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "@/components/Navbar";
import { SoundProvider } from "@/components/SoundToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <SoundProvider>
          <Navbar />
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
