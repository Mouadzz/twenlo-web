import Navbar from '@/components/shared/Navbar'
import HeroSection from '@/components/landing/HeroSection'
import ProblemSection from '@/components/landing/ProblemSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import PricingSection from '@/components/landing/PricingSection'
import FAQSection from '@/components/landing/FAQSection'
import Footer from '@/components/shared/Footer'
import StatsSection from '@/components/landing/StatsSection'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <StatsSection />
      {/* <PricingSection /> */}
      {/* <FAQSection /> */}
      {/* <Footer /> */}
    </div>
  )
}