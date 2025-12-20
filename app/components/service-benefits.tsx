"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import ContentContainer from "./content-container"

interface BenefitProps {
  title: string
  description: string
}

const benefits: BenefitProps[] = [
  {
    title: "Stress Reduction",
    description: "Our therapeutic techniques help reduce stress and promote deep relaxation.",
  },
  {
    title: "Pain Relief",
    description: "Targeted massage helps alleviate chronic pain and muscle tension.",
  },
  {
    title: "Improved Circulation",
    description: "Enhanced blood flow delivers oxygen and nutrients throughout the body.",
  },
  {
    title: "Detoxification",
    description: "Specialized techniques help eliminate toxins and reduce fluid retention.",
  },
  {
    title: "Enhanced Mobility",
    description: "Increased range of motion and flexibility through targeted therapy.",
  },
  {
    title: "Better Sleep",
    description: "Relaxation techniques promote improved sleep quality and patterns.",
  },
]

export default function ServiceBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-[#f5f2ee]" ref={ref}>
      <ContentContainer>
        <div className="text-center mb-12">
          <span className="text-[#A17840] uppercase tracking-wider text-sm font-medium mb-3">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-medium mt-2 mb-4">Benefits of Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the transformative effects of our therapeutic treatments, designed to enhance your overall
            well-being and quality of life.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} className="bg-white p-6 rounded-lg border border-gray-100" variants={itemVariants}>
              <div className="flex items-start gap-4">
                <div className="bg-[#A17840]/10 p-2 rounded-full mt-1">
                  <Check className="text-[#A17840]" size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContentContainer>
    </section>
  )
}
