import style from '../sections-styles/Pricing.module.css'
import { Check } from 'lucide-react'

const PricingSection = () => {
return(
    <div className="sectionContainer">
        <div className="sectionHeading">
            <h2>Simple pricing that scales with your team</h2>

            <p>Start for free. Upgrade only when you need more power.</p>
        </div>

        <div className={style.pricePlans}>
            <div className={`${style.plan} ${style.normal}`}>
                <p className={style.planName}>Free Plan <span>(Default Entry)</span></p>

                <h2 className={style.price}>Free - <span>forever</span></h2>

                <ul className={style.features}>
                    <span><b>Features:</b></span>
                    <li><Check /> Up to 3 projects</li>
                    <li><Check /> Task & timeline view</li>
                    <li><Check /> Basic progress tracking</li>
                    <li><Check /> Personal dashboard</li>
                    <li><Check /> Email support</li>
                </ul>

                <button className={style.planCTA}>
                    <a href="">Get Started for Free</a>
                </button>
            </div>

            <div className={`${style.plan} ${style.scale}`}>
                <p className={style.planName}>Pro Plan <b>(Most Popular)</b></p>

                <h2 className={style.price}>$8/month</h2>

                <ul className={style.features}>
                    <span><b>Features:</b></span>
                    <li><Check /> Unlimited projects</li>
                    <li><Check /> Advanced timelines</li>
                    <li><Check /> Team collaboration</li>
                    <li><Check /> Progress analytics</li>
                    <li><Check /> Priority support</li>
                </ul>

                <button className={style.planCTA}>
                    <a href="">Start free trial</a>
                </button>
            </div>

            <div className={`${style.plan} ${style.normal}`}>
                <p className={style.planName}>Team Plan <span>(Advanced)</span></p>

                <h2 className={style.price}>$15/month</h2>

                <ul className={style.features}>
                    <span><b>Features:</b></span>
                    <li><Check /> Everything in Pro</li>
                    <li><Check /> Team roles & permissions</li>
                    <li><Check /> Shared team dashboards</li>
                    <li><Check /> Activity logs</li>
                    <li><Check /> Dedicated support</li>
                </ul>

                <button className={style.planCTA}>
                    <a href="">Contact sales</a>
                </button>
            </div>
        </div>
    </div>
)
}

export default PricingSection