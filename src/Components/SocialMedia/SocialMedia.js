import React, { Component } from 'react';
import GitHub from '../../Assets/Images/GitHubWhite.png';
import LinkedIn from '../../Assets/Images/LinkedIn.png';
import Portfolio from '../../Assets/Images/Portfolio.png';
import Instagram from '../../Assets/Images/Instagram.png';
import './styles.css';

export default class SocialMedia extends Component {
  render() {
    return (
      <div className='Social'>
        <a href='https://github.com/1baldasso' target='_blank' rel='noreferrer noopener'><img className='Icon' src={GitHub} alt=''/></a>
        <a href='https://www.linkedin.com/in/lucas-baldasso-b65255213/' target='_blank' rel='noreferrer noopener'><img className='Icon' src={LinkedIn} alt=''/></a>
        <a href='https://drive.google.com/drive/folders/1nNxxqsLTDqfL11Fmm88uS64LCcUeIOmS?usp=sharing' target='_blank' rel='noreferrer noopener'><img className='Icon' src={Portfolio} alt=''/></a>
        <a href='https://www.instagram.com/lucasbaldassoo/' target='_blank' rel='noreferrer noopener'><img className='Icon' src={Instagram} alt=''/></a>
      </div>
    )
  }
}
