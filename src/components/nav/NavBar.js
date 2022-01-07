import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Image, Nav, Navbar } from "react-bootstrap"
import { Logout } from "../auth/Logout"
import { Welcome } from "../welcome/Welcome"

import './NavBar.css'



class NavBar extends Component {
    render() {
        return (
            <>
          <div className="NavBar">
            <Navbar  bg="dark" variant="dark" >

            
              <Container className="container">
              {/* <Navbar.Brand href="home"><Image src={require('../image/TrapperKeeperLogo.png')} rounded alt="Brand logo" style={{ width: '7rem' }}/></Navbar.Brand> */}
              
              <Nav className="me-auto">
                <Nav.Link href="/home" >Home</Nav.Link>
                <Nav.Link href="/community">Community Page</Nav.Link>
              </Nav>
              <div className="welcome">
              <Welcome/> 
              <Logout/>
              </div>
              </Container>
              
            </Navbar>
           </div>
               </>
              
        )
    }
}

export default NavBar

// I want to add logo in #home