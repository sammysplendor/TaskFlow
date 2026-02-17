import style from './LandingFooter.module.css'
import logo from '../../assets/images/TaskFlow_logo_2.png'

const Footer = ({ scrollToSection, refs }) => {

    return(
        <footer className={style.footerContainer}>
            <div className={style.footerItems}>
                <div className={style.logo}>
                    <li onClick={() => scrollToSection(refs.heroRef)}><img src={logo} alt="TaskFlow logo" width={180} /></li>
                    <p>Organize tasks. Flow better.</p>
                </div>

                <ul className={style.footerLinks}>
                    <p className={style.title}><b>Product</b></p>
                    <li onClick={() => scrollToSection(refs.featuresRef)}>Features</li>
                    <li onClick={() => scrollToSection(refs.pricingRef)}>Pricing</li>
                    <li onClick={() => scrollToSection(refs.demoRef)}>Demo</li>
                </ul>

                <ul className={style.footerLinks}>
                    <p className={style.title}><b>Company</b></p>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>

                <ul className={style.footerLinks}>
                    <p className={style.title}><b>Legal</b></p>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>

            <span className={style.copyright}>
                &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer