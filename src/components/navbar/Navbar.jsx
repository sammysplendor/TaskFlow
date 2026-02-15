import style from './Navbar.module.css'
import taskflowLogo from '../../assets/images/TaskFlow_logo_1.png';



const Navbar = ({ scrollToSection, refs }) => {

return(
<nav className={style.navbarContainer}>
    <div className={style.logoContainer}>
        <li onClick={() => scrollToSection(refs.heroRef)} ><img src={taskflowLogo} alt="TaskFlow logo" /></li>
    </div>

    <div className={style.navbarItems}>
        <ul className={style.navLinks}>
            <li onClick={() => scrollToSection(refs.featuresRef)} className={style.navLink}>Features</li>
            <li onClick={() => scrollToSection(refs.howitworksRef)} className={style.navLink}>How it works</li>
            <li onClick={() => scrollToSection(refs.testimonialsRef)} className={style.navLink}>Testimonials</li>
            <li onClick={() => scrollToSection(refs.pricingRef)} className={style.navLink}>Pricing</li>
        </ul>

        <ul className={style.ctaContainer}>
            <li><a href="" className={style.loginBtn} title='Log In'>Log In</a></li>
            <li><a href="" className={style.signupBtn} title='Sign Up'>Sign Up</a></li>
        </ul>
    </div>
</nav>
)
}

export default Navbar