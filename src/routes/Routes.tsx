import { BrowserRouter, Routes, Route} from "react-router-dom";
import Splash from "../pages/SplashScreen";
import Login from "../pages/LoginScreen";
import Home from "../pages/Home/Home";
import LearnMore from "../pages/LearnMoreScreen/LearnMore";
import Demo from "../pages/Demo/Demo";

function Rotas(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element = {<Splash/>}/>
            <Route path="/Home" element = {<Home/>}/>
            <Route path="/LearnMore" element = {<LearnMore/>}/>
            <Route path="/Demo" element = {<Demo/>}/>
            <Route path="/Login" element = {<Login/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default Rotas