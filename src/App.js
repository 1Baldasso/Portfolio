import React from 'react';
import Helmet from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';

import './App.css';


function App() { 
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Lucas Baldasso</title>
                <link rel="canonical" href="https://1baldasso-portfolio.vercel.app/" />
      </Helmet>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    
    </div>
  );
}

export default App;