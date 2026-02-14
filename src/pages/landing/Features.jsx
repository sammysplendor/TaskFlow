import style from './Features.module.css'
import { ClipboardList, Calendar1, ChartPie, UsersRound, LayoutDashboard, Layers } from 'lucide-react'

const FeaturesSection = () => {
    return(
        <div className={style.featuresSection}>
            <div className={style.heading}>
                <h2>Everything you need to stay in flow</h2>
                <p>TaskFlow brings tasks, timelines, and team collaboration into one simple workspace.</p>
            </div>

            <div className={style.featuresContainer}>
                <div className={style.feature}>
                    <div><ClipboardList size={32} color='#142959'/></div>

                    <h3>Smart Task Management</h3>

                    <p>
                        Create, organize, and prioritize tasks effortlessly. 
                        TaskFlow lets you break projects into clear, actionable steps so nothing falls through the cracks.
                    </p>
                </div>

                <div className={style.feature}>
                    <div><Calendar1 size={32} color='#142959'/></div>

                    <h3> Visual Task Timeline</h3>

                    <p>
                        See your entire project at a glance with a visual task timeline that maps deadlines and 
                        progress over time.
                    </p>
                </div>

                <div className={style.feature}>
                    <div><ChartPie size={32} color='#142959'/></div>

                    <h3>Real-Time Progress Tracking</h3>

                    <p>
                        Stay informed with real-time progress indicators that show how much work is completed and 
                        what still needs attention.
                    </p>
                </div>

                <div className={style.feature}>
                    <div><UsersRound size={32} color='#142959'/></div>

                    <h3>Team Collaboration</h3>

                    <p>
                        Work better together by assigning tasks, sharing updates, and keeping everyone aligned in one place.
                    </p>
                </div>

                <div className={style.feature}>
                    <div><LayoutDashboard size={32} color='#142959'/></div>

                    <h3>Clean & Focused Dashboard</h3>

                    <p>
                        TaskFlow is designed to reduce noise and highlight what matters most — 
                        your tasks, progress, and deadlines.
                    </p>
                </div>

                <div className={style.feature}>
                    <div><Layers size={32} color='#142959'/></div>

                    <h3>Flexible for Individuals & Teams</h3>

                    <p>
                        Whether you're managing personal tasks or team projects, TaskFlow adapts to your workflow.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection