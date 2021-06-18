import { PermDataSettingOutlined } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import {PhoneNumber} from "../../App"
import ShowTime from './ShowTime';
const MatchedData = ({foods}) => {

  const[data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    fetch('http://localhost:5001/getUserData')
      .then((res) => res.json())
      .then((data) => setData())
  }, [])

  

    const [phone, setphone] = useContext(PhoneNumber);
    console.log(phone)
    return (
        <div className="container">
            {

                foods.phoneNumber === phone.foods ?
                <div className="row d-flex justify-content-center">
                  <div className="col-md-6 col-sm-12">
                  <Card
                style={{
                  width: '18rem',
                  margin: '2rem',
                  active: 'red',
                  border:"1px solid gray"
                }}
              >
                
                <Card.Body>
                  <Card.Title>{foods.detailAddress}</Card.Title>
                  <Card.Text>  {foods.name}</Card.Text>
                  <Card.Text>Your food: {foods.foods}</Card.Text>
                  <Card.Text> Total item(s): {foods.totalItems}</Card.Text>
                  <h1>${foods.price} </h1>
                </Card.Body>
               <div className="d-flex  justify-content-center">
               <button className="btn btn-outline-danger">Bkash</button>
                <button className="btn btn-outline-info">Rocket</button>
                <button className="btn btn-outline-danger">Nagad</button>
               </div>

              </Card>
                  </div>
              <div className="col-md-6 col-sm-12">
              <ShowTime foods={foods}></ShowTime>
              </div>

                </div>
                
              
              :
              console.log(null)
            }
            
            
        </div>
    );
};

export default MatchedData;