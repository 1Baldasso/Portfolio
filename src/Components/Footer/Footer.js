import React from 'react';
import './styles.css';

export default function Footer(){
  return(
    <footer className='Footer'>
      <div className='Development'>
        <h3>
          Desenvolvido por 
        </h3>
        <h2>
          Lucas Baldasso
        </h2>
      </div>
      <ul>
        <li>Lucas Baldasso</li>
        <li>Software Engineering Student</li>
        <li>Guarapuava - PR / Brazil</li>
      </ul>        
    </footer>
  );
}