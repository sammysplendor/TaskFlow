import style from '../sections-styles/FAQs.module.css'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQsData } from '../../../data/mockData'
import { useState } from 'react'

const FAQs = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleAccordion = (index) => {
        setIsClicked(prevClicked => prevClicked === index ? null : index)
    }

    return(
        <section className='sectionContainer'>
            <div className="sectionHeading">
                <h2 className={style.desktop}>Frequently Asked Questions</h2>
                <h2 className={style.mobile}>FAQs</h2>
            </div>
         
            <div className={style.accordionContainer}>
                {FAQsData.map((item, index) => 

                    <div key={index} className={style.accordion}>
                        <p className={style.question} onClick={() => toggleAccordion(index)}>
                            {item.question}
                            {isClicked === index ? (<ChevronUp className={style.opened} />) : 
                                (<ChevronDown className={style.closed} />
                            )}
                        </p>
                        <p className={`${style.content} ${isClicked === index ? style.open : ""}`}>
                            {item.answer}
                        </p>                                                      
                    </div>
                )}
            </div> 
        </section>
    )
}

export default FAQs