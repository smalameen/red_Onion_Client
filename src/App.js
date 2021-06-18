import React, { createContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Compnent/Home/Home'
import PaymentAndDetails from './Compnent/PaymentAndDetails/PaymentAndDetails'
import LogIn from './Compnent/LogIn/LogIn'
import Payments from './Compnent/Payments/Payments'
import PrivateRoute from './Compnent/LogIn/PrivateRoute'

export const UserContext = createContext()
export const PhoneNumber = createContext()

function App() {
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5001/getPhone')
      result.data.map((number) => setPhone(number))
    }
    fetchData()
  }, [])
  const [phone, setPhone] = useState([])
  console.log(phone)
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div style={{ overflowX: 'hidden' }}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <PhoneNumber.Provider value={[phone, setPhone]}>
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/foodDetails/:id/:price">
                <PaymentAndDetails />
              </Route>
              <Route path="/auth">
                <LogIn />
              </Route>
              <PrivateRoute path="/payment">
                <Payments />
              </PrivateRoute>
              <Route exact path="*">
                <Home />
              </Route>
            </Switch>
          </Router>
        </PhoneNumber.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
