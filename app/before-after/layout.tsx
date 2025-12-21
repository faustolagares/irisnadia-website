import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resultados dos Procedimentos | Dra. Irisnádia Faria",
  description: "Veja os resultados reais dos nossos tratamentos estéticos com foco em equilíbrio facial e beleza natural.",
  openGraph: {
    title: "Resultados dos Procedimentos | Dra. Irisnádia Faria",
    description: "Veja os resultados reais dos nossos tratamentos estéticos com foco em equilíbrio facial e beleza natural.",
    images: [
      {
        url: "/images/irisnadia-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Irisnádia Faria - Resultados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resultados dos Procedimentos | Dra. Irisnádia Faria",
    description: "Veja os resultados reais dos nossos tratamentos estéticos com foco em equilíbrio facial e beleza natural.",
    images: ["/images/irisnadia-thumbnail.jpg"],
  },
}

export default function BeforeAfterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
