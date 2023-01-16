import ListItem from '../ListItem/ListItem';
import { projects } from "./projects";
import './styles.css';  

export default function ProjectList(){
  return(
    <div>
      <h2 className='title'>My Projects</h2>
      <ul className='workList'>
        <li>
          <ListItem title={projects['LoR-Prototiper'].name} description={projects['LoR-Prototiper'].description} image={projects['LoR-Prototiper'].Image} url={projects['LoR-Prototiper'].url} date={projects['LoR-Prototiper'].Project_Date} order="imageFirst" />
        </li>
        <li>
          <ListItem title={projects.game1.name} description={projects.game1.description} image={projects.game1.Image} url={projects.game1.url} date={projects.game1.Project_Date}/>
        </li>
        <li>
          <ListItem title={projects.dotNetProject.name} description={projects.dotNetProject.description} image={projects.dotNetProject.Image} url={projects.dotNetProject.url} date={projects.dotNetProject.Project_Date} order="imageFirst"/>
        </li>
        <li>
          <ListItem title={projects.game2.name} description={projects.game2.description} image={projects.game2.Image} url={projects.game2.url} date={projects.game2.Project_Date} />
        </li>
        <li>
          <ListItem title={projects.game3.name} description={projects.game3.description} image={projects.game3.Image} url={projects.game3.url} date={projects.game3.Project_Date} order="imageFirst" />
        </li>
        <li>
          <ListItem title={projects.VBAProject.name} description={projects.VBAProject.description} video={projects.VBAProject.Video} url={projects.VBAProject.url} date={projects.VBAProject.Project_Date} />
        </li>
      </ul>
    </div>
  );
}