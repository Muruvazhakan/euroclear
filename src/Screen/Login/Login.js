import React, { useEffect, useState } from 'react';
import './Login.css'
import { FaUserCircle } from 'react-icons/fa';
import Pulse from 'react-reveal/Pulse';
import { Button, Toast } from 'react-bootstrap';
import Card from '../../Component/Card/Card';
import querybg from '../../Assets/img/login-bg.jpg';
import 'react-toastify/dist/ReactToastify.css';
import * as UrlDatas from '../../Assets/Datas/Datas';
import { ToastContainer, toast } from 'react-toastify';
import { HashRouter, Link } from 'react-router-dom';
function Login() {

    useEffect(() => {
        document.title = "Login - Euroclear"
    }, []);

    const initialState = {
        enteredEmailId: '',
        enteredPass: '',
        errordetail: '',

    };

    const [state, setState] = useState(initialState);

  const notify = (errors,types,name) =>
  { 
    if(types==="error")
    {
      toast.error("Invalid "+errors,{    
        position: "top-center",       
        pauseOnHover: true,
            
    })

    }
    if(types==="succ")
    {
      // toast.success("Thanks for your Interest, We will contact you As Soon As Possible.",{    
        toast.success("Welcome "+name,{    
        position: "top-center",        
        pauseOnHover: true,
            
    })

    }
    
}
    const handleLoginUser = () => {
        console.log("handleLoginUser");


        fetch(UrlDatas.LoginUrl, {
            method: 'post',
            header: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                password: state.enteredPass,
                emailId: state.enteredEmailId

            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson + " responseJson");              
                if (responseJson === "Wrong") {
                    console.log("Wrong pass or no user");    
                    // alert("Wrong credentials!")    
                    notify('Credentials','error',"");           
                }
                else {
                    console.log("Logged in");
                    // notify('Logged','succ');
                    notify('Logged','succ',responseJson);  
                    localStorage.setItem('Name',responseJson) ;
                    return <Link href="/" />
                }                
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const addUserHandler = (event) => {
        
        console.log("sub");     
       
        if (state.enteredEmailId.trim().length === 0) {           
            notify('EmailId','error',"");
            return;
        }
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (state.enteredEmailId.match(mailformat)) {
            console.log("trueasda");
        }
        else {
            console.log("fale");
            // alert("Please enter valid Email Id")
            notify('EmailId','error',"");
        }
        if (state.enteredPass.trim().length === 0) {

            // alert("Please enter your Password")
            notify('Password','error',"");
            return;
        }

        //   Alert("Please")


        handleLoginUser();



        console.log(state);
        // setState({
        //   ...state,
        //   displaywhat:true,
        // })
        // console.log("submit state Success change");
    };

    const passwordChangeHandler = (val) => {
        setState({
            ...state,
            errordetail: '',
            enteredPass: val.target.value
        });
        console.log(state.enteredPass);
    }
    const emailChangeHandler = (val) => {
        setState({
            ...state,
            errordetail: '',
            enteredEmailId: val.target.value
        });
        console.log(state.enteredEmailId);
    }

    return <>
        <img
            src={querybg}
            alt="Euroclear"
            width="100%"
            height="350px"
            className=" title-img" />
        <Pulse> <div className="header-text-style" >
            <div className='inner'>

                <Card className="header-text-style login-style" >
                    Log in
                </Card>
                <FaUserCircle size={"70px"} className="user-icon-styles" />

                <div className="form-group form-styles  ">
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(val) => emailChangeHandler(val)} />
                </div>

                <div className="form-group form-styles">
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(val) => passwordChangeHandler(val)} />
                </div>

                <div className="form-group form-styles">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input checkbox-style" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button className="btn btn-outline-secondary  btn-styles" onClick={(val) => addUserHandler(val)}>Login</button>
                <div className="form-group form-styles">
                    <p className="register-styles">New User? Register Now</p>
                    <Button href="/Register" variant='outline-success'> Register </Button>
                </div>

                <Button href="/ForgotPassword" variant='outline-danger' className='forgot-pass'> Forgot Password ? </Button>


            </div>
        </div>
       
        </Pulse>
        <ToastContainer />
    </>;
}

export default Login;
