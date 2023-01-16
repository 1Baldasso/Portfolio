import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import Email from '../../Assets/Images/Email.png';
import WhatsApp from '../../Assets/Images/WhatsAppWhite.png';
import Twitter from '../../Assets/Images/Twitter.png';
import Home from '../../Assets/Images/Home.png';
import './styles.css';

export default function ContactPage()
{
  return(
    <>
      <Header/>
      <main className='mainContent'>
        <h2>
          Contact
        </h2>
        <ul>
          <li className='Item'>
            <img className='EmailImage' src={Email} alt=''/>
            <p>
              engs-lucasbaldasso@camporeal.edu.br
            </p>
          </li>
          <a className='PhoneNumber' href='https://wa.me/5542998029837' target='_blank' rel='noreferrer noopener'>
            <li className='Item'>
              <img className='WhatsAppImage' src={WhatsApp} alt=''/>
              <p>
                +55 42 99802-9837
              </p>
            </li>
          </a>
          <a className='Twitter' href='https://twitter.com/1baldasso' target='_blank' rel='noreferrer noopener'>
            <li className='Item'>
              <img className='TwitterImage' src={Twitter} alt=''/>
              <p>
                @1Baldasso
              </p>
            </li>
          </a>
          <li className='Item'>
              <img className='HomeImage' src={Home} alt=''/>
              <p>
                Rua Brigadeiro Rocha, 06 - Trianon <br/>
                Guarapuava - Paraná / Brasil
              </p>
            </li>
        </ul>
      </main>
      <SocialMedia/>
      <Footer/>
    </>
  );
}