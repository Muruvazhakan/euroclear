import React from 'react';
import { Routes, Route } from "react-router-dom";
import ForgotPassword from '../../Screen/ForgotPassword/ForgotPassword';
import History from '../../Screen/History/History';
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
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/History" element={<History />} />
                    <Route path="/Search" element={<MainQuery />} />                    
                    <Route  path="/ForgotPassword" element={<ForgotPassword />} />
                </Routes>           
        </div>
    </>;
}

export default ScreenRouting;
