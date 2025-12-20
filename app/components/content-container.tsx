import type { ReactNode } from "react"

interface ContentContainerProps {
  children: ReactNode
  className?: string
}

export default function ContentContainer({ children, className = "" }: ContentContainerProps) {
  return <div className={`px-4 md:px-8 w-full mx-auto md:max-w-[90%] lg:max-w-6xl ${className}`}>{children}</div>
}
