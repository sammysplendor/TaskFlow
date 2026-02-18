import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/Landing";
import SignupForm from "../pages/auth/signup";
import LoginForm from "../pages/auth/Login";

function AppRoutes(){
    return (
     <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<LandingPage />}/> */}
            <Route path="/" element={<SignupForm />}/>
            <Route path="/" element={<LoginForm />}/>
        </Routes>
     </BrowserRouter>
    )
}

export default AppRoutes