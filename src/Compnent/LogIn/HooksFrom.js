import React, {  } from 'react'
import { Link, useHistory } from 'react-router-dom'

const HooksFrom = () => {

    const historyReviews = useHistory();
    const handleOrderButton = () => {
      const url = `/payment`;
      historyReviews.push(url);
    };
 
  return (
    <div>
      <form onSubmit={() => handleOrderButton()}>
        <input
          type="email"
          style={{
            height: '50px',
            width: '100%',
            border: 'none',
            borderRadius: '10px',
            backgroundColor:"whitesmoke"
          }}
          name="emails"
          placeholder="Enter Your email"
        />
        <br /> <br /> 
        <input
          type="number"
          style={{
            height: '50px',
            width: '100%',
            border: 'none',
            borderRadius: '10px',
            backgroundColor:"whitesmoke"
          }}
          name="passes"
          placeholder="Enter Your password"
        />
        <br /> <br /> 
        <input 
          style={{
            height: '50px',
            width: '100%',
            border: 'none',
            borderRadius: '10px',
          }}
          type="submit"
        />
      </form>
    </div>
  )
}

export default HooksFrom