import Image from "next/image"
import ContentContainer from "./content-container"

export default function ExpertiseCertifications() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <ContentContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Expertise & Certifications</h2>
          <p className="text-gray-700">
            Juliana's extensive training and certifications reflect her commitment to excellence and continuous learning
            in the field of therapeutic massage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brazilian Lymphatic Drainage */}
          <div className="bg-[#f9f7f5] p-6 rounded-lg">
            <div className="h-48 relative mb-6 rounded-md overflow-hidden">
              <Image src="/lymphatic-system.png" alt="Brazilian Lymphatic Drainage" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Brazilian Lymphatic Drainage</h3>
            <p className="text-gray-700 mb-4">
              Certified in advanced Brazilian lymphatic drainage techniques, focusing on detoxification and immune
              system support.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#A17840] mr-2">•</span>
                <span>Método Renata França Certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A17840] mr-2">•</span>
                <span>Advanced Lymphatic System Specialist</span>
              </li>
            </ul>
          </div>

          {/* Deep Tissue & Therapeutic Massage */}
          <div className="bg-[#f9f7f5] p-6 rounded-lg">
            <div className="h-48 relative mb-6 rounded-md overflow-hidden">
              <Image
                src="/relaxing-massage.png"
                alt="Deep Tissue & Therapeutic Massage"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Deep Tissue & Therapeutic Massage</h3>
            <p className="text-gray-700 mb-4">
              Specialized in therapeutic techniques that address chronic pain, muscle tension, and recovery.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#A17840] mr-2">•</span>
                <span>Licensed Massage Therapist (LMT)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A17840] mr-2">•</span>
                <span>Sports Massage Certification</span>
              </li>
            </ul>
          </div>

          {/* Holistic Wellness */}
          <div className="bg-[#f9f7f5] p-6 rounded-lg">
            <div className="h-48 relative mb-6 rounded-md overflow-hidden">
              <Image src="/holistic-concept.png" alt="Holistic Wellness" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Holistic Wellness</h3>
            <p className="text-gray-700 mb-4">
              Trained in complementary wellness practices that enhance the therapeutic benefits of massage.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#A17840] mr-2">•</span>
                <span>Aromatherapy Certification</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#A17840] mr-2">•</span>
                <span>Hot Stone Therapy Specialist</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block border border-[#A17840]/30 rounded-lg p-6 bg-[#f9f7f5]">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/formal-certificate.png"
                alt="Professional Certification"
                width={60}
                height={60}
                className="mr-4"
              />
              <div className="text-left">
                <h4 className="text-lg font-medium text-gray-900">Professional Memberships</h4>
                <p className="text-gray-700">Associated Bodywork & Massage Professionals (ABMP)</p>
              </div>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Juliana maintains active membership in professional organizations, ensuring she stays current with the
              latest research, techniques, and best practices in the field of therapeutic massage.
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
