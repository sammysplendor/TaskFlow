import style from "./Sidebar.module.css";
import logo from "../../assets/images/TaskFlow_logo_1.png";
import { Tachometer, WorkflowAlt, Task, Community } from "@boxicons/react";
import { LogOut, CalendarDays, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // =============== LOGOUT LOGIC =============== //
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <aside>
      <div>
        <div className={style.logoContainer}>
          <img src={logo} alt="Taskflow logo" />
        </div>

        <div className={style.menu}>
          <span className={style.activeTab}>
            <Tachometer className={style.icon} /> Dashboard
          </span>

          <span className={style.inactiveTab}>
            <WorkflowAlt className={style.icon} /> Projects
          </span>

          <span className={style.inactiveTab}>
            <Task className={style.icon} /> My Tasks
          </span>

          <span className={style.inactiveTab}>
            <Community className={style.icon} /> Team
          </span>

          <span className={style.inactiveTab}>
            <CalendarDays className={style.icon} /> Calender
          </span>

          <span className={style.inactiveTab}>
            <Settings className={style.icon} /> Settings
          </span>
        </div>
      </div>

      <div className={style.sidebarFooter}>
        <span onClick={handleLogout}>
          <LogOut className={style.icon} /> Logout
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
