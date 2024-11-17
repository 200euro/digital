import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Build from './Components/Build/Build';
import Companies from './Components/Companies/Companies';
import Branding from './Components/Branding/Branding';
import Custome from './Components/Custome/Custome';
import People from './Components/People/People';
import Compukter from './Components/Compukter/Compukter';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Testimional from './Pages/About/Testimional/Testimional';
import Contacts from './Pages/About/Contacts/Contacts';
import Home from './Pages/About/Home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home/>}/> 
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Testimional" element={<Testimional />} />
      </Routes>

      <Header />
      <Build />
      <Companies />
      <Branding
        name="Branding & Design systemmmmm"
        image="/manwomankarandash.png"
      />
      <Custome
        name="SOOOOOON"
        image="https://usagif.com/wp-content/uploads/loading-96.gif"
      />
      <People />
      <Compukter />
      <Footer />
    </>
  );
};

export default App;
