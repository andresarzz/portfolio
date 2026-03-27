import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andrés Araya | Junior Full Stack Developer",
  description:
    "Professional portfolio of Andrés Araya, a Software Engineering student and Junior Full Stack Developer with experience in web applications, backend development, databases, and DataOps.",
  keywords:
    "Andrés Araya, Junior Full Stack Developer, Software Engineering Student, React, Next.js, Node.js, TypeScript, portfolio, web developer, backend developer, DataOps, TransUnion",
  authors: [{ name: "Andrés Araya" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
