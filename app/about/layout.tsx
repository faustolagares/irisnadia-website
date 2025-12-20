import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conheça a Profissional | Dra. Irisnádia Faria",
  description: "Dra. Irisnádia é especialista em estética avançada com foco em segurança, naturalidade e cuidado individualizado.",
  openGraph: {
    title: "Conheça a Profissional | Dra. Irisnádia Faria",
    description: "Dra. Irisnádia é especialista em estética avançada com foco em segurança, naturalidade e cuidado individualizado.",
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
    title: "Conheça a Profissional | Dra. Irisnádia Faria",
    description: "Dra. Irisnádia é especialista em estética avançada com foco em segurança, naturalidade e cuidado individualizado.",
    images: ["/images/irisnadia-thumbnail.jpg"],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
