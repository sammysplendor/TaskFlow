import "./Screens.css";
import { Outlet } from "react-router-dom";

const AppScreens = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default AppScreens;
