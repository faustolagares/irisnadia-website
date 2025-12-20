import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Download, ArrowRight } from "lucide-react"
import AnimatedServicesHero from "../components/animated-services-hero"
import ContentContainer from "../components/content-container"

const services = [
  {
    title: "Brazilian Lymphatic Drainage",
    slug: "brazilian-lymphatic-drainage",
    active: false,
  },
  {
    title: "Deep Tissue Massage",
    slug: "deep-tissue-massage",
    active: false,
  },
  {
    title: "Hot Stone Therapy",
    slug: "hot-stone-therapy",
    active: false,
  },
  {
    title: "Facial Lymphatic Drainage",
    slug: "facial-lymphatic-drainage",
    active: false,
  },
  {
    title: "Body Massage",
    slug: "body-massage",
    active: true,
  },
  {
    title: "Skin Care",
    slug: "skin-care",
    active: false,
  },
  {
    title: "Hair Treatment",
    slug: "hair-treatment",
    active: false,
  },
  {
    title: "Beauty Elixirs",
    slug: "beauty-elixirs",
    active: false,
  },
  {
    title: "Revive Retreat",
    slug: "revive-retreat",
    active: false,
  },
]

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen font-heading">
      {/* Hero Banner */}
      <AnimatedServicesHero
        title="Body Massage"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "SERVICES", href: "/services" },
        ]}
        currentPage="BODY MASSAGE"
        imageSrc="/images/duran-services.jpg"
      />

      <div className="py-12">
        <ContentContainer>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-6">
                  <span className="w-6 h-6 rounded-full bg-[#f8e8d8] flex items-center justify-center mr-3">
                    <span className="text-[#A17840] text-xs">✦</span>
                  </span>
                  <h2 className="text-xl font-medium">Our Services</h2>
                </div>

                <ul className="space-y-1">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={`/services/${service.slug}`}
                        className={`flex items-center justify-between py-2 px-3 rounded-md ${
                          service.active
                            ? "bg-[#A17840] text-white"
                            : "text-gray-700 hover:bg-gray-100 transition-colors"
                        }`}
                      >
                        <span>{service.title}</span>
                        <ChevronRight size={16} className={service.active ? "text-white" : "text-gray-400"} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA */}
              <div className="mt-8 bg-gray-800 text-white rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/spa-booking.png"
                    alt="Book your spa session"
                    fill
                    className="object-cover object-center opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute inset-0 flex flex-col justify-center p-6 text-center">
                    <div className="bg-white/10 text-xs uppercase tracking-wider py-1 px-3 rounded-full mb-3 inline-block mx-auto">
                      Our best offer
                    </div>
                    <h3 className="text-2xl font-medium mb-2">Book your Spa Session</h3>
                    <p className="text-white/80 text-sm mb-4">+1(123) 1234-567-8901</p>
                    <Link
                      href="/contact"
                      className="bg-[#A17840] text-white py-2 px-4 rounded flex items-center justify-center gap-2 text-sm hover:bg-[#B89060] transition-colors mx-auto"
                    >
                      Register Now
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Company Profile */}
              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <span className="w-6 h-6 rounded-full bg-[#f8e8d8] flex items-center justify-center mr-3">
                    <span className="text-[#A17840] text-xs">✦</span>
                  </span>
                  <h2 className="text-xl font-medium">Company Profile</h2>
                </div>

                <div className="space-y-3">
                  <Link
                    href="#"
                    className="flex items-center justify-between bg-[#f8e8d8] text-gray-700 py-3 px-4 rounded-lg hover:bg-[#f0dcc8] transition-colors"
                  >
                    <div className="flex items-center">
                      <Download size={16} className="mr-3 text-[#A17840]" />
                      <span>DOWNLOAD PDF FILE</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center">
                      <Download size={14} className="text-white" />
                    </div>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center justify-between bg-[#f8e8d8] text-gray-700 py-3 px-4 rounded-lg hover:bg-[#f0dcc8] transition-colors"
                  >
                    <div className="flex items-center">
                      <Download size={16} className="mr-3 text-[#A17840]" />
                      <span>DOWNLOAD WORD FILE</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <Download size={14} className="text-gray-700" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden mb-10 aspect-w-16 aspect-h-9 relative">
                <Image src="/images/massage-treatment.png" alt="Body Massage Treatment" fill className="object-cover" />
              </div>

              {/* Content Sections */}
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-medium mb-6">Our Spa Massage is the fountain of youth</h2>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Hot stone therapy is a specialist massage that uses smooth, flat, heated basalt stones that are
                      positioned along your spine, in the palms of your hands, along your legs and between the toes.
                      Typically from river beds, basalt stones are used for massage as they have a rich iron content
                      that retains heat. The treatment helps aid with detoxing and healing the body.
                    </p>
                    <p>
                      Spa treatments have become one of the most common ways for people to take care of their bodies. It
                      works perfection for taking care of both physical and mental health.You can also view{" "}
                      <Link href="#" className="text-[#A17840] hover:underline">
                        spa treatments as good
                      </Link>{" "}
                      per as a 'work out' because it offers a similar end product like someone visiting the gym. The
                      difference is you use far less energy in the spa.The most common spa treatment is a massage. Other
                      services offered range from facials, manicures, pedicures, and body treatments.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-medium mb-6">Our Spa Massage is the fountain of youth</h2>
                  <div className="text-gray-700">
                    <p>
                      In some cases, a financial consultant may have more financial plan experience than the typical
                      financial advisor. Financial consultants usually provide investment services as well, though, our
                      clients are often surprised by the possibilities we present to them; by thinking outside the box
                      we present exciting new ventures.
                    </p>
                  </div>
                </section>

                {/* Service Highlights */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <Image
                        src="/placeholder-akuj9.png"
                        alt="Finnish Sauna"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Finnish Sauna</h3>
                    <p className="text-gray-600 text-sm">There are many variations of passages of Ipsum available.</p>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <Image
                        src="/placeholder-dkn5s.png"
                        alt="Daily Program"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Daily Program</h3>
                    <p className="text-gray-600 text-sm">There are many variations of passages of Ipsum available.</p>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <Image
                        src="/placeholder-y74rm.png"
                        alt="Volcanic Stones"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-3">Volcanic Stones</h3>
                    <p className="text-gray-600 text-sm">There are many variations of passages of Ipsum available.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </main>
  )
}
