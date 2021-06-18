import React, { useState } from 'react'
import {  Card } from 'react-bootstrap'
import '../Header/Header.css'
import FoodDetails from './FoodDetails'

const ShowFoods = ({ foods }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="col-md-4 justify-content-around container mb-5 card-design">
      <Card
        onClick={handleShow}
        style={{
          width: '18rem',
          margin: '2rem',
          border: 'none',
          active: 'red',
        }}
      >
        <Card.Img variant="top" src={foods.img} />
        <Card.Body>
          <Card.Title>{foods.foodName}</Card.Title>
          <Card.Text>{foods.description}</Card.Text>
          <h1>${foods.price} </h1>
        </Card.Body>
      </Card>
      <FoodDetails handleClose={handleClose} show={show} foods={foods} />
    </div>
  )
}

export default ShowFoods;
