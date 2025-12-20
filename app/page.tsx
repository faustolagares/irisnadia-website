import AnimatedHero from "./components/animated-hero"
import WellnessIntroSection from "./components/wellness-intro-section"
import Footer from "./components/footer"
import WellnessPackages from "./components/wellness-packages"
import WellnessQuoteSection from "./components/wellness-quote-section"
import TestimonialsSection from "./components/testimonials-section"
import FAQSection from "./components/faq-section"
import Header from "./components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Use the shared Header component instead of duplicating the header code */}
      <Header />

      {/* Hero Section */}
      <AnimatedHero />

      {/* Wellness Intro Section */}
      <WellnessIntroSection />

      {/* Wellness Packages Section */}
      <WellnessPackages />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Wellness Quote Section */}
      <WellnessQuoteSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
