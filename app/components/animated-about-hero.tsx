"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface AnimatedAboutHeroProps {
  title: string
  breadcrumbs?: {
    label: string
    href: string
  }[]
  currentPage?: string
}

export default function AnimatedAboutHero({ title, breadcrumbs = [], currentPage }: AnimatedAboutHeroProps) {
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

  const titleVariants = {
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

  const breadcrumbsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.4,
        ease: "easeOut",
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
    <div className="container mx-auto px-6 md:px-10 lg:px-12">
      <div className="border border-[#e0c0a0] rounded-lg overflow-hidden">
        <motion.div
          ref={heroRef}
          className="relative h-[400px] md:h-[500px] w-full"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={imageVariants} className="absolute inset-0">
            <Image
              src="/images/hero-about.png"
              alt="Sobre a Dra. Irisnádia Faria"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <PixelGrid />

          <div className="absolute inset-0 flex flex-col items-start justify-start pt-40 pb-40 sm:items-center sm:justify-center sm:pt-0 sm:pb-0 md:items-center md:justify-center md:pt-0 md:pb-0 z-20">
            <div className="container mx-auto px-6 md:px-10 lg:px-12">
              <motion.h1
                variants={titleVariants}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4"
              >
                {title}
              </motion.h1>

              {(breadcrumbs.length > 0 || currentPage) && (
                <motion.div variants={breadcrumbsVariants} className="flex items-center text-white/80 text-sm">
                  {breadcrumbs.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Link href={item.href} className="hover:text-white transition-colors">
                        {item.label}
                      </Link>
                      <span className="mx-2">›</span>
                    </div>
                  ))}
                  {currentPage && <span>{currentPage}</span>}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
