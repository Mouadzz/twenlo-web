import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Twenlo - Discover Profitable Business Ideas from Real Market Demand",
  description: "Stop guessing what customers want. Discover profitable markets, analyze traffic metrics, and generate startup ideas from real customer pain points across online communities. Start your free trial today.",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}