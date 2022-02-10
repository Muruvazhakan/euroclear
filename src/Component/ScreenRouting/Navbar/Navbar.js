import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Navbar.css';
// import euroLogo from '../../../Assets/img/euro.jpg';
import euroLogo from '../../../Assets/img/eurologo.jpg';
function Navbars() {
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
                        <div className="euroclear-button" >
                        <Nav.Link href="/Login">MyEuroclear</Nav.Link>
                        {/* <Button className="euroclear-button" href="/Login">MyEuroClear</Button>  */}
                        </div>
                        {/* <Nav.Link href="/Register">Register</Nav.Link> */}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;
}

export default Navbars;
