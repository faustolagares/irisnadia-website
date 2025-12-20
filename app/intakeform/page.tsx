"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, Check } from "lucide-react"

export default function IntakeFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    emergencyName: "",
    emergencyPhone: "",
    isPregnant: "",
    sleepingWell: "",
    drinkingWater: "",
    exercising: "",
    bruiseEasily: "",
    recentSurgery: "",
    botoxFiller: "",
    allergies: "",
    allergiesExplain: "",
    treatmentGoals: "",
    hearAboutUs: "",
    consentPhotos: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      // Format phone number as (XXX) XXX-XXXX
      const cleaned = value.replace(/\D/g, "")
      let formatted = cleaned

      if (cleaned.length > 0) {
        formatted = cleaned.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, (_, p1, p2, p3) => {
          let result = ""
          if (p1) result += `(${p1}`
          if (p2) result += `) ${p2}`
          if (p3) result += `-${p3}`
          return result
        })
      }

      setFormData((prev) => ({ ...prev, [name]: formatted }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      window.scrollTo(0, 0)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-[#f5f2ee] flex items-center justify-center p-4">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-600" size={32} />
            </div>
            <h1 className="text-2xl font-medium mb-4 font-heading">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              Your intake form has been successfully submitted. We look forward to seeing you soon.
            </p>
            <a
              href="/"
              className="bg-[#A17840] text-white px-6 py-3 rounded-md inline-flex items-center justify-center hover:bg-[#B89060] transition-colors"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f2ee] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/juliana-duran-logo.webp"
              alt="Juliana Duran Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <h1 className="text-3xl font-medium mb-2 text-center font-heading">Massage Intake Form</h1>
          <p className="text-gray-600 text-center mb-8 font-heading">
            If you have previously completed this form, no need to do so again.
          </p>

          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 text-red-700 rounded-md mb-6">
              There was an error submitting your form. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 font-heading">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                Your Instagram profile
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone number<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">+1</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(201) 555-0123"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                Your date of birth<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                  placeholder="MM/DD/YYYY"
                />
                <Calendar className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emergencyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency contact name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="emergencyName"
                  name="emergencyName"
                  required
                  value={formData.emergencyName}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>

              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency contact phone number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  required
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                />
              </div>
            </div>

            {/* Health Questions */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-medium mb-6">Health Information</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Are you currently pregnant?<span className="text-red-500">*</span>
                  </p>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="isPregnant"
                        value="yes"
                        required
                        checked={formData.isPregnant === "yes"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="isPregnant"
                        value="no"
                        required
                        checked={formData.isPregnant === "no"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Are you sleeping well?<span className="text-red-500">*</span>
                  </p>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sleepingWell"
                        value="yes"
                        required
                        checked={formData.sleepingWell === "yes"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sleepingWell"
                        value="no"
                        required
                        checked={formData.sleepingWell === "no"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Are you drinking a lot of water a day?<span className="text-red-500">*</span>
                  </p>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="drinkingWater"
                        value="yes"
                        required
                        checked={formData.drinkingWater === "yes"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="drinkingWater"
                        value="no"
                        required
                        checked={formData.drinkingWater === "no"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="exercising" className="block text-sm font-medium text-gray-700 mb-1">
                    Are you exercising frequently? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="exercising"
                    name="exercising"
                    required
                    value={formData.exercising}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Do you bruise easily?<span className="text-red-500">*</span>
                  </p>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="bruiseEasily"
                        value="yes"
                        required
                        checked={formData.bruiseEasily === "yes"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="bruiseEasily"
                        value="no"
                        required
                        checked={formData.bruiseEasily === "no"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="recentSurgery" className="block text-sm font-medium text-gray-700 mb-1">
                    Did you have surgery recently?
                  </label>
                  <input
                    type="text"
                    id="recentSurgery"
                    name="recentSurgery"
                    value={formData.recentSurgery}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                  />
                </div>

                <div>
                  <label htmlFor="botoxFiller" className="block text-sm font-medium text-gray-700 mb-1">
                    Any botox or filler less than a week?
                  </label>
                  <input
                    type="text"
                    id="botoxFiller"
                    name="botoxFiller"
                    value={formData.botoxFiller}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Do you have any allergies or skin sensitivity?<span className="text-red-500">*</span>
                  </p>
                  <div className="flex gap-6 mb-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="allergies"
                        value="yes"
                        required
                        checked={formData.allergies === "yes"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="allergies"
                        value="no"
                        required
                        checked={formData.allergies === "no"}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                      />
                      No
                    </label>
                  </div>
                  {formData.allergies === "yes" && (
                    <div>
                      <label htmlFor="allergiesExplain" className="block text-sm font-medium text-gray-700 mb-1">
                        If yes, please explain
                      </label>
                      <textarea
                        id="allergiesExplain"
                        name="allergiesExplain"
                        rows={3}
                        value={formData.allergiesExplain}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                      ></textarea>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="treatmentGoals" className="block text-sm font-medium text-gray-700 mb-1">
                    What are your goals for this treatment?<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="treatmentGoals"
                    name="treatmentGoals"
                    rows={4}
                    required
                    value={formData.treatmentGoals}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-1">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A17840]"
                  />
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-medium mb-6">Consent</h2>

              <div className="bg-gray-50 p-4 rounded-md mb-6 text-sm text-gray-700">
                <p className="mb-4">
                  I understand that the massage therapist is providing massage therapy services within their scope of
                  practice.
                </p>
                <p className="mb-4">
                  I hereby consent for my therapist to treat me with massage therapy for the noted purposes of this form
                  including such assessments, examinations, and techniques, which may be recommended by my therapist.
                </p>
                <p className="mb-4">
                  I acknowledge that the therapist is not a physician and does not diagnose illness or disease or any
                  other physical or mental disorder. I clearly understand that massage therapy is not a substitute for a
                  medical examination. It is recommended that I attend my personal GP for any ailments that I may be
                  experiencing.
                </p>
                <p className="mb-4">
                  I acknowledge that no assurance or guarantee has been provided to me as to the results of the
                  treatment. I acknowledge that with any treatment there can be risks and those risks have been
                  explained to me and I assume those risks.
                </p>
                <p>
                  I acknowledge and understand that the therapist must be fully aware of my existing medical conditions.
                  I have completed my medical history form as provided by my therapist and disclosed to the therapist
                  all of those medical conditions affecting me. It is my responsibility to keep the massage therapist
                  updated based on my medical history. The information I have provided is true and complete to the best
                  of my knowledge.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Do you consent to the use of your before and after photos for marketing purposes, with your face and
                  identifying features obscured to ensure privacy?<span className="text-red-500">*</span>
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consentPhotos"
                      value="yes"
                      required
                      checked={formData.consentPhotos === "yes"}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="consentPhotos"
                      value="no"
                      required
                      checked={formData.consentPhotos === "no"}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 text-[#A17840] focus:ring-[#A17840]"
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#A17840] text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-[#B89060] transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
