import style from './Buttons.module.css'

const StartForFreeBtn = () => {
    return(
        <div className={style.ctaContainer}>
            <a href="/Signup" className={style.startCta}>Start for Free</a>
        </div>
    )
}

export default StartForFreeBtn