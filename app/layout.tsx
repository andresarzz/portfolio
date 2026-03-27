import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://andresarzz.github.io"),
  title: "Andrés Araya | Junior Full Stack Developer",
  description:
    "Professional portfolio of Andrés Araya, a Software Engineering student and Junior Full Stack Developer with experience in web applications, backend development, databases, and DataOps.",
  keywords: [
    "Andrés Araya",
    "Junior Full Stack Developer",
    "Software Engineering Student",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "portfolio",
    "web developer",
    "backend developer",
    "DataOps",
    "TransUnion",
  ],
  authors: [{ name: "Andrés Araya" }],
  creator: "Andrés Araya",
  openGraph: {
    title: "Andrés Araya | Junior Full Stack Developer",
    description:
      "Portfolio focused on full stack development, backend solutions, databases, and recruiter-ready project presentation.",
    url: "/",
    siteName: "Andrés Araya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Araya | Junior Full Stack Developer",
    description:
      "Software Engineering student with project experience in React, Next.js, Node.js, databases, and DataOps.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
