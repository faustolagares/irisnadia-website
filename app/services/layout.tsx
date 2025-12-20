import type React from "react"
import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Our Services | Juliana Duran",
  description:
    "Explore our range of therapeutic massage services including Brazilian Lymphatic Drainage, Deep Tissue Massage, and more.",
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
