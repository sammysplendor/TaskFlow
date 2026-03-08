import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/Landing";
import SignupForm from "../pages/auth/Signup";
import LoginForm from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/dashboard/Projects";
import AppScreens from "../layout/Screens";
import MyTasks from "../pages/dashboard/MyTasks";
import Team from "../pages/dashboard/Team";
import Calender from "../pages/dashboard/Calender";
import Settings from "../pages/dashboard/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/dashboard" element={<AppScreens />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="mytasks" element={<MyTasks />} />
          <Route path="team" element={<Team />} />
          <Route path="calender" element={<Calender />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
