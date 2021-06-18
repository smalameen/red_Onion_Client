import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router'

const FoodDetails = ({ handleClose, show, foods }) => {
  const [count, setCount] = useState(1)
  const history = useHistory();
  const goToFoodDetails = ()=> {
    const url = `/foodDetails/${foods.id}/${(foods.price)*count}`
    history.push(url);
  }
  return (
    <div>
      <Modal  show={show} onHide={handleClose}>
          <h3 className="text-center mt-3">Please select see food details</h3>
      
        <Modal.Body className="align-self-center">
          <Card
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <div className="d-flex align-items-center">
              <Card.Body>
                <h2>{foods.foodName}</h2>
                <Card.Text>{foods.details}</Card.Text>
                <div  className="d-flex">

                  <h4>${(foods.price)*count}</h4>

                   <div  style={{height:"2rem", width:"6rem" , border:"1px solid gray" ,borderRadius:"1rem", marginLeft:"1rem"}} className="d-flex p-1">

                   <i style={{marginLeft:"1rem", marginLeft:"1rem"}} class='fas fa-minus' onClick={() => 
                count !== 1 && setCount(count - 1)
                
                } style={{fontSize:"20px"}}></i>

                   <b style={{marginLeft:"1rem"}}>{count}</b>

                  <i  class='fas fa-plus' onClick={() => setCount(count + 1)} style={{fontSize:"20px", marginLeft:"1rem"}}></i>
                   </div>
                </div>
              </Card.Body>
              <Card.Img
                style={{ height: '10rem', width: '10rem' }}
                src={foods.img}
              />

            </div>


            <div onClick={() => goToFoodDetails(foods.id,(foods.price)*count )} style={{height:"2rem", width:"6rem" , border:"1px solid gray" ,borderRadius:"1rem", backgroundColor:"#e84545", color:"white", border:"none", marginLeft:"1rem", marginBottom:"2rem", cursor:"pointer"}}>

            <i class='fas fa-shopping-cart'  style={{fontSize:"12px",marginLeft:"1rem", color:"white"}}></i>
            
            
            <b  style={{fontSize:"12px",marginLeft:"1rem", cursor:"pointer"}}>Add</b>
            </div>



            <div className="d-flex">
            <Card.Img
                style={{ height: '5rem', width: '5rem' }}
                src={foods.img1}
              />
              <Card.Img
                style={{ height: '5rem', width: '5rem' }}
                src={foods.img2}
              />
            </div>
          </Card>
         
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default FoodDetails
