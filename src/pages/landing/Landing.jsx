import Navbar from "../../components/navbar/Navbar.jsx"
import HeroSection from "./Hero.jsx"
import TrustSection from "./Trust.jsx"
import style from "./Landing.module.css"


const LandingPage = () => {
    return(
        <div className={style.landing}>
            <Navbar />
            <main>
                <HeroSection/>
                <TrustSection/>
            </main>
        </div>
    )
}

export default LandingPage