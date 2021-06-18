import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from "../Header/Footer"
import Chef from '../Chef/Chef';
import ShowChefs from '../Chef/ShowChefs';

const Home = () => {
    return (
        <div>
          <Header/>
          <Chef/>
          <ShowChefs/>
          <Services/>
          <Footer/>
        </div>
    );
};

export default Home;