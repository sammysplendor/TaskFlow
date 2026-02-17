import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/Landing";
import SignupForm from "../pages/auth/signup";

function AppRoutes(){
    return (
     <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<LandingPage />}/> */}
            <Route path="/" element={<SignupForm />}/>
        </Routes>
     </BrowserRouter>
    )
}

export default AppRoutes