import React, { useEffect, useState } from 'react'
import ShowFetchedChefs from './ShowFetchedChefs'
const ShowChefs = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5001/newChef')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  
  return (
    <div className="container">
      
     
      <div className="text-center m-3">
      {
        data.length === 0 && <i class="fa fa-spinner fa-spin" style={{fontSize:"44px"}}></i>
      }
      </div>
     <div className="row d-flex justify-content-center">
     {data.map((orgs) => (
        <ShowFetchedChefs key={orgs._id} orgs={orgs} />
      ))}
     </div>
    </div>
  )
}

export default ShowChefs;