import taskflowLogo from '../../assets/images/TaskFlow_logo_1.png';

const Navbar = () => {
return(
<nav>
    <div>
        <img src={taskflowLogo} alt="" width={150}/>
    </div>

    <div>
        <ul>
            <li><a href="">Features</a></li>
            <li><a href="">How it works</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Pricing</a></li>
        </ul>

        <ul>
            <li><a href="">Log In</a></li>
            <li><a href="">Sign Up</a></li>
        </ul>
    </div>
</nav>
)
}

export default Navbar