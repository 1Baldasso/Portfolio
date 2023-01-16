import React from 'react';
import ProfilePic from '../../Assets/Images/ProfilePic.jpg'
import './styles.css';

function Header(){
  return(
    <header className="App-header">
    <h1 id='ProfImage'><img src={ProfilePic} className="Profile-Pic" alt="ProfPic"/></h1>
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='about'>About Me</a></li>
        <li><a href='contact'>Contact</a></li>
      </ul>
    </nav>
    <h2 className='Name'>
      Lucas Baldasso
    </h2>
  </header>
  );
}

export default Header;
       