import Navbar from "../../components/navbar/Navbar.jsx"
import HeroSection from "./sections/Hero.jsx"
import TrustSection from "./sections/Trust.jsx"
import FeaturesSection from "./sections/Features.jsx"
import HowItWorks from "./sections/How-it-works.jsx"
import Demo from "./sections/Demo.jsx"
import style from "./Landing.module.css"


const LandingPage = () => {
    return(
        <div className={style.landing}>
            <Navbar />
                <main>
                    <HeroSection />
                    <TrustSection />
                    <FeaturesSection />
                    <HowItWorks />
                    <Demo />
                </main>
        </div>
    )
}

export default LandingPage