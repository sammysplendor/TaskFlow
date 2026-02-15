import style from '../sections-styles/FAQs.module.css'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQs = () => {
    return(
        <section className='sectionContainer'>
            <div className="sectionHeading">
                <h2 className={style.desktop}>Frequently Asked Questions</h2>
                <h2 className={style.mobile}>FAQs</h2>
            </div>

            <div className={style.questionsContainer}>
                <div className={style.accordion}>
                    <p className={style.question}>
                        <b>Is TaskFlow really free to start?</b> 
                        <ChevronDown className={style.closed} /><ChevronUp className={style.opened} />
                    </p>

                    <p className={style.answer}>
                        Yes. You can use TaskFlows free plan without a credit card and upgrade anytime.
                    </p>
                </div>               
            </div>
        </section>
    )
}

export default FAQs