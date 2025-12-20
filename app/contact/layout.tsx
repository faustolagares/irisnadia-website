import type React from "react"
import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Contato - Dra. Irisnádia Faria | Agende sua Consulta",
  description:
    "Entre em contato com a Dra. Irisnádia Faria para agendar sua consulta. Harmonização facial, estética avançada e ozonioterapia. WhatsApp: (62) 98321-6630",
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
