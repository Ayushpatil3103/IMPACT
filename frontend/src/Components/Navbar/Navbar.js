
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; // Importing individual components from react-bootstrap
import Logo from "../Home/images/2-removebg-preview 1.png";

import "./navbar.css"
function Navbaar() {
  return (
    <Navbar expand="lg"  id="n">
    
        {/* Use 'src' attribute within img tag to specify image source */}
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo"></img></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          {/* <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:'#FFF'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:'#FFF'}}>About</Nav.Link>
            <Nav.Link href="#link" style={{color:'#FFF'}}>Sign in</Nav.Link>
            <Nav.Link href="#link" style={{color:'#FFF'}}>Ranks</Nav.Link>
           
        //   </Nav> */}
        {/* // </Navbar.Collapse> */}
    
    </Navbar>
  );
}

export default Navbaar;
