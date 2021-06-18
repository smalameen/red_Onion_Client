import React from 'react'
import { Card } from 'react-bootstrap'

const our = []

const Services = () => {
  return (
    <div className="d-flex justify-content-center row">
      <Card
        class="card-design"
        style={{
          width: '18rem',
          margin: '2rem',
          border: 'none',
        }}
      >
        <Card.Img variant="top" src={`https://i.ibb.co/m0GSC4c/adult-blur-blurred-background-687824.png`} />
        <Card.Body>
         
          <Card.Title> <div className="d-flex">
          <i class='fas fa-bus-alt' style={{fontSize:"24px", marginRight:"10px" , color:"red"}}></i>
           <b>Fast Delivery</b> </div> </Card.Title>
          <Card.Text> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique?</p> </Card.Text>
          <div className="d-flex">
          <b>See more </b> <a href="#">  <i class="material-icons">&#xe5c8;</i>  </a>
          </div>
        </Card.Body>
      </Card>
      <Card
        class="card-design"
        style={{
          width: '18rem',
          margin: '2rem',
          border: 'none',
        }}
      >
        <Card.Img variant="top" src={`https://i.ibb.co/r7qtTWn/chef-cook-food-33614.png`} />
        <Card.Body>
         
          <Card.Title> <div className="d-flex">
          <i class='far fa-bell' style={{fontSize:"24px", marginRight:"10px" , color:"red"}}></i>
           <b>Fast Delivery</b> </div> </Card.Title>
          <Card.Text> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique?</p> </Card.Text>
          <div className="d-flex">
          <b>See more </b> <a href="#">  <i class="material-icons">&#xe5c8;</i>  </a>
          </div>
        </Card.Body>
      </Card>

      <Card style={{
          width: '18rem',
          margin: '2rem',
          border: 'none',
        }}>
      <Card.Img variant="top" src={`https://i.ibb.co/BqjHgG4/architecture-building-city-2047397.png`} />
        <Card.Body>
         
          <Card.Title> <div className="d-flex">
          <i class='fas fa-bus-alt' style={{fontSize:"24px", marginRight:"10px" , color:"red"}}></i>
           <b>Fast Delivery</b> </div> </Card.Title>
          <Card.Text> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique?</p> </Card.Text>
          <div className="d-flex">
          <b>See more </b> <a href="#">  <i class="material-icons">&#xe5c8;</i>  </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Services
