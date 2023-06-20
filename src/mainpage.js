import React from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from "./navbar";
import {Home} from "./Home";
import Login from './user/login';
import Register from './user/register';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact Component={Home}/>
                    <Route path="/login" exact Component={Login}/>
                    <Route path="/register" exact Component={Register}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;