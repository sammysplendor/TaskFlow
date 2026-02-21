import style from "./Sidebar.module.css";
import logo from "../../assets/images/TaskFlow_logo_1.png";
import { Tachometer } from "@boxicons/react";
import { LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <aside>
      <div className={style.logoContainer}>
        <img src={logo} alt="Taskflow logo" />
      </div>

      <div className={style.menu}>
        <span>
          <Tachometer /> Dashboard
        </span>
      </div>

      <div className={style.sidebarFooter}>
        <span>
          <LogOut /> Logout
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
