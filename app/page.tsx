import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { DualEngine } from "@/components/sections/DualEngine"
import { Ventures } from "@/components/sections/Ventures"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { ContactForm } from "@/components/sections/ContactForm"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DualEngine />
      <Ventures />
      <FeaturesGrid />
      <ContactForm />
      <Footer />
    </main>
  )
}
