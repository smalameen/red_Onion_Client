import React from 'react';
import foodFakeData from '../../../foodFakeData';
import   '../Lunch/Lunch.css';
import {Card} from 'react-bootstrap';




const Lunch = () => {
   const lunchFromFake = foodFakeData.slice(0,18);
   const newData = lunchFromFake.filter(fd => fd.category === 'lunch');
   console.log(newData);

    return (
        <div>
              <h1 style={{textAlign:'center', margin: '1rem'}}>Please Select Your Lunch</h1>

       
    <div className="card-design">
        
                

        {   
            newData.map( food => 
               

               
                <Card className= "card-style" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={food.img} />
                <Card.Body>
                  <Card.Title>{food.foodName}</Card.Title>
                  <Card.Text>
                   {food.description}
                  </Card.Text>
                  <h1>${food.price} </h1>
                </Card.Body>
              </Card>

             
               
                
                )
        }
   
           
           
    </div>
    </div>
    );
};

export default Lunch;