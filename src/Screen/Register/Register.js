import React from 'react';
import './Register.css';
import Jump from 'react-reveal/Jump';
import { FaUserPlus } from 'react-icons/fa';
function Register() {
    return <>
        <Jump>
            <form>
                {/* <h3>Register</h3> */}
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
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">log in?</a>
                </p>
            </form>
        </Jump>
    </>;
}

export default Register;
