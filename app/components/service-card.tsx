import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  duration: string
  price: string
  imageSrc: string
  slug: string
}

export default function ServiceCard({ title, description, duration, price, imageSrc, slug }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 group hover:shadow-md transition-shadow duration-300">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-heading text-xl font-medium">{title}</h3>
          <div className="text-[#A17840] font-medium">{price}</div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{duration}</span>
          <Link
            href={`/services/${slug}`}
            className="text-[#A17840] flex items-center gap-1 text-sm font-medium hover:text-[#B89060] transition-colors"
          >
            Learn More
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
