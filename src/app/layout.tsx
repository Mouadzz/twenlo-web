import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Twenlo - Find Your Million-Dollar Startup Opportunity",
  description: "Stop guessing what customers want. Our platform helps you discover profitable markets and generate startup ideas from real customer pain points across online communities.",
};

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}