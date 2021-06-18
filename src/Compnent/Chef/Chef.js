import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const Chef = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0]
    setFile(newFile)
  }

  const [info, setInfo] = useState({})
  console.log(info)
  const handleBlur = (e) => {
    const newInfo = { ...info }
    newInfo[e.target.name] = e.target.value
    setInfo(newInfo)
  }

  const handleSubmit = () => {
    const formData = new FormData()

    formData.append('file', file)
    formData.append('name', info.name)
    formData.append('realName', info.realName)
    formData.append('email', info.email)
    formData.append('foodName', info.foodName)

    fetch('http://localhost:5001/addChef', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error(error)
      })
  }
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <h2 className="text-center">
        Are you A
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleShow}>
          Chef?
        </span>
      </h2>
      <Modal show={show} onHide={handleClose}>
        <h3 className="text-center mt-2">Chef registration form</h3>
        <form style={{ padding: '2rem' }} onSubmit={handleSubmit}>
          <div className="form-group">
            <b>Chef name and Experience</b>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="realName"
              placeholder="Enter name and Ep."
            />
            <b>Email address</b>
            <input
              onBlur={handleBlur}
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
            />
              <div className="form-group">
            <b>Food name</b>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="foodName"
              placeholder="Please enter food name Food name"
            />
          </div>
          </div>
          <div className="form-group">
            <b>Food Description and Food name</b>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Food Description within 4-5 sentences"
            />
          </div>
        


          <div className="form-group">
            <b>Upload an image of the food</b>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              name="file"
              placeholder="Upload a banner"
            />
          </div>
          <button
            style={{
              height: '3rem',
              width: '8rem',
              borderRadius: '20px',
              border: '1px solid #FA1E0E',
              backgroundColor: '#FA1E0E',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'transform 80ms ease-in',
            }}
            type="submit"
           
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default Chef
