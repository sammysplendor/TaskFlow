import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/Landing";
import SignupForm from "../pages/auth/signup";
import LoginForm from "../pages/auth/Login";
import Sidebar from "../components/sidebar/Sidebar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}/>
            <Route path="/Signup" element={<SignupForm />}/>
            <Route path="/Login" element={<LoginForm />}/> */}
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
