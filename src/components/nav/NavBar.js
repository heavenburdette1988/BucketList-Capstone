import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Logout } from "../auth/Logout"
import { Home } from "../home/Home"





class NavBar extends Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="home"><Image src={require('../image/TrapperKeeperLogo.png')} rounded alt="Brand logo" style={{ width: '7rem' }}/></Navbar.Brand>
              
              <Nav className="me-auto">
                <Nav.Link href="/home" >Home</Nav.Link>
                <Nav.Link href="/community">Community Page</Nav.Link>
              </Nav>
              <Logout/>
              </Container>
               
            </Navbar>
           {/* <Home/> */}
               </>
              
        )
    }
}

export default NavBar

// I want to add logo in #home