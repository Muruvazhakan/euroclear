import React,{useState} from 'react';
import './ForgotPassword.css';
import Jump from 'react-reveal/Jump';
import { RiUserSearchFill } from 'react-icons/ri';
import { Button, Col, Row } from 'react-bootstrap';
import Card from '../../Component/Card/Card';
import recaptcha from '../../Assets/img/recaptcha.jpg';
import querybg from '../../Assets/img/bg2.jpg';
import Zoom from 'react-reveal/Zoom';
function ForgotPassword() {

    
    const Initialstate ={
        captcha:"LYNN",
        entredcaptcha:"",
        isSubmit:false,
    }
    const [data,setData]= useState(Initialstate);
    React.useEffect(() => { 
        document.title="Forgot Password - Euroclear"
    },[]);
    
    const handleSubmit = () => {
        alert("val");
        setData({
            isSubmit:true,
        });
    }
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
                 
                <Card className="header-text-style Register login-style" >        
                Forgot Password
                </Card>  
                <RiUserSearchFill size={"50px"} className="user-icon-styles" />            

                <div className="form-group form-styles">                   
                    <input type="email" className="form-control" placeholder="Registered Email id" />
                </div>
                { !data.isSubmit ? 
                <>
                <Col >
                    <img 
                    src={recaptcha}
                     alt="Euroclear"                        
                     width="200"
                     height="80"
                     className=" " />
                <div className="form-group form-styles">
                    
                    <input type="text" className="form-control" placeholder="Captcha" />
                </div>
                </Col>

                <button className="btn btn-outline-secondary  btn-styles" onClick={()=>handleSubmit()}>Submit</button>
                </>  
                  :
                < >
                
                <Zoom >
                <p className="register-styles">A link to rest your password has been sent to your registered email !</p>
                <Button href="/Login" variant='outline-info'> Resend </Button>
                </Zoom>
                </>
               
            }
            </form>
            
            </div>
            </div>
            </Jump>
        
    </>;
}

export default ForgotPassword;