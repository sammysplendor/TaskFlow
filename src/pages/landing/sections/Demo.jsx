import dashboardDemo from '../../../assets/images/Dashboard mockup.jpg'
import style from '../sections-styles/Demo.module.css'

const Demo = () => {
    return(
        <div className='sectionContainer'>
            <div className='sectionHeading'>
                <h2>Your work, all in one place.</h2>

                <p>
                    The TaskFlow dashboard shows tasks, timelines, progress charts, and team assignments - 
                    designed for clarity and efficiency.
                </p>
            </div>

            <div className={style.dashboardDemo}>
                <img src={dashboardDemo} alt="Dashboard mockup" />
            </div>
        </div>
    )
}

export default Demo