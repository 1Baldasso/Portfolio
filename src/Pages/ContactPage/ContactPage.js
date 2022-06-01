import './styles.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

export default function ContactPage()
{
  return(
    <>
      <Header/>
      <main>
        <h3>
          CONTATO
        </h3>
      </main>
      <SocialMedia/>
      <Footer/>
    </>
  );
}