import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import Tress from '../../Assets/Images/Trees.PNG';
import './styles.css';


export default function AboutPage()
{
  return(
    <>
    <Header/>
      <main className='mainContent'>
        <div className='profile'>
          <h3 className='Title'>
            Profile
          </h3>
          <p className='profileText'>
            I’m 23, studying my third period of Software Engineering.
            I am looking for experiences that make me grow as a professional but also as a person.
            Challenges and new knowledge are what moves me.
            My biggest objective is to improve myself as I improve place I am working on.
            People tend to like me since I love to discuss alternatives and to share knowledge to help with their tasks
          </p>
          <img className='Tree' src={Tress} alt=''/>
          <p className='photoDescription'>
            Photo By Lucas Baldasso
          </p>
        </div>
        <div className='columnContent'>
          <h3 className='Title'>
            Education
          </h3>
          <ul>
          <li>
              <h4 className='subtitle'>
                SESI High School/SENAI Technical School (Industrial Automation)
              </h4>
            </li>
            <li>
              <h4 className='subtitle'>
                Centro Universitário Campo Real (Software Engineering)
              </h4>
            </li>
          </ul>
          <h3 className='Title'>
            Skills
          </h3>
          <ul>
          <li>
              <h4 className='item-subtitle'>
                Programming Languages:
              </h4>
              <p className='itens'>
                C/C++/C#
              </p>
              <p className='itens'>
                HTML/CSS
              </p>
              <p className='itens'>
                Javascript/Typescript
              </p>
              <p className='itens'>
                VB/VBA
              </p>
              <p className='itens'>
                Lua for Roblox
              </p>
              <p className='itens'>
                Postgres SQL
              </p>
            </li>
            <li>
              <h4 className='item-subtitle'>
                Frameworks
              </h4>
              <p className='itens'>
                React/React Native
              </p>
              <p className='itens'>
                .NET
              </p>
            </li>
            <li>
              <h4 className='item-subtitle'>
                Tools
              </h4>
              <p className='itens'>
                Unity
              </p>
              <p className='itens'>
                Visual Studio
              </p>
              <p className='itens'>
                Roblox Studio
              </p>             
            </li>
            <li>
              <h4 className='item-subtitle'>
                Soft Skills
              </h4>
              <p className='itens'>
                Problem Solving
              </p>
              <p className='itens'>
                Communication
              </p>
              <p className='itens'>
                People Management
              </p>
              <p className='itens'>
                Creativity
              </p>
              <p className='itens'>
                Multiskilled
              </p>
            </li>
          </ul>
        </div>
        
      </main>
    <SocialMedia/>
    <Footer/>
    </>
  );
}