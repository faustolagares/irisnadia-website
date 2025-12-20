import type React from "react"
import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Contact Us | Juliana Duran",
  description:
    "Get in touch with Juliana Duran for Brazilian Lymphatic Drainage and therapeutic massage services in Denver, CO.",
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
