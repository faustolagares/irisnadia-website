import ContentContainer from "./content-container"
import { Award, Heart, Sparkles, Users } from "lucide-react"

export default function MissionValues() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f7f5]">
      <ContentContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Our Mission & Values</h2>
          <p className="text-gray-700">
            At Juliana Duran Massage Therapy, we are committed to providing exceptional therapeutic experiences that
            promote holistic wellness and transform lives through the authentic power of touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Excellence */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#A17840]/10 rounded-full flex items-center justify-center mb-6">
              <Award className="text-[#A17840]" size={24} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-700">
              We strive for excellence in every aspect of our practice, from technique to client care, ensuring the
              highest quality experience.
            </p>
          </div>

          {/* Authenticity */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#A17840]/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-[#A17840]" size={24} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Authenticity</h3>
            <p className="text-gray-700">
              We remain true to the authentic Brazilian techniques while adapting to individual needs, creating genuine
              connections with our clients.
            </p>
          </div>

          {/* Transformation */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#A17840]/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="text-[#A17840]" size={24} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Transformation</h3>
            <p className="text-gray-700">
              We believe in the transformative power of therapeutic massage to improve physical health, emotional
              wellbeing, and overall quality of life.
            </p>
          </div>

          {/* Community */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#A17840]/10 rounded-full flex items-center justify-center mb-6">
              <Users className="text-[#A17840]" size={24} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Community</h3>
            <p className="text-gray-700">
              We are dedicated to building a community of wellness, supporting our clients' journeys toward better
              health and sharing knowledge.
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
