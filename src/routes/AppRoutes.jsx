import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "../pages/landing/Landing";
// import SignupForm from "../pages/auth/signup";
// import LoginForm from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/dashboard/Projects";
import AppScreens from "../layout/Screens";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Login" element={<LoginForm />} /> */}
        <Route path="/" element={<AppScreens />}>
          <Route index element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
