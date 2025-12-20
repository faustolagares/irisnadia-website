import type React from "react"
import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Tratamentos Estéticos Personalizados | Dra. Irisnádia Faria",
  description: "Harmonização facial, preenchimentos, rinomodelação e ozonioterapia com resultados naturais e atendimento humanizado.",
  openGraph: {
    title: "Tratamentos Estéticos Personalizados | Dra. Irisnádia Faria",
    description: "Harmonização facial, preenchimentos, rinomodelação e ozonioterapia com resultados naturais e atendimento humanizado.",
    images: [
      {
        url: "/images/irisnadia-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Irisnádia Faria - Tratamentos Estéticos",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamentos Estéticos Personalizados | Dra. Irisnádia Faria",
    description: "Harmonização facial, preenchimentos, rinomodelação e ozonioterapia com resultados naturais e atendimento humanizado.",
    images: ["/images/irisnadia-thumbnail.jpg"],
  },
}

export default function ServicesLayout({
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
