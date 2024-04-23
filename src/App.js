// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Slide1 from './Components/Slide1';


function App() {
  return (<div>
  <BrowserRouter>
    <Navbar/>
    <Navbar2/>
    <Slide1/>
  </BrowserRouter>
  </div>
  );
}

export default App;



