import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Massage Intake Form | Juliana Duran",
  description: "Complete your massage intake form for Juliana Duran's therapeutic massage services.",
}

export default function IntakeFormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
