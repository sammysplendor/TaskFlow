import style from '../sections-styles/How-it-works.module.css'
import btnStyle from '../../../components/common/Buttons.module.css'
import image from '../../../assets/images/Anotated dashboard.jpg'

const HowItWorks = () => {
    return(
        <div className="sectionContainer">
            <div className="sectionHeading">
                <h2>Get started in minutes</h2>

                <p>
                    A simple workflow designed to help you plan, track, and 
                    complete work without friction.
                </p>
            </div>

            <div className={style.contentContainer}>
                <div className={style.content}>
                    <img src={image} alt="Anotated dashboard" />

                    <div className={style.steps}>
                        <div className={style.step}>
                            <span>1</span>
                            <div className={style.text}>
                                <h3>Set up your work</h3>
                                <p>
                                    Start by creating a project and breaking it down into manageable tasks. 
                                    Assign owners, set deadlines, and define priorities right away.
                                </p>
                            </div>
                        </div>

                        <div className={style.step}>
                            <span>2</span>
                            <div className={style.text}>
                                <h3>Track Progress with Timelines</h3>
                                <p>
                                    Use the task timeline and progress indicators 
                                    to see how work is progressing and identify what needs attention.
                                </p>
                            </div>
                        </div>

                        <div className={style.step}>
                            <span>3</span>
                            <div className={style.text}>
                                <h3>Collaborate & Complete Work</h3>
                                <p>
                                    Collaborate with your team, keep track of updates, 
                                    and complete tasks with confidence — all from one dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <span className={style.supportingText}>
                From planning to completion, TaskFlow keeps your work moving forward.
            </span>

            <div className={btnStyle.ctaContainer}>
                <a href="" className={btnStyle.startCta}>Start for Free</a>
            </div>
        </div>
    )
}

export default HowItWorks