import React from "react";
import "../Header/Header.css";
import { Button, ButtonGroup, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo  from "../Header/logo2.png";
import header from "../Header/bannerbackground.png";
import { Link } from "react-router-dom";

// const background = {
//     width: "100%",
//     height: "400px",
//     backgroundImage: "url(" + { header } + ")"
// }

const Header = () => {
  return (
    <div>
        <div> 
      <Navbar  expand="lg">
        <Navbar.Brand href="#home">
          <img className = "logo" src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-left">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Button className="button" variant="danger">Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      <h1 stye={{testAlign: 'center'}}>The best Food is waiting for your belly!!</h1>
   <div className="container-fluid header" style= {{backgroundImage: `url(${header})`}}>
   
   <input className="center" variant="danger" type="text"/>
   <Button className="button" variant="danger">Sign In</Button>

   
   </div>

<div className="button-group">
<ButtonGroup  size="small" aria-label="small outlined button group">
  <Link to="/breakfast"> <Button className="buttons" >Break fast</Button> </Link> 
  <Link to="/lunch"> <Button className="buttons">Lunch</Button> </Link> 
 <Link to="/dinner"> <Button className="buttons">Dinner</Button> </Link>
    </ButtonGroup>
</div>


   
      
      
</div>
    
  );
};

export default Header;
