"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import ContentContainer from "./content-container"

export default function WellnessIntroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
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
    <section className="py-20 bg-white" ref={ref}>
      <ContentContainer>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="flex flex-col justify-start">
            <div className="w-fit bg-[#f5f2ee] text-[#A17840] text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
              NOSSA CLÍNICA
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8 leading-tight">
              Estética e Saúde
            </h2>

            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#f5f2ee] rounded-full flex items-center justify-center mr-4">
                <Phone className="text-[#A17840]" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">TELEFONE</p>
                <a href="tel:+5562983216630" className="text-xl font-medium hover:text-[#A17840] transition-colors">
                  (62) 98321-6630
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/5562983216630"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A17840] border border-[#A17840] rounded-full px-8 py-3 hover:bg-[#f5f2ee] transition-colors w-fit"
            >
              Falar pelo WhatsApp
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-700 mb-8">
              Nossa clínica especializada em harmonização facial e ozonioterapia oferece um ambiente acolhedor e seguro, onde cada paciente recebe cuidados personalizados. Combinamos tecnologia avançada com técnicas precisas para proporcionar resultados naturais e equilibrados, sempre priorizando o bem-estar e a satisfação de quem nos confia sua autoestima.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f8e8d8] flex items-center justify-center mt-0.5">
                  <span className="text-[#A17840] text-xs">✦</span>
                </div>
                <p className="text-gray-700">Ambiente acolhedor e seguro</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f8e8d8] flex items-center justify-center mt-0.5">
                  <span className="text-[#A17840] text-xs">✦</span>
                </div>
                <p className="text-gray-700">Tecnologia avançada</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f8e8d8] flex items-center justify-center mt-0.5">
                  <span className="text-[#A17840] text-xs">✦</span>
                </div>
                <p className="text-gray-700">Cuidados personalizados</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#f8e8d8] flex items-center justify-center mt-0.5">
                  <span className="text-[#A17840] text-xs">✦</span>
                </div>
                <p className="text-gray-700">Foco no bem-estar</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </ContentContainer>
    </section>
  )
}
