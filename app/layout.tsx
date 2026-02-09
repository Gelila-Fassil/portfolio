import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-heading" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gelila Fassil | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer with 3+ years of experience building modern, responsive web applications using React, Next.js, and Node.js. Specializing in creating beautiful user experiences and scalable solutions.",

  icons: {
    icon: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className={`${inter.className} antialiased`}>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
