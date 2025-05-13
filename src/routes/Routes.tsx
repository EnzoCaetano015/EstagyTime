import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../Pages/SplashScreen";
import Home from "../Pages/Home/Home";
import LearnMore from "../Pages/LearnMore/LearnMore";
import Demo from "../Pages/Demo/Demo";
import AuthPage from "../Pages/Auth/AuthPage";
import ScrollToTop from "../Hook/Scroll";
import CompanySelection from "../Pages/CompanySelection/CompanySelection";
import UserDashboard from "../Pages/Dashboard/userDashboard";
import AdminDashboard from "../Pages/Dashboard/adminDashboard";

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