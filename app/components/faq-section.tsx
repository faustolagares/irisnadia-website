"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import ContentContainer from "./content-container"

interface FAQItemProps {
  question: string
  answer: React.ReactNode
  isOpen: boolean
  toggleOpen: () => void
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-heading font-medium text-gray-800">{question}</h3>
        <span className="text-[#A17840] ml-4">{isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600 font-heading">{answer}</div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Quais serviços são oferecidos?",
      answer: (
        <>
          <p>
            A clínica oferece tratamentos personalizados de Harmonização Facial, Rinomodelação, Preenchimento Labial, Bioestimuladores de Colágeno, Ozonioterapia Estética e Terapêutica, além de procedimentos de revitalização facial. Cada protocolo é desenvolvido conforme a necessidade individual de cada paciente.
          </p>
        </>
      ),
    },
    {
      question: "Como agendar uma consulta ou avaliação?",
      answer: (
        <>
          <p>
            O agendamento pode ser feito diretamente pelo WhatsApp (62) 98321-6630. Também é possível marcar uma avaliação por meio das redes sociais ou no botão "Agendar Consulta" disponível no site.
          </p>
        </>
      ),
    },
    {
      question: "O que esperar na primeira visita?",
      answer: (
        <>
          <p>
            Durante a primeira consulta, é feita uma avaliação detalhada da face e da pele, analisando proporções, histórico clínico e objetivos estéticos. A partir dessa análise, é elaborado um plano personalizado de tratamento, priorizando naturalidade e segurança.
          </p>
        </>
      ),
    },
    {
      question: "Qual é a política de cancelamento?",
      answer: (
        <>
          <p>
            Solicitamos que qualquer cancelamento ou reagendamento seja informado com pelo menos 24 horas de antecedência. Isso permite reorganizar a agenda e disponibilizar o horário para outros pacientes.
          </p>
        </>
      ),
    },
    {
      question: "É necessário chegar com antecedência?",
      answer: (
        <>
          <p>
            Recomenda-se chegar com 10 a 15 minutos de antecedência para preencher a ficha de avaliação e garantir que o atendimento ocorra no horário previsto.
          </p>
        </>
      ),
    },
    {
      question: "Com que frequência devo realizar os procedimentos?",
      answer: (
        <>
          <p>
            A frequência varia conforme o tratamento e as características individuais de cada paciente. Procedimentos como bioestimuladores e preenchimentos costumam ter intervalos semestrais ou anuais, enquanto protocolos de revitalização facial e ozonioterapia podem ser realizados mensalmente.
          </p>
        </>
      ),
    },
    {
      question: "O que devo evitar antes e depois dos procedimentos?",
      answer: (
        <>
          <p>
            Antes da sessão, recomenda-se evitar consumo de álcool e anti-inflamatórios. Após o procedimento, deve-se evitar exposição solar, maquiagem imediata e atividade física intensa por 24 a 48 horas, conforme a orientação da profissional.
          </p>
        </>
      ),
    },
    {
      question: "Os resultados são imediatos?",
      answer: (
        <>
          <p>
            Alguns tratamentos apresentam resultado imediato, como o preenchimento labial ou mentoniano, enquanto outros, como bioestimuladores de colágeno, têm efeito progressivo e natural nas semanas seguintes.
          </p>
        </>
      ),
    },
    {
      question: "Os procedimentos são dolorosos?",
      answer: (
        <>
          <p>
            Todos os procedimentos são realizados com técnicas anestésicas e produtos de alta qualidade, garantindo conforto e segurança durante todo o processo.
          </p>
        </>
      ),
    },
    {
      question: "Os tratamentos são indicados para todos os tipos de pele?",
      answer: (
        <>
          <p>
            Sim. Os protocolos são adaptados às particularidades de cada tipo de pele, com produtos e técnicas selecionados após avaliação clínica.
          </p>
        </>
      ),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <section className="py-20 bg-white">
      <ContentContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column with heading */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="text-[#A17840] uppercase tracking-wider text-sm font-medium mb-3 block">
                DÚVIDAS FREQUENTES
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                Perguntas Frequentes
              </h2>
            </div>
          </div>

          {/* Right column with FAQ items */}
          <div className="lg:col-span-8">
            <div>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  toggleOpen={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
