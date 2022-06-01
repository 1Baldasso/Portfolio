import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProjectList from '../../Components/ProjectList/ProjectList';

import './styles.css';

export default function HomePage()
{
  return(
    <>
      <Header/>
      <main className='mainContent'>
        <ProjectList/>
      </main>
      <Footer/>
    </>
  );
}