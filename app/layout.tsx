import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andrés Araya - Desarrollador Full Stack",
  description:
    "Portafolio profesional de Andrés Araya, estudiante de CTP Mercedes Norte y desarrollador full stack especializado en React, Node.js y más.",
  keywords: "Andrés Araya, desarrollador, full stack, React, Node.js, portfolio, CTP Mercedes Norte",
  authors: [{ name: "Andrés Araya" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}