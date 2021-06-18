import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import header from '../Header/bannerbackground.png'

const Middle = () => {
  return (
    <div 
      class="header"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0) ), url(${header})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'auto',
        width: '100%',
        height: "20rem",
        overflowX:"hidden"
      }}
    >
      <div className="align-center-center container">
        
          <h1 style={{ color: 'black', textAlign: 'center' }}>
            The best Food is waiting for your belly!!
          </h1>
          {/* <div className="container d-flex justify-content-center mt-5">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
          </div> */}
        
      </div>
    </div>
  )
}

export default Middle
