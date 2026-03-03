import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/Landing";
import SignupForm from "../pages/auth/signup";
import LoginForm from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignupForm />} />
        <Route path="/Login" element={<LoginForm />} /> */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
