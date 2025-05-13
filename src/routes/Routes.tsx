import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/SplashScreen";
import Home from "../pages/Home/Home";
import LearnMore from "../pages/LearnMore/LearnMore";
import Demo from "../pages/Demo/Demo";
import AuthPage from "../pages/Auth/AuthPage";
import ScrollToTop from "../Hook/Scroll";
import CompanySelection from "../pages/CompanySelection/CompanySelection";
import UserDashboard from "../pages/Dashboard/userDashboard";
import AdminDashboard from "../pages/Dashboard/adminDashboard";


function Rotas() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/LearnMore" element={<LearnMore />} />
                <Route path="/Demo" element={<Demo />} />
                <Route path="/Auth" element={<AuthPage />} />
                <Route path="/CompanySelection" element={<CompanySelection />} />
                <Route path="/MyDashboard" element={<UserDashboard />} />
                <Route path="/CompanyDashboard" element={<AdminDashboard />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas