"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, Phone, ArrowRight, Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") {
      return true
    }
    return pathname === path || (path !== "/" && pathname?.startsWith(path))
  }

  return (
    <>
      {/* Top Bar - Hidden on small screens */}
      <div className="bg-[#f5f2ee] py-3 text-sm text-gray-600 hidden sm:block">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:gap-8 items-center mb-2 md:mb-0">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-[#A17840] flex-shrink-0" />
              <a
                href="https://maps.google.com/?q=Condomínio+Evidence+Office,+Rua+Teresina,+380+-+Alto+da+Glória,+Goiânia+GO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline truncate max-w-[250px] md:max-w-none"
              >
                Condomínio Evidence Office, Rua Teresina, 380 - Alto da Glória, Goiânia (GO)
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} className="text-[#A17840] flex-shrink-0" />
              <a href="mailto:irisnadiaguimaraes@gmail.com" className="text-xs hover:underline">
                irisnadiaguimaraes@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/dra.irisnadiafaria" aria-label="Facebook" className="hover:text-[#A17840] transition-colors" target="_blank" rel="noopener noreferrer">
              <Facebook size={16} />
            </Link>
            <Link href="https://www.instagram.com/drairisnadiafaria/" aria-label="Instagram" className="hover:text-[#A17840] transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`bg-white pt-4 pb-2 md:pb-4 sticky top-0 z-50 ${scrolled ? "shadow-md" : ""} transition-shadow duration-300`}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/irisnadia-faria-horizontal.png"
                alt="Dra. Irisnádia Faria Logo"
                width={200}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="tel:+5562983216630"
                className="p-2 rounded-full bg-[#f5f2ee] text-[#A17840] hover:bg-[#A17840] hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone size={18} />
              </a>
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#A17840]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row items-center">
            <Link
              href="/"
              className={`px-3 py-2 font-medium text-sm hover:text-[#A17840] transition-colors ${
                isActive("/") ? "text-[#A17840]" : "text-gray-800"
              }`}
            >
              INÍCIO
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 font-medium text-sm hover:text-[#A17840] transition-colors ${
                isActive("/about") ? "text-[#A17840]" : "text-gray-800"
              }`}
            >
              SOBRE
            </Link>
            <Link
              href="/#aesthetic-services"
              className={`px-3 py-2 font-medium text-sm hover:text-[#A17840] transition-colors ${
                isActive("/services") || pathname === "/#aesthetic-services" ? "text-[#A17840]" : "text-gray-800"
              }`}
            >
              SERVIÇOS
            </Link>
            <Link
              href="/before-after"
              className={`px-3 py-2 font-medium text-sm hover:text-[#A17840] transition-colors ${
                isActive("/before-after") ? "text-[#A17840]" : "text-gray-800"
              }`}
            >
              ANTES E DEPOIS
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 font-medium text-sm hover:text-[#A17840] transition-colors ${
                isActive("/contact") ? "text-[#A17840]" : "text-gray-800"
              }`}
            >
              CONTATO
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center scale-90">
              <div className="bg-[#f5f2ee] p-1.5 rounded-full">
                <Phone size={18} />
              </div>
              <div className="ml-1.5">
                <p className="text-xs text-gray-500">LIGUE AGORA</p>
                <a href="tel:+5562983216630" className="text-sm font-medium hover:underline">
                  (62) 98321-6630
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/5562983216630"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A17840] text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-[#B89060] transition-colors text-sm"
              style={{ borderRadius: "6px" }}
            >
              Agendar Consulta
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {/*
        <div
          className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
        */}

        {/* Mobile Menu Panel */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ paddingTop: "0px" }}
        >
          <div className="flex flex-col h-full">
            {/* Cabeçalho do menu móvel */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/irisnadia-faria-horizontal.png"
                  alt="Dra. Irisnádia Faria Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#A17840]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Conteúdo do menu com scroll */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-1 mb-8">
                <Link
                  href="/"
                  className={`px-4 py-3 rounded-md font-medium text-sm hover:bg-[#f5f2ee] transition-colors ${
                    isActive("/") ? "text-[#A17840] bg-[#f5f2ee]" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  INÍCIO
                </Link>
                <Link
                  href="/about"
                  className={`px-4 py-3 rounded-md font-medium text-sm hover:bg-[#f5f2ee] transition-colors ${
                    isActive("/about") ? "text-[#A17840] bg-[#f5f2ee]" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SOBRE
                </Link>
                <Link
                  href="/#aesthetic-services"
                  className={`px-4 py-3 rounded-md font-medium text-sm hover:bg-[#f5f2ee] transition-colors ${
                    isActive("/services") || pathname === "/#aesthetic-services"
                      ? "text-[#A17840] bg-[#f5f2ee]"
                      : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SERVIÇOS
                </Link>
                <Link
                  href="/before-after"
                  className={`px-4 py-3 rounded-md font-medium text-sm hover:bg-[#f5f2ee] transition-colors ${
                    isActive("/before-after") ? "text-[#A17840] bg-[#f5f2ee]" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ANTES E DEPOIS
                </Link>
                <Link
                  href="/contact"
                  className={`px-4 py-3 rounded-md font-medium text-sm hover:bg-[#f5f2ee] transition-colors ${
                    isActive("/contact") ? "text-[#A17840] bg-[#f5f2ee]" : "text-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTATO
                </Link>
              </nav>

              {/* Mobile Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#f5f2ee] p-2 rounded-full">
                    <Phone size={18} className="text-[#A17840]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">LIGUE AGORA</p>
                    <a href="tel:+5562983216630" className="text-sm font-medium hover:underline">
                      (62) 98321-6630
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#f5f2ee] p-2 rounded-full">
                    <Mail size={18} className="text-[#A17840]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">ENVIE EMAIL</p>
                    <a href="mailto:irisnadiaguimaraes@gmail.com" className="text-sm font-medium hover:underline">
                      irisnadiaguimaraes@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">Siga-nos</p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/dra.irisnadiafaria"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-[#f5f2ee] flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={18} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/drairisnadiafaria/"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-[#f5f2ee] flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Cart and Book Now - fixado na parte inferior */}
            <div className="border-t border-gray-100 p-4 bg-white">
              <a
                href="https://wa.me/5562983216630"
                className="bg-[#A17840] text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#B89060] transition-colors text-sm w-full"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Agendar Consulta
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
