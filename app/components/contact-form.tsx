"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    referralSource: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      // Format phone number as user types
      const formattedPhone = formatPhoneNumber(value)
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }))
    } else if (name === "preferredDate") {
      // Format date as user types
      const formattedDate = formatDate(value)
      setFormData((prev) => ({ ...prev, [name]: formattedDate }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  // Function to format phone number in Brazilian format (XX) XXXXX-XXXX
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, "")

    // Format the phone number as user types
    let formattedPhone = ""
    if (phoneNumber.length === 0) {
      formattedPhone = ""
    } else if (phoneNumber.length <= 2) {
      formattedPhone = `(${phoneNumber}`
    } else if (phoneNumber.length <= 7) {
      formattedPhone = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
    } else {
      formattedPhone = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`
    }

    return formattedPhone
  }

  // Function to format date in Brazilian format DD/MM/YYYY
  const formatDate = (value: string) => {
    // Remove all non-digit characters
    const dateNumber = value.replace(/\D/g, "")

    // Format the date as user types
    let formattedDate = ""
    if (dateNumber.length === 0) {
      formattedDate = ""
    } else if (dateNumber.length <= 2) {
      formattedDate = dateNumber
    } else if (dateNumber.length <= 4) {
      formattedDate = `${dateNumber.slice(0, 2)}/${dateNumber.slice(2)}`
    } else {
      formattedDate = `${dateNumber.slice(0, 2)}/${dateNumber.slice(2, 4)}/${dateNumber.slice(4, 8)}`
    }

    return formattedDate
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        referralSource: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
            Seu Nome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
            Seu Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(62) 99999-9999"
            maxLength={15}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
            Assunto *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
          >
            <option value="">Selecione um assunto</option>
            <option value="Appointment">Agendar Consulta</option>
            <option value="Information">Informações sobre Procedimentos</option>
            <option value="Pricing">Consulta de Preços</option>
            <option value="Other">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1">
          Procedimento de Interesse *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
        >
          <option value="">Selecione um procedimento</option>
          <option value="Harmonização Facial Completa">
            Harmonização Facial Completa
          </option>
          <option value="Rinomodelação">Rinomodelação</option>
          <option value="Otomodelação">Otomodelação</option>
          <option value="Preenchimento Labial">Preenchimento Labial</option>
          <option value="Preenchimento de Mento, Malar e Têmporas">Preenchimento de Mento, Malar e Têmporas</option>
          <option value="Bioestimulador de Colágeno">Bioestimulador de Colágeno (rosto e pescoço)</option>
          <option value="Ozonioterapia Estética">Ozonioterapia Estética</option>
          <option value="Ozonioterapia Terapêutica">Ozonioterapia Terapêutica</option>
          <option value="Revitalização Facial">Procedimentos de Revitalização Facial</option>
          <option value="Other">Outro Procedimento (especifique na mensagem)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-medium text-gray-700 mb-1">
            Data Preferida
          </label>
          <input
            type="text"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            placeholder="DD/MM/AAAA"
            maxLength={10}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-xs font-medium text-gray-700 mb-1">
            Horário Preferido
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
          >
            <option value="">Selecione um horário</option>
            <option value="Morning">Manhã (8h-12h)</option>
            <option value="Afternoon">Tarde (12h-16h)</option>
            <option value="Evening">Final da tarde (16h-18h)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="referralSource" className="block text-xs font-medium text-gray-700 mb-1">
          Como conheceu nossa clínica?
        </label>
        <select
          id="referralSource"
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
        >
          <option value="">Selecione uma opção</option>
          <option value="Google">Pesquisa no Google</option>
          <option value="Social Media">Redes Sociais</option>
          <option value="Friend">Indicação de amigo ou familiar</option>
          <option value="Advertisement">Publicidade</option>
          <option value="Other">Outro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
          Sua Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840] focus:border-transparent"
          placeholder="Por favor, inclua qualquer dúvida específica ou preocupação que possa ter sobre nossos procedimentos."
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#A17840] text-white px-6 py-2.5 rounded-md flex items-center gap-2 hover:bg-[#B89060] transition-colors disabled:opacity-70 text-sm"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          {!isSubmitting && <ArrowRight size={16} />}
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="p-3 bg-green-50 text-green-700 rounded-md text-sm">
          Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
          Houve um erro ao enviar sua mensagem. Tente novamente mais tarde.
        </div>
      )}
    </form>
  )
}
