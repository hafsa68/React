import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Nav from './component/Nav';
import Car from './Components/Car';
import Form from './Components/Form';








function App() {
let wheels = 4;
// let carinfo = {brand:"Odi", year:2032, color:"Blue"};
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Nav />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        {/* <Route path="/cars" element={<Car brand = "Ford" wheels={wheels} model="Mustang" color="red" />} /> */}
        {/* <Route path="/cars" element={<Car carinfo={carinfo} />} /> */}
        <Route path="/cars" element={<Car brand="Odi" year="2032" color="Blue" />}/>
        <Route path="/form" element={<Form />} />

      </Routes>
    </BrowserRouter>
  ); 
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



