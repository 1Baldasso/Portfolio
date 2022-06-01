import { Component } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProjectList from '../../Components/ProjectList/ProjectList';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import Helmet from 'react-helmet';

import './styles.css';

export default class HomePage extends Component
{
  render(){
  return(
    <>
      <Helmet title='Lucas Baldasso'/>
      <Header/>
      <main className='mainContent'>
        <ProjectList/>
      </main>
      <SocialMedia/>
      <Footer/>
    </>
  );
  }
}