import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Navbar.css';
// import euroLogo from '../../../Assets/img/euro.jpg';
import euroLogo from '../../../Assets/img/eurologo.jpg';
function Navbars() {
    return <>
        <Navbar className="navbar navbar-light bg-light " bg="light" sticky='top' expand='lg' >
            <Container fluid >
                <Navbar.Brand href='./' className="navbar-style">
                    <img
                        alt="EuroClear"
                        src={euroLogo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    
                </Navbar.Brand>
                <Navbar.Brand href='./'>
                <h2 style={{color:"red"}}>EuroClear </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-aria-controls='navbarScroll' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav

                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/Register">Register</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;
}

export default Navbars;
