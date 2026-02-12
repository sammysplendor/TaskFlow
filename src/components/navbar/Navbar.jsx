import style from './Navbar.module.css'
import taskflowLogo from '../../assets/images/TaskFlow_logo_1.png';

const Navbar = () => {
return(
<nav className={style.navbarContainer}>
    <div>
        <a href=""><img src={taskflowLogo} alt="" width={150}/></a>
    </div>

    <div className={style.navbarItems}>
        <ul className={style.navLinks}>
            <li><a href=""className={style.navLink}>Features</a></li>
            <li><a href=""className={style.navLink}>How it works</a></li>
            <li><a href=""className={style.navLink}>Testimonials</a></li>
            <li><a href=""className={style.navLink}>Pricing</a></li>
        </ul>

        <ul className={style.ctaContainer}>
            <li><a href="" id={style.loginBtn} title='Log In'>Log In</a></li>
            <li><a href="" id={style.signupBtn} title='Sign Up'>Sign Up</a></li>
        </ul>
    </div>
</nav>
)
}

export default Navbar