"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function WellnessQuoteSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const quoteVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="relative w-full h-[600px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/duran-section-background.webp"
          alt="Relaxing massage therapy session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Padrão com efeito de gradiente - Usando imagem diretamente */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/pattern-1.png')`,
              backgroundSize: "300px",
              backgroundRepeat: "repeat",
              opacity: 1,
              filter: "brightness(0) invert(1)", // Torna o padrão branco
              maskImage: "linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 70%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 70%)",
            }}
          ></div>
        </div>
      </div>

      {/* Container para centralizar o conteúdo */}
      <div className="relative h-full container mx-auto px-4 md:px-8 flex items-center">
        {/* Componente de citação */}
        <motion.div
          className="max-w-md bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          variants={quoteVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Ícone decorativo */}
          <div className="mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0C20.7879 5.23835 23.1313 10.1122 26.7428 13.7237C30.3543 17.3352 35.2281 19.6786 40.4665 20.4665C35.2281 21.2544 30.3543 23.5978 26.7428 27.2093C23.1313 30.8208 20.7879 35.6946 20 40.933C19.2121 35.6946 16.8687 30.8208 13.2572 27.2093C9.64573 23.5978 4.77189 21.2544 -0.466506 20.4665C4.77189 19.6786 9.64573 17.3352 13.2572 13.7237C16.8687 10.1122 19.2121 5.23835 20 0Z"
                fill="#A17840"
              />
            </svg>
          </div>

          {/* Texto da citação */}
          <blockquote className="text-gray-800 text-xl md:text-2xl font-heading font-light leading-relaxed mb-6">
            "Wellness is not a luxury—it's the quiet art of coming home to yourself. In every breath, every still
            moment, every gentle touch, we remember who we are beneath the noise."
          </blockquote>

          {/* Atribuição */}
          <cite className="text-gray-600 font-heading text-sm block">— Wellness Bliss</cite>
        </motion.div>
      </div>
    </section>
  )
}
