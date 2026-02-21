import style from '../sections-styles/CTA.module.css'
import btnStyle from '../../../components/common/Buttons.module.css'

const CTASection = () => {
    return(
        <section className="sectionContainer">
            <div className="sectionHeading">
                <h2>Ready to bring clarity to your workflow?</h2>

                <p>Plan tasks, track progress, and stay on schedule — all from one simple dashboard.</p>
            </div>

            <div className={style.primaryBtn}>
                <div className={btnStyle.ctaContainer}>
                    <a href="/signup" className={btnStyle.startCta}>Get Started for Free</a>
                </div>

                <span className={style.supportingText}>No credit card required · Set up in minutes</span>
            </div>

            <a href="/login" className={style.loginLink}>Log In</a>
        </section>
    )
}

export default CTASection