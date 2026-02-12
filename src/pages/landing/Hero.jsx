import heroStyle from './Hero.module.css'
import btnStyle from '../../components/common/Buttons.module.css'
import dashboardMockup from '../../assets/images/Dashboard mockup.jpg'

const HeroSection = () => {
    return(
        <div className={heroStyle.heroContentContainer}>
            <div className={heroStyle.heroTextContainer}>
                <h1>Organize your tasks. Track progress. Flow effortlessly.</h1>

                <p>
                    TaskFlow helps individuals and teams manage tasks, track project progress, and collaborate seamlessly -
                    <br /> 
                    all in one clean, intuitive dashboard.
                </p>
            </div>

            <div className={btnStyle.ctaContainer}>
                <a href="" className={btnStyle.startCta}>Start for Free</a>
            </div>

            <p><span>Trusted by teams who get things done • No credit card required</span></p>

            <div className={heroStyle.imageWrapper}>
                <img src={dashboardMockup} alt="Hero image" />
            </div>
        </div>
    )
}

export default HeroSection