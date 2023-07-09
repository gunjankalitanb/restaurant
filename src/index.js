import React from 'react';
import {createRoot} from 'react-dom/client';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Footer from './routes/Footer';
import Menu from './routes/Menu';


import './routes/Styles.css';
import Navbar from './routes/Navbar';

const root = createRoot(document.getElementById('root'));
root.render(

  
 <BrowserRouter>

 <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/Signup" element={<Signup />} /> */}
       
      </Routes>
      <Footer />
    </BrowserRouter>
 

);













// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
