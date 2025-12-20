"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ContentContainer from "./content-container"

// Definição dos serviços de estética
const aestheticServices = [
  {
    title: "Harmonização Facial Completa",
    description: "Tratamento completo para equilíbrio e proporção facial",
    image: "/images/harmonizacao-facial.jpg",
  },
  {
    title: "Rinomodelação",
    description: "Correção e refinamento do nariz com resultados naturais",
    image: "/images/rinomodelacao.jpg",
  },
  {
    title: "Otomodelação",
    description: "Harmonização e correção das orelhas",
    image: "/images/otomodelacao.jpg",
  },
  {
    title: "Preenchimento Labial",
    description: "Volume e definição dos lábios com técnica especializada",
    image: "/images/preenchimento-labial.jpg",
  },
  {
    title: "Preenchimento de Mento, Malar e Têmporas",
    description: "Harmonização facial com preenchimento estratégico",
    image: "/images/preenchimento-mento.jpg",
  },
  {
    title: "Bioestimulador de Colágeno",
    description: "Estimulação natural do colágeno para rejuvenescimento do rosto e pescoço",
    image: "/images/bioestimulador.jpg",
  },
  {
    title: "Ozonioterapia Estética",
    description: "Terapia regenerativa para saúde e beleza da pele",
    image: "/images/ozonioterapia-estetica.jpg",
  },
  {
    title: "Ozonioterapia Terapêutica",
    description: "Tratamento terapêutico com ozônio para saúde geral",
    image: "/images/ozonioterapia-terapeutica.jpg",
  },
  {
    title: "Procedimentos de Revitalização Facial",
    description: "Tratamentos para renovação e revitalização da pele",
    image: "/images/revitalizacao-facial.jpg",
  },
  {
    title: "Tratamentos Personalizados",
    description: "Procedimentos personalizados conforme avaliação individual",
    image: "/images/tratamentos-personalizados.jpg",
  },
]

export default function WellnessPackages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="aesthetic-services" className="py-20 md:py-28 bg-white overflow-hidden" ref={ref}>
      <ContentContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Nossos
              <br />
              Serviços de Estética
            </h2>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-700 font-heading">
              Tratamentos personalizados com foco em resultados naturais e harmoniosos. Cada procedimento é
              cuidadosamente planejado para realçar sua beleza única.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="border border-[#A17840] text-[#A17840] px-6 py-2.5 rounded-md flex items-center gap-2 hover:bg-[#f5f2ee] transition-colors text-sm w-fit"
                style={{ borderRadius: "6px" }}
              >
                Ver Todos os Serviços
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>


        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {aestheticServices.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              variants={itemVariants}
            >
              <div className="relative h-[480px]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                <div className="absolute inset-0">
                  {/* Título posicionado a uma distância fixa do topo */}
                  <div className="absolute top-[350px] left-6 right-6">
                    <h3 className="text-white text-xl md:text-2xl font-heading" style={{ fontWeight: 400 }}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Descrição posicionada logo abaixo do título */}
                  <div className="absolute top-[415px] left-6 right-6">
                    <p className="text-white/80 text-sm font-light">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  )
}
