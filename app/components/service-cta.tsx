"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServiceCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="bg-[#A17840] rounded-lg p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-medium mb-4">Ready to Experience Our Services?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Book your appointment today and begin your journey to wellness and rejuvenation with our expert therapeutic
            treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#A17840] px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              Book an Appointment
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
