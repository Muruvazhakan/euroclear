import React, { useEffect,useState } from 'react';
import './Login.css'
import { FaUserCircle } from 'react-icons/fa';
import Pulse from 'react-reveal/Pulse';
import { Button } from 'react-bootstrap';
import Card from '../../Component/Card/Card';
import querybg from '../../Assets/img/login-bg.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as UrlDatas from '../../Assets/Datas/Datas';
import { Alert } from 'bootstrap';
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
      const notify = (errors,types) =>
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
            toast.success("Logged In",{    
            position: "top-center",
            
            pauseOnHover: true,                 
        })
    
        }
        
    };

    const handleLoginUser =() =>{     
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
                //ToastAndroid.show(responseJson,ToastAndroid.LONG);
        
                if (responseJson !== "Wrong") 
                {
                  console.log("Wrong pass or no user");
                //   setState({
                //     ...state,
                //     errordetail: 'Something went wrong',
                //   })
                }
                else
                {
                  console.log("Added");
                  			
                }
                // notify('Success','succ');
                // setShowModal(false);
                 notify('Success','succ');
              })  
              .catch((error) => {
                console.error(error);
              });         
          
        
    }
   
    const addUserHandler = (event) => {  
        console.log("sub");
        // event.preventDefault();
        console.log(state);
        if (state.enteredEmailId.trim().length === 0 || state.enteredEmailId.trim().length === 0) {
            setState({
              ...state,
              errordetail: 'User Name',
            });
            notify('User EmailId is null','succ');
            return;
          } 
        if (state.enteredPass.trim().length === 0 || state.enteredPass.trim().length === 0) {
          setState({
            ...state,
            errordetail: 'User Name',
          });
          notify('User Password is null','succ');
          return;
        }   
        
        //   Alert("Please")
       
        
        handleLoginUser();
       
       
            
        console.log(state );    
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
          password: val.target.value
        });
        console.log(state.password);
      }
      const emailChangeHandler = (val) => {
        setState({
          ...state,
          errordetail: '',
          enteredEmailId: val.target.value
        });
        console.log(state.enteredEmailId);
      }
      const addUser = (val) =>{
        alert("alert1");
        val.preventDefault();
        return true;
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
                        <input type="email" className="form-control" placeholder="Enter email"  onChange={(val)=>emailChangeHandler(val)}/>
                    </div>

                    <div className="form-group form-styles">
                        <input type="password" className="form-control" placeholder="Enter password"  onChange={(val)=>passwordChangeHandler(val)}/>
                    </div>

                    <div className="form-group form-styles">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input checkbox-style" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button  className="btn btn-outline-secondary  btn-styles" onClick={(val)=>addUserHandler(val)}>Login</button>
                    <div className="form-group form-styles">
                        <p className="register-styles">New User? Register Now</p>
                        <Button href="/Register" variant='outline-success'> Register </Button>
                    </div>

                    <Button  href="/ForgotPassword" variant='outline-danger' className='forgot-pass'> Forgot Password ? </Button>

               
            </div>
        </div>
        </Pulse>
    </>;
}

export default Login;
