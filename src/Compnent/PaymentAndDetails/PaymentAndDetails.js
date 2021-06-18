import React, { useEffect, useState } from 'react'
import { Button, Card, Nav, Navbar } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import Middle from '../Middle/Middle'
import logo from '../Header/logo2.png'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const dinnerFakeData = [
    {
      id: 1,
      price: 21,
      type: 'dinner',
      foodName: 'Beef Stroganoff',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/GPJnCz7/dinner1.png`,
      img1: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
      img2: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
    },
    {
      id: 2,
      price: 87,
      type: 'dinner',
      foodName: 'Reuben',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
      img1: `https://i.ibb.co/GPJnCz7/dinner1.png`,
      img2: `https://i.ibb.co/kKd3YbL/breakfast3.png`,
    },
    {
      id: 3,
      price: 61,
      type: 'dinner',
      foodName: "Waldorf Salad",
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/wQ2FgWG/dinner2.png`,
      img1: `https://i.ibb.co/dfVqm5T/dinner4.png`,
      img2: `https://i.ibb.co/dfVqm5T/dinner4.png`,
    },
    {
      id: 4,
      price: 41,
      type: 'dinner',
      foodName: "Chicken à la King",
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/dfVqm5T/dinner4.png`,
      img1: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
      img2: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
    },
    {
      id: 5,
      price: 31,
      type: 'dinner',
      foodName: 'Pizza Margherita',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/3d845tC/dinner5.png`,
      img1: `https://i.ibb.co/dfVqm5T/dinner4.png`,
      img2: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
    },
    {
      id: 6,
      price: 42,
      type: 'dinner',
      foodName: 'Endo Sushi',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
      img1: `https://i.imgur.com/QLqCgHO.png`,
      img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
    },
    {
      id: 7,
      price: 21,
      foodName: 'Machacado con huevo',
      type: 'lunch',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/Tqd17Yb/lunch1.png`,
      img1: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
      img2: `https://i.imgur.com/QLqCgHO.png`,
    },
    {
      id: 8,
      price: 87,
      foodName: 'Onion fry with mango',
      type: 'lunch',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/wdFVk0w/lunch2.png`,
      img1: `https://i.ibb.co/Xj8vpTB/dinner6.png`,
      img2: `https://i.imgur.com/QLqCgHO.png`,
    },
    {
      id: 9,
      price: 61,
      foodName: 'Egg fry with Rice',
      type: 'lunch',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/kGW6XwG/lunch3.png`,
      img1: `https://i.imgur.com/QLqCgHO.png`,
      img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
    },
    {
      id: 10,
      price: 41,
      foodName: 'Seafood - The best See food',
      type: 'lunch',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/1GDJLrP/lunch4.png`,
      img1: `https://i.imgur.com/QLqCgHO.png`,
      img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
    },
    {
      id: 11,
      price: 31,
      foodName: ' made Sushi',
      type: 'lunch',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.imgur.com/OKsCdMg.png`,
      img1: `https://i.imgur.com/QLqCgHO.png`,
      img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
    },
    {
      id: 12,
      price: 42,
      foodName: 'Made in Bangladeshi Food',
      type: 'lunch',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      description: 'Lorem ipsum dolor sit amet',
      img: `https://i.imgur.com/QLqCgHO.png`,
      img1: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
      img2: `https://i.ibb.co/T4BtxP2/breakfast2.png`,
    },
    {
      id: 13,
      price: 17,
      foodName: 'Black Forest gateau',
      type: 'breakfast',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
      img1: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
      img2: `https://i.ibb.co/c6zT3sz/breakfast4.png`,
    },
    {
      id: 14,
      price: 32,
      foodName: 'Cherpumple',
      type: 'breakfast',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/T4BtxP2/breakfast2.png`,
      img1: `https://i.ibb.co/GPJnCz7/dinner1.png`,
      img2: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
    },
    {
      id: 15,
      price: 21,
      foodName: 'Bistecca alla fiorentina',
      type: 'breakfast',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/kKd3YbL/breakfast3.png`,
      img1: `https://i.ibb.co/LktFB4R/breakfast6.png`,
      img2: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
    },
    {
      id: 16,
      price: 91,
      foodName: 'Bistec de Palomilla',
      type: 'breakfast',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/c6zT3sz/breakfast4.png`,
      img1: `https://i.imgur.com/QLqCgHO.png`,
      img2: `https://i.ibb.co/yQVmNjC/breakfast1.png`,
    },
    {
      id: 17,
      price: 71,
      foodName: 'Lobster Newburg',
      type: 'breakfast',
      description: 'Lorem ipsum dolor sit amet', details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
      img1: `https://i.ibb.co/GPJnCz7/dinner1.png`,
      img2: `https://i.ibb.co/w6ZMTZr/dinner3.png`,
    },
    {
      id: 18,
      price: 121,
      foodName: 'Boeuf à la mode',
      type: 'breakfast',
      description: 'Lorem ipsum dolor sit amet',
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt ullam odio at velit iste explicabo aliquam iusto repellendus doloribus aut!",
      img: `https://i.ibb.co/LktFB4R/breakfast6.png`,
      img1: `https://i.ibb.co/2q3VHRc/breakfast5.png`,
      img2: `https://i.ibb.co/c6zT3sz/breakfast4.png`,
    },
  ]
const PaymentAndDetails = () => {
    const [count, setCount] = useState(0)

    const history = useHistory();
  const goToPayments = ()=> {
    const url = `/payment`
    history.push(url);
  }

    const { id, price  } = useParams();
  

  const  newData = dinnerFakeData.find((tr) => tr.id == id)
  // console.log(newData.foodName)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5001/userData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        alert('Are you sure to send data')
        goToPayments()
      
       
      })
  }
  return (
    <div>
      <div style={{ overflowX: 'hidden' }}>

        <div className="container">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">
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
                <Nav.Link onClick={handleShow}>
                
                  <i
                    class="fa fa-shopping-cart"
                    style={{ fontSize: '36px' }}
                  ></i> <sup> <b style={{ fontSize: '30px',color:"red" }}>{count  + price/newData.price}</b> </sup>
                </Nav.Link>
                <Nav.Link style={{ color: 'black' }} href="/registration">
                  <b style={{ color: 'black' }}>Log In</b>
                </Nav.Link>
                <Nav.Link style={{ color: 'black' }} href="/newOrganization">
                  <b style={{ color: 'black' }}>Sign up</b>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Middle />
        
      <div className="container-fluid">
      <div style={{border:"1px solid gray"}} className="d-flex justify-content-center m-1">
        <Card
            style={{
            
              border:"none" 
            }}
          >
            
              <Card.Body>
                <div className="d-flex justify-content-center">
                <div>
                <h2>{newData.foodName}</h2>
                <h4>${newData.price}</h4>
                <Card.Text>{newData.details}</Card.Text>
                </div>
               <div>
               <Card.Img
                style={{ height: '8rem', width: '8rem' }}
                src={newData.img}/>
               </div>
              </div>



                <div  className="d-flex">
                  <h4>${(newData.price)*count}</h4>

                   <div  style={{height:"2rem", width:"6rem" , border:"1px solid gray" ,borderRadius:"1rem", marginLeft:"1rem"}} className="d-flex p-1">

                   <i style={{marginLeft:"1rem", marginLeft:"1rem"}} class='fas fa-minus' onClick={() => 
                 setCount(count - 1)
                
                } style={{fontSize:"20px"}}></i>

                   <b style={{marginLeft:"1rem"}}>{count}</b>

                  <i  class='fas fa-plus' onClick={() => setCount(count + 1)} style={{fontSize:"20px", marginLeft:"1rem"}}></i>
                   </div>
                </div>

                <br/> <br/>

                <div>
              
                <b>Previous items: {price/newData.price}</b> <br/>
                <b>New items: {count}</b> <br/>
                <b>Total items: {count  + price/newData.price}  </b> <br/>
                <b>Price per items: {newData.price}</b> <br/>
                 <b style={{color:"red"}}>Tax: 15% </b> <br/>
                 <b style={{color:"red"}}>Delivery charge: 4% </b> <br/>

                <h4 style={{fontWeight:"bold"}}>Total Price: {((((newData.price) * (count  + price/newData.price))) + (19/100) * (((newData.price) * (count  + price/newData.price)))).toFixed(0) }
                </h4> <br/>

                    
                </div>

                
              </Card.Body>
            <div className="d-flex">
            <Card.Img
                style={{ height: '5rem', width: '5rem' }}
                src={newData.img1}
              />
              <Card.Img
                style={{ height: '5rem', width: '5rem' }}
                src={newData.img2}
              />
              <Card.Img
                style={{ height: '5rem', width: '5rem' }}
                src={newData.img1}
              />
            </div>
            <Button variant="primary" onClick={handleShow}>
        Pay Now
      </Button>
          </Card>
        
        </div>
       
      </div>
      </div>
     

      <Modal style={{align:"center"}} show={show} onHide={handleClose}>

          <h1 className="text-center" >Order From</h1>
          
          <form style={{ padding: '2rem' }} onSubmit={ handleSubmit(onSubmit)}>
            <label for="foods"><h3>Your Food(s)</h3></label>
              
              <input
                name="foods"
                ref={register}
                value={newData.foodName}
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
              ></input>
              <br /> <br />
              <label for="totalItems">
              <h3> Total Item(s)</h3>
              </label>
              <input
                value={count  + price/newData.price}
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
                ref={register}
                name="totalItems"
              ></input>
              <br /> <br />
              <label for="price">Total amount with Vat + SD</label>
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
               
                ref={register}
                name="price"
                value={((((newData.price) * (count  + price/newData.price))) + (19/100) * (((newData.price) * (count  + price/newData.price)))).toFixed(0) } 
              ></input>
              <br /> <br /> <br />
              <p>
                <b>Personal Information</b>
              </p>
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                  color: '#09015f',
                  fontStyle: 'bold',
                }}
                name="name"
                ref={register}
                placeholder="Full name"
                required
              />
              <br /> <br />
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="Address"
                ref={register}
                placeholder="Your address"
                required
              />
              <br /> <br />
              
                
             
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="phoneNumber"
                required
                ref={register}
                placeholder="Enter a valid phone number"
              />
              <br /> <br />
              <input
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="detailAddress"
                ref={register}
                required
                placeholder="Please write down the detail address"
              />
               
              <br /> <br />
              <select
                style={{
                  height: '3rem',
                  width: '80%',
                  borderRadius: '5px',
                  border: '1px solid gray',
                }}
                name="category"
                ref={register}
              >
                <option value="">Cheese Layer</option>
                <option value="Thin">Thin</option>
                <option value="Medium">Medium</option>
                <option value="Thick">Thick</option>
              </select>
              <br /> <br />
              <input 
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
          
        
         
        </Modal>
      
    </div>

  )
}

export default PaymentAndDetails
