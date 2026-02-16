import { useRef } from "react"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeroSection from "./sections/Hero.jsx"
import TrustSection from "./sections/Trust.jsx"
import FeaturesSection from "./sections/Features.jsx"
import HowItWorks from "./sections/How-it-works.jsx"
import Demo from "./sections/Demo.jsx"
import TestimonialsSection from "./sections/Testimonials.jsx"
import PricingSection from "./sections/Pricing.jsx"
import FAQs from "./sections/FAQs.jsx"
import CTASection from "./sections/CTA.jsx"
import style from "./Landing.module.css"


const LandingPage = () => {
    const heroRef = useRef(null)
    const featuresRef = useRef(null)
    const howitworksRef = useRef(null)
    const testimonialsRef = useRef(null)
    const pricingRef = useRef(null)

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return(
        <div className={style.landing}>
            <Navbar 
                scrollToSection={scrollToSection} 
                refs={{ 
                    heroRef, 
                    featuresRef, 
                    howitworksRef, 
                    testimonialsRef, 
                    pricingRef 
                }} 
            />
                <main>
                    <div ref={heroRef}><HeroSection /></div>
                    <TrustSection />
                    <div ref={featuresRef}><FeaturesSection /></div>
                    <div ref={howitworksRef}><HowItWorks /></div>
                    <Demo />
                    <div ref={testimonialsRef}><TestimonialsSection /></div>
                    <div ref={pricingRef}><PricingSection /></div>
                    <FAQs />
                    <CTASection />
                </main>
        </div>
    )
}

export default LandingPage