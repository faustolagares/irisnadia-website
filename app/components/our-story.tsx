import Image from "next/image"
import ContentContainer from "./content-container"

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <ContentContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Born and raised in Brazil, Juliana Duran developed a passion for healing and wellness from an early age.
                Growing up in a culture that embraces natural remedies and holistic approaches to health, she was drawn
                to the transformative power of touch therapy.
              </p>
              <p>
                After completing her formal education in massage therapy in Brazil, Juliana honed her skills working at
                some of the most prestigious spas in Rio de Janeiro. It was during this time that she developed her
                signature approach to Brazilian lymphatic drainage massage, combining traditional techniques with her
                own innovative methods.
              </p>
              <p>
                In 2015, Juliana brought her expertise to Denver, Colorado, where she quickly established herself as a
                leading practitioner of authentic Brazilian massage techniques. Her commitment to excellence and genuine
                care for her clients' wellbeing has earned her a loyal following and numerous accolades in the wellness
                community.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image src="/images/juliana-portrait.jpg" alt="Juliana Duran" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-8 border-white rounded-full bg-[#A17840]/10 z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#A17840]/30 rounded-full z-10"></div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
