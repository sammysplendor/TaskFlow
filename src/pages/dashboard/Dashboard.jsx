import style from "./Dashboard.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Bell, Divide, Search } from "lucide-react";
import { User, CaretBigDown } from "@boxicons/react";
import { projects } from "../../data/mockData";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    isOpen(false);
  };

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
          <div className={style.upperSections}>
            <div className={style.timelineSection}></div>

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
