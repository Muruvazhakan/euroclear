import React from 'react';
import { Routes, Route } from "react-router-dom";
import Histroy from '../../Screen/Histroy/Histroy';
import Home from '../../Screen/Home/Home';

import Login from "../../Screen/Login/Login";
import MainQuery from '../../Screen/MainQuery/MainQuery';
import Register from "../../Screen/Register/Register";
import Navbars from './Navbar/Navbar';
import './ScreenRouting.css';
function ScreenRouting(props) {
    return <>
        <div className="outer">
            <Navbars />
            <div className="inner">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Histroy" element={<Histroy />} />
                    <Route path="/Search" element={<MainQuery />} />
                </Routes>
            </div>
        </div>
    </>;
}

export default ScreenRouting;
