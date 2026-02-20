import style from './Navbar.module.css'
import taskflowLogo from '../../assets/images/TaskFlow_logo_1.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ scrollToSection, refs }) => {

const [ isOpen, setIsOpen ] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
}

return(
<nav className={style.navbarContainer}>
    <div className={style.logoContainer}>
        <li onClick={() => scrollToSection(refs.heroRef)} ><img src={taskflowLogo} alt="TaskFlow logo" /></li>
    </div>

    <div className={isOpen ? `${style.navbarItems} ${style.active}` : style.navbarItems}>
        <ul className={style.navLinks}>
            <li onClick={() => scrollToSection(refs.featuresRef)} className={style.navLink}>Features</li>
            <li onClick={() => scrollToSection(refs.howitworksRef)} className={style.navLink}>How it works</li>
            <li onClick={() => scrollToSection(refs.testimonialsRef)} className={style.navLink}>Testimonials</li>
            <li onClick={() => scrollToSection(refs.pricingRef)} className={style.navLink}>Pricing</li>
        </ul>

        <ul className={style.ctaContainer}>
            <li><a href="/login" className={style.loginBtn} title='Log In'>Log In</a></li>
            <li><a href="/signup" className={style.signupBtn} title='Sign Up'>Sign Up</a></li>
        </ul>
    </div>

    <div className={style.cta}>
        <a href="/signup" className={style.signupBtn} title='Sign Up'>Sign Up</a>
        <div onClick={toggleMenu}>
            {!isOpen ? (
                <div className={style.hamburger}>
                    <Menu />
                </div>
            ) : (
                <div className={style.closeIcon}>
                    <X />
                </div>
            )}
        </div>
    </div>
</nav>
)
}

export default Navbar