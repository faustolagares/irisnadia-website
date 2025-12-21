import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dra. Irisnádia Faria | Bio",
  description: "Conheça a Dra. Irisnádia Faria - Especialista em Harmonização Facial e Estética Avançada em Goiânia.",
  openGraph: {
    title: "Dra. Irisnádia Faria | Bio",
    description: "Conheça a Dra. Irisnádia Faria - Especialista em Harmonização Facial e Estética Avançada em Goiânia.",
    images: [
      {
        url: "/images/irisnadia-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Irisnádia Faria",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Irisnádia Faria | Bio",
    description: "Conheça a Dra. Irisnádia Faria - Especialista em Harmonização Facial e Estética Avançada em Goiânia.",
    images: ["/images/irisnadia-thumbnail.jpg"],
  },
}

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return children
}

