import React from 'react'
import {Navbar,Nav } from 'react-bootstrap'
import { LoginView } from '../authentication/LoginView'

export const NavBar = () => {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">SignUp</Nav.Link>
      <Nav.Link href='/login'>Login</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>

    )
}
