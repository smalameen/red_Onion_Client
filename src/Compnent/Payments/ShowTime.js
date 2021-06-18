import React, { useState,useEffect } from 'react';
import { Card } from 'react-bootstrap';
import motor from "./Group 1151.png"
const ShowTime = ({foods}) => {

const [dt, setDt] = useState(new Date().toLocaleString());

useEffect(() => {
    let secTimer = setInterval( () => {
      setDt(new Date().toLocaleString())
    },1000)

    return () => clearInterval(secTimer);
}, []);
    
    return (
        
      <Card
      style={{
        width: '20rem',
        margin: '2rem',
        active: 'red',
        border:"1px solid gray"
      }}
    >
      <img style={{height:"5rem", width:"5rem", margin:"10px"}} className="img-fluid" src={motor} alt=""/>
      <Card.Body>
        <Card.Text> <li>Your Address: {foods.detailAddress}</li> </Card.Text> <br/>
        <Card.Text> <li>Shop Address: Dhaka 3rd floor</li> </Card.Text>
        <div>
          Estimate time: 20-30 Minutes of confirmation <br/> Real time:  {dt}
         
        </div>
      </Card.Body>
    
    </Card>
    );
};

export default ShowTime;