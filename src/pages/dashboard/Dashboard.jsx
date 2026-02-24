import style from "./Dashboard.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Bell, Search, ChevronDown } from "lucide-react";
import { User, CaretBigDown, Circle } from "@boxicons/react";
import { projects, project001, tasks } from "../../data/mockData";
import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

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

  // =============== COMPLETION STATUS CHART LOGIC =============== //
  const completedTasks = tasks.filter((task) => task.status === "done").length;
  const totalTask = tasks.length;

  const percentage =
    totalTask === 0 ? 0 : Math.round((completedTasks / totalTask) * 100);

  const statusData = [
    { name: "done", value: percentage },
    { name: "undone", value: 100 - percentage },
  ];

  const colors = ["#142959", "#dbdb1e"];

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
            {/* -------- Timeline -------- */}
            <div className={`${style.section} ${style.timelineSection}`}>
              <div className={style.heading}>
                <h3>Timeline</h3>
                <span>
                  Day view <ChevronDown size={16} />
                </span>
              </div>

              <div className={style.tlContent}>
                <div className={style.dateRow}>
                  {projectDays.map((day) => (
                    <div key={day.toDateString()}>
                      <div className={style.dateItem}>{day.getDate()}</div>

                      <div className={style.brokenLines}></div>
                      <div className={style.tasksForDay}>
                        {tasks
                          .filter(
                            (task) =>
                              new Date(task.date).toDateString() ===
                              day.toDateString(),
                          )
                          .map((task) => (
                            <div key={task.id} className={style.taskItem}>
                              {task.title}
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* -------- Status -------- */}
            <div className={`${style.section} ${style.statusSection}`}>
              <div className={style.heading}>
                <h3>Completion Status</h3>
              </div>

              <ResponsiveContainer width="100%" height={185}>
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={70}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={2}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={index} fill={colors[index]} />
                    ))}
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="2.4rem"
                    fontWeight="bold"
                  >
                    {percentage}%
                  </text>
                </PieChart>
              </ResponsiveContainer>

              <div className={style.statusLabel}>
                <span>
                  <Circle pack="filled" className={style.done} /> Done
                </span>
                <span>
                  <Circle pack="filled" className={style.undone} /> Undone
                </span>
              </div>
            </div>

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
