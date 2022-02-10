import React from 'react';
import { Routes, Route } from "react-router-dom";
import ForgotPassword from '../../Screen/ForgotPassword/ForgotPassword';
import Histroy from '../../Screen/Histroy/Histroy';
import Home from '../../Screen/Home/Home';

import Login from "../../Screen/Login/Login";
import MainQuery from '../../Screen/MainQuery/MainQuery';
import Register from "../../Screen/Register/Register";
import Navbars from './Navbar/Navbar';
import './ScreenRouting.css';

import querybg from '../../Assets/img/bg1.jpg';
function ScreenRouting(props) {
    return <>    
        <div >
            <Navbars />
            <img 
                    src={querybg}
                     alt="Euroclear"                        
                     width="100%"
                     height="350px"
                     className=" " />
            <div>
                 
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Histroy" element={<Histroy />} />
                    <Route path="/Search" element={<MainQuery />} />                    
                    <Route  path="/ForgotPassword" element={<ForgotPassword />} />
                </Routes>
            </div>
        </div>
    </>;
}

export default ScreenRouting;
