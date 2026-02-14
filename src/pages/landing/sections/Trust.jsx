import style from '../sections-styles/Trust.module.css'
import brightline from '../../../assets/images/Brightline logo.png'
import cloudnest from '../../../assets/images/Cloudnest logo.png'
import coreframe from '../../../assets/images/Coreframe logo.png'
import flowbyte from '../../../assets/images/Flowbyte logo.png'
import nextory from '../../../assets/images/Nextory logo.png'
import novastack from '../../../assets/images/NovaStack logo.png'
import pulselab from '../../../assets/images/PulseLab logo.png'
import zenworks from '../../../assets/images/Zenworks logo.png'

const TrustSection = () => {
    return(
        <div className={style.trustSection}>
            <h3>Used by teams who value clarity and productivity</h3>

            <div className={style.logosContainer}>
                <div className={style.logosTrack}>
                    {/* First set */}
                    <img src={zenworks} alt="Zenworks logo" />
                    <img src={cloudnest} alt="Cloudnest logo" />
                    <img src={coreframe} alt="Coreframe logo" />
                    <img src={flowbyte} alt="Flowbyte logo" />
                    <img src={brightline} alt="Brightline logo" />
                    <img src={nextory} alt="Nextory logo" />
                    <img src={novastack} alt="NovaStack logo" />
                    <img src={pulselab} alt="PulseLab logo" />

                    {/* Second set for smooth loop */}
                    <img src={zenworks} alt="Zenworks logo" />
                    <img src={cloudnest} alt="Cloudnest logo" />
                    <img src={coreframe} alt="Coreframe logo" />
                    <img src={flowbyte} alt="Flowbyte logo" />
                    <img src={brightline} alt="Brightline logo" />
                    <img src={nextory} alt="Nextory logo" />
                    <img src={novastack} alt="NovaStack logo" />
                    <img src={pulselab} alt="PulseLab logo" />
                </div>
                              
            </div>
        </div>
    )
}

export default TrustSection