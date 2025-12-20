import type React from "react"
import "./globals.css"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-plus-jakarta",
})

export const metadata = {
  title: "Dra. Irisnádia Faria - Estética e Saúde",
  description: "Harmonização facial natural, estética avançada e ozonioterapia. Tratamentos personalizados com foco em resultados sutis e cuidado humanizado.",
  generator: 'v0.app',
  icons: {
    icon: '/images/favicon-irisnadia.png',
    shortcut: '/images/favicon-irisnadia.png',
    apple: '/images/favicon-irisnadia.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
