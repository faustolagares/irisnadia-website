"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Globe, Instagram, Facebook, ArrowRight, Calendar, Eye, Mail } from "lucide-react"

export default function BioPage() {
  return (
    <div className="min-h-screen bg-[#f5f2ee]">
      {/* Hero Section with Cover Image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        {/* Cover Image */}
        <Image
          src="/images/irisnadia-hero.jpg"
          alt="Dra. Irisnádia Faria"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-md mx-auto px-4 pb-8">
        {/* Avatar Section - Overlapping the hero */}
        <div className="flex flex-col items-center -mt-20 mb-6">
          {/* Avatar Circle */}
          <div className="relative mb-4">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white relative z-10">
              <Image
                src="/images/irisnadia-faria-profile.jpg"
                alt="Dra. Irisnádia Faria"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2 text-center">
            Dra. Irisnádia Faria
          </h1>
          <p className="text-[#A17840] text-sm md:text-base font-medium text-center mb-1">
            Especialista em Estética Avançada
          </p>
          <p className="text-gray-600 text-xs md:text-sm text-center max-w-xs">
            Harmonização Facial • Ozonioterapia • Tratamentos Personalizados
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Website */}
          <a
            href="https://seu-dominio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-all duration-300 group"
            aria-label="Website"
          >
            <Globe size={22} className="text-[#A17840] group-hover:text-white transition-colors" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/drairisnadiafaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-all duration-300 group"
            aria-label="Instagram"
          >
            <Instagram size={22} className="text-[#A17840] group-hover:text-white transition-colors" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/dra.irisnadiafaria"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-all duration-300 group"
            aria-label="Facebook"
          >
            <Facebook size={22} className="text-[#A17840] group-hover:text-white transition-colors" />
          </a>

          {/* Phone */}
          <a
            href="tel:+5562983216630"
            className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-all duration-300 group"
            aria-label="Telefone"
          >
            <Phone size={22} className="text-[#A17840] group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          {/* Agendar Consulta */}
          <a
            href="https://wa.me/5562983216630"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-[#A17840] to-[#D5B78C] text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
          >
            <Calendar size={20} />
            <span>Agendar Consulta</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Ver Serviços */}
          <Link
            href="/services"
            className="w-full bg-white border-2 border-[#A17840] text-[#A17840] py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#f5f2ee] hover:scale-[1.02] transition-all duration-300 group shadow-sm"
          >
            <Eye size={20} />
            <span>Ver Serviços</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Resultados */}
          <Link
            href="/before-after"
            className="w-full bg-white border-2 border-[#A17840] text-[#A17840] py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#f5f2ee] hover:scale-[1.02] transition-all duration-300 group shadow-sm"
          >
            <Eye size={20} />
            <span>Resultados</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Contato */}
          <Link
            href="/contact"
            className="w-full bg-white border-2 border-[#A17840] text-[#A17840] py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#f5f2ee] hover:scale-[1.02] transition-all duration-300 group shadow-sm"
          >
            <Mail size={20} />
            <span>Entre em Contato</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">
            Goiânia, GO
          </p>
          <p className="text-xs text-gray-500">
            <Link href="/" className="text-[#A17840] hover:underline">
              Voltar ao site
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

