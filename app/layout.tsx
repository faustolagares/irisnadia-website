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
  title: "Harmonização Facial & Estética Avançada | Dra. Irisnádia Faria",
  description: "Especialista em estética facial, ozonioterapia e preenchimentos com resultados naturais e atendimento humanizado em Goiânia.",
  generator: 'v0.app',
  icons: {
    icon: '/images/favicon-irisnadia.png',
    shortcut: '/images/favicon-irisnadia.png',
    apple: '/images/favicon-irisnadia.png',
  },
  openGraph: {
    title: "Harmonização Facial & Estética Avançada | Dra. Irisnádia Faria",
    description: "Especialista em estética facial, ozonioterapia e preenchimentos com resultados naturais e atendimento humanizado em Goiânia.",
    images: [
      {
        url: "/images/irisnadia-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Irisnádia Faria - Estética e Saúde",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmonização Facial & Estética Avançada | Dra. Irisnádia Faria",
    description: "Especialista em estética facial, ozonioterapia e preenchimentos com resultados naturais e atendimento humanizado em Goiânia.",
    images: ["/images/irisnadia-thumbnail.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
