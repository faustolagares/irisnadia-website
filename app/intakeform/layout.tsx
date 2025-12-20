import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Formulário de Avaliação - Dra. Irisnádia Faria",
  description: "Complete seu formulário de avaliação para os tratamentos de estética avançada e harmonização facial da Dra. Irisnádia Faria.",
}

export default function IntakeFormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
