import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
const ShowFetchedChefs = ({ orgs }) => {
  const { name } = useParams()
  const history = useHistory()
  const goToOrgDetails = (activityName) => {
    const url = `registration/${activityName}`
    history.push(url)
  }

  return (
    <div className="container row" >
    <Card style={{ width: '18rem', borderRadius: '1rem' }}>
          <Card.Img
            className="img-fluid"
            src={`data:image/png;base64,${orgs.image.img}`}
          />
          <Card.Body style={{ height: 'auto', textAlign: 'center' }}>
            <Card.Title>
              <small>{orgs.name}</small>
            </Card.Title>
          </Card.Body>
        </Card>
    </div>
  )
}

export default ShowFetchedChefs
