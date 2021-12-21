import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Image, Nav, Navbar } from "react-bootstrap"




class NavBar extends Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="#home"><Image src={require('../image/TrapperKeeperLogo.png')} rounded alt="Brand logo" style={{ width: '7rem' }}/></Navbar.Brand>
              
              <Nav className="me-auto">
                <Nav.Link href="home" >Home</Nav.Link>
                <Nav.Link href="features">Community Page</Nav.Link>
              </Nav>
              </Container>
            </Navbar>
          </>
        )
    }
}

export default NavBar

// I want to add logo in #home