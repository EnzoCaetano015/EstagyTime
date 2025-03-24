import { BrowserRouter, Routes, Route} from "react-router-dom";
import Splash from "../pages/SplashScreen";
import Login from "../pages/LoginScreen";
import Home from "../pages/Home/Home";

function Rotas(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element = {<Splash/>}/>
            <Route path="/Home" element = {<Home/>}/>
            <Route path="/Login" element = {<Login/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default Rotas