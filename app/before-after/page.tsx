"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Eye } from "lucide-react"
import AnimatedContactHero from "../components/animated-contact-hero"
import ContentContainer from "../components/content-container"
import Header from "../components/header"
import Footer from "../components/footer"

// Lista das fotos de antes e depois
const beforeAfterPhotos = [
  {
    id: 1,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-35.jpg",
    alt: "Antes e Depois - Harmonização Facial",
    title: "Harmonização Facial Completa",
    description: "Resultado natural e equilibrado"
  },
  {
    id: 2,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-35 2.jpg",
    alt: "Antes e Depois - Rinomodelação",
    title: "Rinomodelação",
    description: "Refinamento natural do nariz"
  },
  {
    id: 3,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-36.jpg",
    alt: "Antes e Depois - Preenchimento Labial",
    title: "Preenchimento Labial",
    description: "Volume e definição natural"
  },
  {
    id: 4,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-36 2.jpg",
    alt: "Antes e Depois - Otomodelação",
    title: "Otomodelação",
    description: "Harmonização das orelhas"
  },
  {
    id: 5,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-36 3.jpg",
    alt: "Antes e Depois - Bioestimulador",
    title: "Bioestimulador de Colágeno",
    description: "Rejuvenescimento natural"
  },
  {
    id: 6,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-36 4.jpg",
    alt: "Antes e Depois - Ozonioterapia",
    title: "Ozonioterapia Estética",
    description: "Revitalização e oxigenação"
  },
  {
    id: 7,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-37.jpg",
    alt: "Antes e Depois - Harmonização Facial",
    title: "Harmonização Facial",
    description: "Equilíbrio e proporção"
  },
  {
    id: 8,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-37 2.jpg",
    alt: "Antes e Depois - Preenchimento",
    title: "Preenchimento Facial",
    description: "Volume e definição"
  },
  {
    id: 9,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-37 3.jpg",
    alt: "Antes e Depois - Rinomodelação",
    title: "Rinomodelação",
    description: "Correção e refinamento"
  },
  {
    id: 10,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-37 4.jpg",
    alt: "Antes e Depois - Harmonização",
    title: "Harmonização Facial",
    description: "Resultado natural e equilibrado"
  },
  {
    id: 11,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-38.jpg",
    alt: "Antes e Depois - Preenchimento Labial",
    title: "Preenchimento Labial",
    description: "Volume e definição natural"
  },
  {
    id: 12,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-38 2.jpg",
    alt: "Antes e Depois - Bioestimulador",
    title: "Bioestimulador de Colágeno",
    description: "Rejuvenescimento natural"
  },
  {
    id: 13,
    src: "/images/before-after/PHOTO-2025-10-07-14-20-38 3.jpg",
    alt: "Antes e Depois - Harmonização",
    title: "Harmonização Facial",
    description: "Equilíbrio e proporção"
  }
]

export default function BeforeAfterPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof beforeAfterPhotos[0] | null>(null)

  const openModal = (photo: typeof beforeAfterPhotos[0]) => {
    setSelectedPhoto(photo)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <AnimatedContactHero
        title="Resultados"
        breadcrumbs={[{ label: "INÍCIO", href: "/" }]}
        currentPage="RESULTADOS"
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <ContentContainer>
            <div className="text-center mb-12">
              <span className="text-[#A17840] uppercase tracking-wider text-sm font-medium mb-3 block">
                RESULTADOS REAIS
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
                Transformações Reais dos Nossos Tratamentos
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Cada resultado é único e personalizado. Nossas pacientes experimentam transformações naturais, 
                seguras e equilibradas, sempre respeitando a individualidade e características próprias.
              </p>
            </div>
          </ContentContainer>
        </section>

        {/* Before & After Grid */}
        <section className="py-16 bg-gray-50">
          <ContentContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beforeAfterPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                  onClick={() => openModal(photo)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <Eye className="text-[#A17840]" size={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-medium mb-2 text-gray-800">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ContentContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <ContentContainer>
            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
                Quer Ver Sua Transformação?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Agende sua avaliação personalizada e descubra como podemos realçar sua beleza natural 
                com segurança e equilíbrio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5562983216630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#A17840] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#8a6b35] transition-colors"
                >
                  Agendar Avaliação
                </a>
                <a
                  href="/#aesthetic-services"
                  className="border border-[#A17840] text-[#A17840] px-8 py-3 rounded-lg font-medium hover:bg-[#A17840] hover:text-white transition-colors"
                >
                  Ver Serviços
                </a>
              </div>
            </div>
          </ContentContainer>
        </section>
      </main>

      {/* Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-medium mb-2 text-gray-800">
                  {selectedPhoto.title}
                </h3>
                <p className="text-gray-600">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
