import { BrowserRouter, Routes, Route} from "react-router-dom";
import Splash from "../pages/splash";
import Login from "../pages/Login";

function Rotas(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element = {<Splash/>}/>
            <Route path="/Login" element = {<Login/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default Rotas