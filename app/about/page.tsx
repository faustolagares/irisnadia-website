import Header from "../components/header"
import Footer from "../components/footer"
import AnimatedAboutHero from "../components/animated-about-hero"
import ContentContainer from "../components/content-container"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import VideoPlayer from "../components/video-player"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-8">
          <AnimatedAboutHero
            title="Sobre a Dra. Irisnádia Faria"
            breadcrumbs={[{ label: "Início", href: "/" }]}
            currentPage="Sobre"
          />
        </section>

        {/* Meet Dra. Irisnádia Section */}
        <section className="py-20 bg-white">
          <ContentContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#A17840] uppercase tracking-wider text-sm font-medium mb-3 block">
                  ESTÉTICA AVANÇADA E OZONIOTERAPIA
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">Conheça a Dra. Irisnádia Faria</h2>
                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    A Dra. Irisnádia Faria é farmacêutica e pós-graduada em Estética Avançada, com especialização em Ozonioterapia Estética e Terapêutica. Sua trajetória é marcada pela busca constante por resultados naturais, seguros e individualizados, unindo ciência e sensibilidade no cuidado com a beleza e o bem-estar.
                  </p>
                  <p>
                    Ao longo de sua atuação, desenvolveu uma abordagem que valoriza a harmonia facial e o equilíbrio entre técnica e empatia. Cada tratamento é planejado de forma exclusiva, respeitando a anatomia, o estilo e a essência de cada paciente.
                  </p>
                  <p>
                    Seu trabalho vai além da estética: é sobre autoconfiança, autoestima e saúde da pele. Com protocolos personalizados e técnicas atualizadas, a Dra. Irisnádia oferece uma experiência completa, onde o atendimento é humano e o resultado é sofisticado.
                  </p>
                </div>
                <Link
                  href="https://wa.me/5562983216630"
                  className="bg-[#A17840] text-white px-6 py-3 rounded-md flex items-center gap-2 w-fit hover:bg-[#B89060] transition-colors"
                >
                  Agendar Consulta
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative">
                <div className="relative h-[800px] rounded-lg overflow-hidden bg-[#f9f7f5]">
                  <div className="absolute inset-0 border-[12px] border-white rounded-lg z-10"></div>
                  <div className="absolute -inset-1 bg-[#A17840]/10 rounded-lg"></div>
                  <Image
                    src="/images/irisnadia-faria-profile.jpg"
                    alt="Dra. Irisnádia Faria - Farmacêutica e Especialista em Estética Avançada"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/consultorio.jpg"
              alt="Consultório da Dra. Irisnádia Faria"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <ContentContainer className="relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#A17840] uppercase tracking-wider text-sm font-medium mb-3 block">
                NOSSA MISSÃO E VALORES
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 mx-auto max-w-3xl text-white">
                Transformando autoestima através da estética avançada
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                A missão da clínica é proporcionar tratamentos que unam ciência, beleza e bem-estar, com foco em resultados naturais e sustentáveis.
                Cada atendimento é guiado por valores que refletem o compromisso com o cuidado humanizado e a excelência técnica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#f8e8d8] rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#A17840]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">Excelência</h3>
                <p className="text-gray-700">
                  Compromisso com técnicas seguras, produtos de alta qualidade e resultados que respeitam a individualidade de cada paciente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#f8e8d8] rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#A17840]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">Autenticidade</h3>
                <p className="text-gray-700">
                  Cada rosto é único. Os tratamentos são planejados para realçar características próprias, mantendo naturalidade e identidade.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#f8e8d8] rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#A17840]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-3">Transformação</h3>
                <p className="text-gray-700">
                  A estética é uma forma de renovação — física e emocional. O objetivo é que cada paciente se sinta mais confiante e em harmonia consigo mesmo.
                </p>
              </div>
            </div>
          </ContentContainer>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <ContentContainer>
            <div className="bg-[#A17840] rounded-lg p-12 md:p-16 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Experimente o cuidado personalizado da Dra. Irisnádia Faria</h2>
              <p className="max-w-2xl mx-auto mb-8 opacity-90">
                Agende sua avaliação e descubra o poder da harmonização facial e da estética avançada para realçar sua beleza natural com segurança e equilíbrio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/5562983216630"
                  className="bg-white text-[#A17840] px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  Agendar Avaliação
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/#aesthetic-services"
                  className="border border-white text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Ver Procedimentos
                </Link>
              </div>
            </div>
          </ContentContainer>
        </section>
      </main>
      <Footer />
    </>
  )
}
