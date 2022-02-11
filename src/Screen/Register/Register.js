import React from 'react';
import './Register.css';
import Jump from 'react-reveal/Jump';
import { FaUserPlus } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Card from '../../Component/Card/Card';
import querybg from '../../Assets/img/bg2.jpg';
function Register() {
    React.useEffect(() => { 
        document.title="Create User - Euroclear"
    },[]);
    return <>
    <img
            src={querybg}
            alt="Euroclear"
            width="100%"
            height="350px"
            className=" title-img" />
        <Jump>
        <div className="header-text-style" >
            <div className='inner'>
            <form className='rigter-screen'>
                {/* <h3>Register</h3> */}
                <Card className="header-text-style Register login-style" >        
                Register
                </Card>  
                <FaUserPlus size={"50px"} className="user-icon-styles" />
                <div className="form-group form-styles">
                    {/* <label className="lable-styles">First name</label> */}
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group form-styles">
                    {/* <label className="lable-styles">Last name</label> */}
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group form-styles">
                    {/* <label className="lable-styles">Email</label> */}
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group form-styles">
                    {/* <label className="lable-styles">Password</label> */}
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-outline-secondary  btn-styles">Register</button>
               
                <div className="form-group form-styles">
                <p className="register-styles">Already registered..</p>
                <Button href="/Login" variant='outline-info'> login in? </Button>
                </div>
            </form>
            </div>
            </div>
        </Jump>
    </>;
}

export default Register;
