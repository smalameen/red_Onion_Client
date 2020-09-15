import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Compnent/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dinner from './Compnent/Header/Dinner/Dinner';
import Breakfast from './Compnent/Header/Breakfast/Breakfast';
import Lunch from './Compnent/Header/Lunch/Lunch';
import Home from './Compnent/Header/Home/Home';

function App() {
  return (
    
      <Router>
         <Header> </Header>
         {/* <Home></Home> */}
      <Switch>
          <Route path="/breakfast">
            <Breakfast/>
          </Route>
          <Route path="/lunch">
            <Lunch/>
          </Route>
          <Route path="/dinner">
            <Dinner />
          </Route>
          <Route path="/">
            <Lunch/>
          </Route>
        </Switch>
      
    </Router>
     
   
  );
}

export default App;
