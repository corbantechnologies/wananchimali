import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { ContactForm } from "@/components/sections/ContactForm"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <ContactForm />
      <Footer />
    </main>
  )
}
