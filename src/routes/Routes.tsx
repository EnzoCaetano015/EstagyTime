import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/SplashScreen";
import Home from "../pages/Home/Home";
import LearnMore from "../pages/LearnMoreScreen/LearnMore";
import Demo from "../pages/Demo/Demo";
import AuthPage from "../pages/Auth/AuthPage";
import ScrollToTop from "../Hook/Scroll";

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
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas