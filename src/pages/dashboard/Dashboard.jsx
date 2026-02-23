import style from "./Dashboard.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Bell, Search, ChevronDown } from "lucide-react";
import { User, CaretBigDown } from "@boxicons/react";
import { projects, project001 } from "../../data/mockData";
import { useState } from "react";

const Dashboard = () => {
  // =============== PROJECT TITLE LOGIC =============== //
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    isOpen(false);
  };

  // =============== TIMELINE LOGIC =============== //
  const projectStart = new Date(project001.startDate);
  const projectDays = [];

  for (let i = 0; i < project001.duration; i++) {
    const day = new Date(projectStart);
    day.setDate(projectStart.getDate() + i);
    projectDays.push(day);
  }

  return (
    <div className={style.parentContainer}>
      <Sidebar />

      <div className={style.mainContent}>
        {/* ---------- Top Bar ---------- */}

        <div className={style.topBar}>
          <div className={style.searchBar}>
            <Search className={style.searchIcon} />
            <input type="text" placeholder="Search here..." />
          </div>

          <div className={style.leftTopBar}>
            <span>
              <Bell className={style.notificationIcon} />
            </span>

            <User pack="filled" />
          </div>
        </div>

        {/* ---------- Title ---------- */}

        <div className={style.projectTitle}>
          <span onClick={() => setIsOpen((prev) => !prev)}>
            {selectedProject}
            <CaretBigDown pack="filled" className={style.dropdownIcon} />
          </span>

          {isOpen && (
            <div className={style.dropdownMenu}>
              {projects.map((project) => (
                <div
                  key={project}
                  onClick={() => handleSelect(project)}
                  className={style.dropdownItem}
                >
                  {project}
                </div>
              ))}
            </div>
          )}
        </div>

        <section className={style.sections}>
          {/* ========== Upper sections ========== */}

          <div className={style.upperSections}>
            {/* ----- Timeline ----- */}
            <div className={style.timelineSection}>
              <div className={style.tlHeading}>
                <h3>Timeline</h3>
                <span>
                  Day view <ChevronDown size={16} />
                </span>
              </div>

              <div className={style.tlContent}>
                <div className={style.dateRow}>
                  {projectDays.map((day, index) => (
                    <div key={index} className={style.dateItem}>
                      {day.getDate()}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={style.statusSection}></div>

            <div className={style.meetingSection}></div>
          </div>

          <div className={style.lowerSections}>
            <div className={style.taskSection}></div>

            <div className={style.workloadSection}></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
