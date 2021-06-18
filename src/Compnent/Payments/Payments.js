import React, { useContext, useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Middle from '../Middle/Middle'
import logo from '../Header/logo2.png'
import { useForm } from 'react-hook-form'
import { PhoneNumber } from '../../App'
import MatchedData from "./MatchedData"
import { useHistory } from 'react-router'
const Payments = () => {
  
  const { register, handleSubmit, watch, errors } = useForm();
  
  
  
  const goToPayment = ()=> {
    
    window.location = "/payment"
    
        
}
  const onSubmit = (phoneData) => {
    fetch(`http://localhost:5001/phones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(phoneData),
    })
      .then((res) => res.json())
      .then((success) => {
        console.log(success);
        
      })
  }

  const[data, setData] = useState([])
  // console.log(data)

  useEffect(() => {
    fetch('http://localhost:5001/getUserData')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      <div style={{ overflowX: 'hidden' }}>
        <div className="container">
          <Navbar expand="lg">
            <Navbar.Brand href="/home">
              <img
                style={{ height: '2rem', width: '7rem' }}
                src={logo}
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle
              style={{
                border: '1px solid yellow',
                backgroundColor: 'yellow',
                opacity: '0.3',
              }}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse className="mr-1 justify-content-end">
              <Nav>
                <Nav.Link href="/home">
                  <i
                    class="fa fa-shopping-cart"
                    style={{ color: 'red', fontSize: '36px' }}
                  ></i>
                </Nav.Link>
                <Nav.Link style={{ color: 'black' }} href="/payment">
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
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="foods">
            <h3>Please provide your phone number</h3>
          </label>

          <input
            name="foods"
            ref={register}

            autoComplete="off"
            required
            style={{
              height: '3rem',
              width: '80%',
              borderRadius: '5px',
              border: '1px solid gray',
              color: '#09015f',
              fontStyle: 'bold',

            }}
          /> <br/> <br/>

          <input onClick={()=>goToPayment()}
            style={{
              height: '3rem',
              width: '8rem',
              borderRadius: '20px',
              border: '1px solid #FF4B2B',
              backgroundColor: '#FF4B2B',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'transform 80ms ease-in',
            }}
            type="submit"
          />
        </form>
      </div>
      {
          data.map(food => (<MatchedData foods={food}></MatchedData> ))
      }
    </div>
  )
}

export default Payments
