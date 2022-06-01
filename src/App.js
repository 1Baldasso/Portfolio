import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';

import './App.css';


function App() { 
  return (
    document.title="Lucas Baldasso",
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    
    </div>
  );
}

export default App;