import Navbar from "../../components/navbar/Navbar.jsx"
import HeroSection from "./Hero.jsx"
import TrustSection from "./Trust.jsx"
import FeaturesSection from "./Features.jsx"
import style from "./Landing.module.css"


const LandingPage = () => {
    return(
        <div className={style.landing}>
            <Navbar />
            <main>
                <HeroSection/>
                <TrustSection/>
                <FeaturesSection/>
            </main>
        </div>
    )
}

export default LandingPage