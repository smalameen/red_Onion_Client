import React from 'react'
import '../Header/Header.css'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import logo from '../Header/logo2.png'
import Middle from '../Middle/Middle'
import Food from '../Food/Food'

const Header = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img style={{ height: '2rem', width: '7rem' }} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{
              border: '1px solid red',
              backgroundColor: 'red',
              opacity: '0.3',
            }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className="mr-1 justify-content-end">
            <Nav>
              <Nav.Link href="/">
                <i
                  class="fa fa-shopping-cart"
                  style={{ color: 'red', fontSize: '36px' }}
                ></i>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/auth">
                <b style={{ color: 'black' }}>Log In</b>
              </Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="/auth">
                <b style={{ color: 'black' }}>Sign up</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Middle />

      <Food/>
    </div>
  )
}

export default Header
