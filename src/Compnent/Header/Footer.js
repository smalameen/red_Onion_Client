import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Header/logo.png'

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#151515',
          color: 'white',
        }}
      >
        <div className="container">
          <div className="row">
           
              <div className="col-md-3 d-flex">
              <Link style={{ color: 'white' }} to="/home">
                <img
                  style={{ height: '3rem', width: '8rem' }}
                  src={logo}
                  alt=""
                /> 
                </Link>
              </div>
            
           
              <div className="col-md-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit dolorum adipisci assumenda expedita eos asperiores possimus necessitatibus corrupti saepe.
              </div>
              <div className="col-md-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis. Amet, molestiae autem! Nihil hic consequatur dolorum ab voluptas officia!
              </div>
           
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="d-flex  justify-content-start">
              <h6>
                All right reserved by @smalamin
              </h6>
            </div>
            <div className="d-flex justify-content-end">
              <p className="ml-3">Products</p>
              <p className="ml-3">Data</p>
              <p className="ml-3">Foods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
