import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Navbar.css';
// import euroLogo from '../../../Assets/img/euro.jpg';
import euroLogo from '../../../Assets/img/eurologo.jpg';
import Login from "../../../Screen/Login/Login";
import { Routes, Route } from "react-router-dom";
function Navbars(props) {
   
    const initialState = {
        userStatus: null,        

    };
    let name="";
    const [state, setState] = useState(initialState);

        useEffect(() => {
       state.userStatus=localStorage.getItem('Name');
       name=state.userStatus;
       console.log(state.userStatus +"1state.userStatus");

    }, [state.userStatus]);

    const logouthandler = () =>{
        localStorage.setItem('Name',"") ;
        
    //    return <Route path="/Login" element={<Login />} />
      
        setState({
            userStatus:null
        });
        return true;
    }
    return <>
        <Navbar sticky='top' expand='lg' >
            <Container fluid >
                <Navbar.Brand href='./' className="navbar-style">
                    <img
                        alt="Euroclear"
                        src={euroLogo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top header_logo"
                    />{' '}
                    
                </Navbar.Brand>
                <Navbar.Brand  href='./'>
                <h2 className='logo-style' style={{color:'red'}}>Euroclear Finland</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-aria-controls='navbarScroll' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav

                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* {state.userStatus === null || state.userStatus ===""  ?  */}
                        <div className="euroclear-button" >
                       
                        <Nav.Link href="/Login">MyEuroclear</Nav.Link>
                        </div>
                        {/* : */}
                        <>
                       
                        <Nav.Link href="/Search">Search</Nav.Link>
                        
                      
                        {/* <p className='login-style navbar-nav'>Hi {name}</p> */}
                       {/* <button className="btn btn-outline-danger  btn-styles logout-bt" href="/Login" onClick={logouthandler}>Logout</button> */}
                       
                       {/* <Button href="/Register" className='logout-bt'  variant='outline-success' onClick={logouthandler}> Logout </Button> */}
                        </>
                        {/* } */}

                        {/* <Button className="euroclear-button" href="/Login">MyEuroClear</Button>  */}
                        
                        {/* <Nav.Link href="/Register">Register</Nav.Link> */}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;
}

export default Navbars;
