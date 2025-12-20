"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Star } from "lucide-react"
import ContentContainer from "./content-container"

interface TestimonialProps {
  name: string
  image: string
  text: string
  rating: number
  location?: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "Marina Santos",
    image: "/images/testimonial-1.jpg",
    text: "A Dra. Irisnádia é simplesmente excepcional! Fiz harmonização facial com ela e o resultado foi incrível. A técnica é perfeita, os resultados são naturais e ela tem um cuidado único com cada paciente. Me sinto muito mais confiante e realizada. Recomendo de olhos fechados!",
    rating: 5,
    location: "Goiânia, GO",
  },
  {
    name: "Ana Carolina",
    image: "/images/testimonial-2.jpg",
    text: "Fiz rinomodelação com a Dra. Irisnádia e fiquei impressionada com a precisão e naturalidade do resultado. Ela é muito cuidadosa, explica todo o processo e o acompanhamento pós-procedimento é impecável. Uma profissional de altíssima qualidade!",
    rating: 5,
    location: "Goiânia, GO",
  },
  {
    name: "Juliana Mendes",
    image: "/images/testimonial-3.jpg",
    text: "A ozonioterapia com a Dra. Irisnádia mudou minha vida! Além dos benefícios estéticos, me sinto muito mais energizada e com a pele mais saudável. Ela une ciência e sensibilidade de uma forma única. Uma profissional que realmente se importa com seus pacientes.",
    rating: 5,
    location: "Goiânia, GO",
  },
  {
    name: "Camila Oliveira",
    image: "/images/testimonial-4.jpg",
    text: "Fiz preenchimento labial e bioestimulador de colágeno com a Dra. Irisnádia. O resultado é perfeito! Natural, harmonioso e exatamente como eu queria. Ela tem uma técnica impecável e um olhar clínico muito apurado. Super recomendo!",
    rating: 5,
    location: "Goiânia, GO",
  },
  {
    name: "Fernanda Costa",
    image: "/images/testimonial-5.jpg",
    text: "A Dra. Irisnádia é uma profissional excepcional! Sua formação farmacêutica aliada à especialização em estética faz toda a diferença. Os protocolos são baseados em evidências científicas e os resultados são sempre naturais e seguros. Uma verdadeira referência!",
    rating: 5,
    location: "Goiânia, GO",
  },
  {
    name: "Patrícia Lima",
    image: "/images/testimonial-6.jpg",
    text: "Fiz harmonização facial completa com a Dra. Irisnádia e fiquei encantada! Ela tem um cuidado humanizado único, sempre respeitando as características de cada paciente. O resultado é sutil, harmonioso e muito natural. Uma profissional de confiança!",
    rating: 5,
    location: "Goiânia, GO",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  return (
    <section className="bg-[#f5f2ee] py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #A17840 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <ContentContainer>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Google Review Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-sm border border-[#A17840]/20">
            <div className="flex items-center gap-1 mr-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-yellow-600 font-medium text-lg">5.0</span>
            <span className="text-gray-700 ml-2 text-sm">Baseado em 150+ Avaliações Google</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
            O Que Nossas Pacientes Dizem
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#A17840] to-[#D5B78C] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Descubra por que nossas pacientes continuam voltando para nossos tratamentos de harmonização facial e estética avançada
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <div className="relative h-full">
      {/* Card background with gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#A17840] via-[#D5B78C] to-[#A17840] rounded-2xl p-[1px]">
        <div className="absolute inset-0 bg-white rounded-2xl"></div>
      </div>

      {/* Card content */}
      <div className="relative h-full flex flex-col p-8 z-10">
        {/* Stars */}
        <div className="flex mb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
          ))}
        </div>

        {/* Quote Icon */}
        <div className="absolute top-6 right-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 20C12 15 15 12 20 12V8C12 8 6 14 6 22C6 27 10 32 15 32H20V20H12Z"
              fill="#A17840"
              fillOpacity="0.2"
            />
            <path
              d="M32 20C32 15 35 12 40 12V8C32 8 26 14 26 22C26 27 30 32 35 32H40V20H32Z"
              fill="#A17840"
              fillOpacity="0.2"
            />
          </svg>
        </div>

        {/* Review Text */}
        <p className="text-gray-800 text-base leading-relaxed mb-8 flex-grow font-light">"{testimonial.text}"</p>

        {/* Author */}
        <div className="flex items-center mt-auto pt-6 border-t border-gray-200">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden relative z-10">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-[#A17840] to-[#D5B78C] rounded-full blur-[1px] z-0"></div>
          </div>
          <div className="ml-4">
            <span className="text-gray-900 font-medium block">{testimonial.name}</span>
            <div className="flex items-center mt-1">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600 text-xs">{testimonial.location || "Paciente Verificada"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
