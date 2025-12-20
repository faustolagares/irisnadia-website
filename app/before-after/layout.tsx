import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Antes e Depois - Dra. Irisnádia Faria",
  description: "Veja os resultados reais dos tratamentos de harmonização facial e estética avançada da Dra. Irisnádia Faria. Transformações naturais e equilibradas.",
}

export default function BeforeAfterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
