import type React from "react"
import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Agende sua Avaliação Estética | Dra. Irisnádia Faria",
  description: "Entre em contato com a clínica para agendar sua consulta estética em Goiânia com a Dra. Irisnádia Faria.",
  openGraph: {
    title: "Agende sua Avaliação Estética | Dra. Irisnádia Faria",
    description: "Entre em contato com a clínica para agendar sua consulta estética em Goiânia com a Dra. Irisnádia Faria.",
    images: [
      {
        url: "/images/irisnadia-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Irisnádia Faria - Contato",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agende sua Avaliação Estética | Dra. Irisnádia Faria",
    description: "Entre em contato com a clínica para agendar sua consulta estética em Goiânia com a Dra. Irisnádia Faria.",
    images: ["/images/irisnadia-thumbnail.jpg"],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
