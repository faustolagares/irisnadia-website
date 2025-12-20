import { Mail, MapPin, Phone, Calendar, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import ContactForm from "../components/contact-form"
import AnimatedContactHero from "../components/animated-contact-hero"
import ContentContainer from "../components/content-container"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="mb-12">
        <AnimatedContactHero title="Entre em Contato" breadcrumbs={[{ label: "INÍCIO", href: "/" }]} currentPage="CONTATO" />
      </div>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-20 bg-[#f5f2ee]">
        <ContentContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="flex flex-col justify-start max-w-md">
              <span className="text-[#A17840] uppercase tracking-wider text-sm font-medium mb-3">ENTRE EM CONTATO</span>
              <h2 className="font-heading text-3xl md:text-4xl font-medium mb-4 leading-tight">
                Estamos Aqui para Atender Você
              </h2>
              <p className="text-gray-600 mb-8 font-heading">
                Com especialização em harmonização facial e ozonioterapia, estamos prontos para oferecer cuidados personalizados e de alta qualidade. Entre em contato para agendamentos, informações sobre procedimentos ou qualquer dúvida que possa ter.
              </p>

              <div className="mt-4">
                <p className="text-gray-700 font-medium mb-4">Siga-nos:</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/dra.irisnadiafaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-colors border border-gray-200"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.instagram.com/dra.irisnadiafaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-colors border border-gray-200"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://wa.me/5562983216630"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#A17840] hover:text-white transition-colors border border-gray-200"
                    aria-label="WhatsApp"
                  >
                    <Phone size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="font-heading text-2xl md:text-3xl font-medium mb-6">Entre em Contato</h2>
              <p className="text-gray-600 mb-8 font-heading text-sm">
                Tem dúvidas sobre nossos procedimentos ou deseja agendar uma consulta? Preencha o formulário abaixo.
              </p>
              <ContactForm />
            </div>
          </div>
        </ContentContainer>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-white">
        <ContentContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email Card */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f2ee] flex items-center justify-center mb-6">
                <Mail className="text-[#A17840]" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-medium mb-4">Envie um Email</h3>
              <a href="mailto:irisnadiaguimaraes@gmail.com" className="text-gray-600 hover:text-[#A17840] transition-colors text-sm">
                irisnadiaguimaraes@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f2ee] flex items-center justify-center mb-6">
                <MapPin className="text-[#A17840]" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-medium mb-4">Nossa Localização</h3>
              <address className="text-gray-600 not-italic text-sm">
                Condomínio Evidence Office
                <br />
                Rua Teresina, esquina com Rua Fortaleza, 380
                <br />
                Alto da Glória, Goiânia (GO) - CEP 74815-715
                <br />
                Sala 403
              </address>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f2ee] flex items-center justify-center mb-6">
                <Phone className="text-[#A17840]" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-medium mb-4">Ligue para Nós</h3>
              <a href="tel:+5562983216630" className="text-gray-600 hover:text-[#A17840] transition-colors text-sm">
                (62) 98321-6630
              </a>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f2ee] flex items-center justify-center mb-6">
                <Calendar className="text-[#A17840]" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-medium mb-4">Horário de Funcionamento</h3>
              <div className="text-gray-600">
                <p className="text-sm">Segunda a Sexta</p>
                <p className="font-medium text-sm">8:00h - 18:00h</p>
                <p className="mt-2 text-sm">Sábado</p>
                <p className="font-medium text-sm">8:00h - 12:00h</p>
                <p className="mt-2 text-sm">Domingo</p>
                <p className="font-medium text-sm">Sob Agendamento</p>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  )
}
