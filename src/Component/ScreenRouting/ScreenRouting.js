import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../Screen/Home/Home';

import Login from "../../Screen/Login/Login";
import Register from "../../Screen/Register/Register";
import Navbar from './Navbar/Navbar';
import './ScreenRouting.css';
function ScreenRouting(props) {
    return <>
        <Navbar />     
        <div className="outer">
            <div className="inner">
                <Routes>
                    <Route  path='/' element={<Home/>} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </div>
        </div>
    </>;
}

export default ScreenRouting;
