import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from "./navbar";
import {Home} from "./Home";
import Login from './user/login';
import Register from './user/register';


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;