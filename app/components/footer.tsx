import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/irisnadia-faria-white-horizontal.png"
                alt="Dra. Irisnádia Faria Logo"
                width={180}
                height={45}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Harmonização facial natural, estética avançada e ozonioterapia. Tratamentos personalizados com foco em
              resultados sutis e cuidado humanizado.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/dra.irisnadiafaria"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={15} strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.instagram.com/dra.irisnadiafaria"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-medium mb-5 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-base font-medium mb-5 text-white">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Harmonização Facial
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Rinomodelação
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Preenchimento Labial
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Ozonioterapia
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  Bioestimulador de Colágeno
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-base font-medium mb-5 text-white">Informações de Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#A17840] mt-1" size={16} />
                <span className="text-gray-400 text-sm">
                  Condomínio Evidence Office
                  <br />
                  Rua Teresina, 380 - Sala 403
                  <br />
                  Alto da Glória, Goiânia (GO)
                  <br />
                  CEP 74815-715
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#A17840]" size={16} />
                <a href="tel:+5562983216630" className="text-gray-400 hover:text-[#A17840] transition-colors text-sm">
                  (62) 98321-6630
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#A17840]" size={16} />
                <a
                  href="mailto:irisnadiaguimaraes@gmail.com"
                  className="text-gray-400 hover:text-[#A17840] transition-colors text-sm"
                >
                  irisnadiaguimaraes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p className="text-[10px]">&copy; {new Date().getFullYear()} Dra. Irisnádia Faria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
