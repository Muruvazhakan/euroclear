import React from 'react';
import './Register.css'
function Register() {
    return <>
        <form>
            <h3>Register</h3>

            <div className="form-group form-styles">
                <label className="lable-styles">First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group form-styles">
                <label className="lable-styles">Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group form-styles">
                <label className="lable-styles">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group form-styles">
                <label className="lable-styles">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-outline-secondary  btn-styles">Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="/Login">log in?</a>
            </p>
        </form>
    </>;
}

export default Register;
