import React from "react";
import './Navs.css';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../asssets/logo.png";



export default function Navs() {
  return (
    <Navbar expand="lg" id="my-svg" >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo}  alt="" title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="custom-navbar" id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">about us</Nav.Link>
            <Nav.Link href="#explor-foods">explore foods</Nav.Link>
            <Nav.Link href="#review">reviews</Nav.Link>
            <Nav.Link href="#freq">FAQ</Nav.Link>
           </Nav>
           <Nav>
            <Nav.Link id="lastnav">123456790 </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
