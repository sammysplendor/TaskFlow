import style from "./Dashboard.module.css";
import Placeholder from "../../components/common/placeholder";
import { useState } from "react";
import taskflowIcon from "../../assets/icons/taskflow_icon.png";
import { Menu, Bell } from "lucide-react";
import { User } from "@boxicons/react";
import Sidebar from "../../components/sidebar/Sidebar";

const Team = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className={style.parentContainer}>
      <Sidebar isOpen={isSidebarOpen} />

      {/* ---------- Top Bar ---------- */}

      <div className={style.topBar}>
        <span>
          {isSidebarOpen ? (
            <X className={style.closeIcon} onClick={toggleSidebar} />
          ) : (
            <Menu className={style.hamburger} onClick={toggleSidebar} />
          )}
          <img src={taskflowIcon} />
        </span>

        <div className={style.leftTopBar}>
          <span>
            <Bell className={style.notificationIcon} />
          </span>

          <User pack="filled" />
        </div>
      </div>

      <Placeholder />
    </div>
  );
};

export default Team;
