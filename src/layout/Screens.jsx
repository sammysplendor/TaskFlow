import "./Screens.css";
import { Outlet } from "react-router-dom";

const AppScreens = () => {
  return (
    <div className="layout">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppScreens;
