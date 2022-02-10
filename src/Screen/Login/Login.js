import React, { useEffect } from 'react';
import './Login.css'
import { FaUserCircle } from 'react-icons/fa';
import Pulse from 'react-reveal/Pulse';
import { Button } from 'react-bootstrap';
import Card from '../../Component/Card/Card';
function Login() {

    useEffect(() => {
        document.title = "Login - Euroclear"
    }, []);
    return <>
        <Pulse>
            <form >
                <Card className="header-text-style" >
                    Log in
                </Card>
                <FaUserCircle size={"70px"} className="user-icon-styles" />
                
                <div className="form-group form-styles  ">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group form-styles">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group form-styles">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input checkbox-style" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-outline-secondary  btn-styles ">Login</button>
                <div className="form-group form-styles">
                    <p className="register-styles">New User? Register Now</p>
                    <Button href="/Register" variant='outline-success'> Register </Button>
                </div>

                <Button href="/ForgotPassword" variant='outline-danger' className='forgot-pass'> Forgot Password ? </Button>

            </form>
        </Pulse>
    </>;
}

export default Login;
