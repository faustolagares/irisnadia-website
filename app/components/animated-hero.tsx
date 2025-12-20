"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set visible immediately on first load
    setIsVisible(true)

    // Optional: Add intersection observer for scroll-triggered animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) observer.disconnect()
    }
  }, [])

  // Animation variants
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  const eyebrowVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  }

  const headlineVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.0,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.6,
        ease: "backOut",
      },
    },
  }

  const overlayVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.0,
        delay: 0.3,
      },
    },
  }

  // Pixel grid animation effect
  const PixelGrid = () => {
    return (
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 0, transition: { duration: 1.5, delay: 0.5 } },
        }}
      >
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-[#A17840]/80"
              variants={{
                hidden: { opacity: 1, scale: 1 },
                visible: {
                  opacity: 0,
                  scale: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.1 + Math.random() * 0.8,
                  },
                },
              }}
            />
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="border border-[#e0c0a0] rounded-lg overflow-hidden">
        <motion.div
          ref={heroRef}
          className="relative h-[640px] sm:h-[660px] md:h-[680px] w-full"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={imageVariants} className="absolute inset-0">
            <Image
              src="/images/hero-section-irisnadia.png"
              alt="Harmonização Facial e Estética Avançada"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <PixelGrid />

          <motion.div className="absolute inset-0 bg-black/40" variants={overlayVariants} />

          <div className="absolute inset-0 flex flex-col justify-center py-20 sm:py-16 md:py-20 pl-6 sm:pl-16 md:pl-20 pr-6 md:pr-8">
            <motion.div
              variants={eyebrowVariants}
              className="border border-white/30 rounded-full py-1 px-4 text-white text-xs w-fit mb-6"
            >
              ESTÉTICA AVANÇADA COM PROPÓSITO
            </motion.div>

            <motion.h1
              variants={headlineVariants}
              className="text-[3.25rem] md:text-[5rem] font-medium text-white max-w-3xl tracking-tight"
              style={{ lineHeight: "1.1" }}
            >
              Harmonização facial com naturalidade, técnica e propósito.
            </motion.h1>

            <motion.div variants={buttonVariants} className="flex flex-wrap items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Resultados naturais e equilibrados</span>
              </div>

              <div className="flex items-center gap-2 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Avaliação personalizada</span>
              </div>

              <div className="flex items-center gap-2 text-white/90">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium">Atendimento com segurança e empatia</span>
              </div>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <a
                href="https://wa.me/5562983216630"
                className="bg-white text-black px-6 py-2.5 rounded-md flex items-center gap-2 w-fit mt-8 hover:bg-gray-100 transition-colors text-sm"
                style={{ borderRadius: "6px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Avaliação
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Slide Navigation Dots */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-[#A17840]"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
