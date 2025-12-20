import type React from "react"

interface LayoutContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default function LayoutContainer({ children, className = "", as: Component = "div" }: LayoutContainerProps) {
  return <Component className={`container mx-auto px-4 md:px-8 ${className}`}>{children}</Component>
}
