import { Container, Navbar, Nav } from "react-bootstrap";
import {useState} from 'react';

import logo from "./../logo.svg";

function NavBar() {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
    <Container>
      <Navbar expand="lg" fixed="top"  bg={colorChange ? 'success':''} variant='light'>
        <Navbar.Brand href="/home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Shopping List
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-3" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/register" >Register</Nav.Link>
            <Nav.Link href="/login" >Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </>
  );
}

export default NavBar;
