import type React from "react"
import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Serviços - Dra. Irisnádia Faria | Estética Avançada",
  description:
    "Conheça nossos tratamentos de harmonização facial, rinomodelação, preenchimento labial, bioestimuladores de colágeno, ozonioterapia estética e terapêutica. Tratamentos personalizados.",
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
