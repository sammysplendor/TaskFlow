import style from "./Dashboard.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Bell, Search } from "lucide-react";

const Dashboard = () => {
  return (
    <div className={style.parentContainer}>
      <Sidebar />

      <div className={style.mainContent}>
        <div className={style.topBar}>
          <div className={style.searchBar}>
            <Search />
            <input type="text" placeholder="Search here..." />
          </div>

          <div className={style.leftTopBar}>
            <Bell />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
