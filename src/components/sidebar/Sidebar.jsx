import style from "./Sidebar.module.css";
import logo from "../../assets/images/TaskFlow_logo_1.png";
import { Tachometer, WorkflowAlt, Task, Community } from "@boxicons/react";
import { LogOut, CalendarDays, Settings } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const getLinkClass = ({ isActive }) =>
    isActive ? style.activeTab : style.inactiveTab;

  // =============== LOGOUT LOGIC =============== //
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <aside className={`${style.sidebar} ${isOpen ? style.open : style.closed}`}>
      <div>
        <div className={style.logoContainer}>
          <img src={logo} alt="Taskflow logo" />
        </div>

        <div className={style.menu}>
          <NavLink to="/" className={getLinkClass}>
            <Tachometer className={style.icon} /> Dashboard
          </NavLink>

          <NavLink to="/projects" className={getLinkClass}>
            <WorkflowAlt className={style.icon} /> Projects
          </NavLink>

          <NavLink to="/dashboard/tasks" className={getLinkClass}>
            <Task className={style.icon} /> My Tasks
          </NavLink>

          <NavLink to="/dashboard/team" className={getLinkClass}>
            <Community className={style.icon} /> Team
          </NavLink>

          <NavLink to="/dashboard/calender" className={getLinkClass}>
            <CalendarDays className={style.icon} /> Calender
          </NavLink>

          <NavLink to="/dashboard/settings" className={getLinkClass}>
            <Settings className={style.icon} /> Settings
          </NavLink>
        </div>
      </div>

      <div className={style.sidebarFooter}>
        <button className={style.logoutBtn} onClick={handleLogout}>
          <LogOut className={style.icon} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
