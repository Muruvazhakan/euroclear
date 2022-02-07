import React, { Component } from 'react';
import './Login.css'
function Login() {
    return <>
        <form >
            <h3>Log in</h3>
            <div className="form-group form-styles  ">
                <label className="form-styles">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group form-styles">
                <label className="form-styles">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-group form-styles">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input checkbox-style" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-outline-secondary  btn-styles ">Login</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    </>;
}

export default Login;
