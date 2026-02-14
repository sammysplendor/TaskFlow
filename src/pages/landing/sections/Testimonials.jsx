import style from '../sections-styles/Testimonials.module.css'
import { Star } from '@boxicons/react'

const TestimonialsSection = () => {
    return(
        <div className='sectionContainer'>
            <div className='sectionHeading'>
                <h2>Trusted by teams who value clarity and speed</h2>

                <p>
                    From startups to growing teams, TaskFlow helps people plan, track, and deliver work 
                    without the chaos.
                </p>
            </div>

            <div className={style.reviews}>
                <div className={style.review}>
                    <p>
                        “TaskFlow completely changed how our team plans work. 
                        The timeline view alone helped us spot delays before they became problems.”
                    </p>
                    <p className={style.name}><b>Sarah M.</b></p>
                    <p className={style.role}><span>Product Manager</span> — NovaLabs</p>
                </div>

                <div className={style.review}>
                    <p>
                       “It's clean, fast, and actually enjoyable to use. 
                       We moved from spreadsheets and never looked back.”
                    </p>
                    <p className={style.name}><b>Daniel O.</b></p>
                    <p className={style.role}><span>Operations Lead</span> — Flowbyte</p>
                </div>

                <div className={style.review}>
                    <p>
                        “What I love most is the clarity. Everyone knows what to do, when to do it, 
                        and who owns what.”
                    </p>
                    <p className={style.name}><b>Aisha K.</b></p>
                    <p className={style.role}><span>Team Lead</span> — Brightline</p>
                </div>
            </div>

            <div className={style.stats}>
                <div className={style.stat}>
                    <span className={style.number}>10K+</span>
                    <span className={style.text}>Tasks tracked</span>
                </div>

                <div className={style.stat}>
                    <span className={style.number}>2.5K+</span>
                    <span className={style.text}>Active Users</span>
                </div>

                <div className={style.stat}>
                    <span className={style.number}>4.8<Star pack="filled" /></span>
                    <span className={style.text}>average satisfaction</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection