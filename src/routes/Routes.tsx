import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../Pages/SplashScreen";
import Home from "../Pages/Home/Home";
import LearnMore from "../Pages/LearnMore/LearnMore";
import Demo from "../Pages/Demo/Demo";
import AuthPage from "../Pages/Auth/AuthPage";
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