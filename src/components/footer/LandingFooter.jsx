import style from './LandingFooter.module.css'
import logo from '../../assets/images/TaskFlow_logo_2.png'

const Footer = () => {
    return(
        <footer className={style.footerContainer}>
            <div className={style.footerItems}>
                <div className={style.logo}>
                    <img src={logo} alt="TaskFlow logo" width={180} />
                    <p>Organize tasks. Flow better.</p>
                </div>

                <ul className={style.footerLinks}>
                    <p className={style.title}><b>Product</b></p>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Demo</li>
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