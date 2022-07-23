import ListItem from '../ListItem/ListItem';
import { projects } from "./projects";
import './styles.css';  

export default function ProjectList(){
  return(
    <div>
      <h2 className='title'>My Projects</h2>
      <ul className='workList'>
        <li>
          <ListItem title={projects.game1.name} description={projects.game1.description} image={projects.game1.Image} url={projects.game1.url} />
        </li>
        <li>
          <ListItem title={projects.dotNetProject.name} description={projects.dotNetProject.description} image={projects.dotNetProject.Image} url={projects.dotNetProject.url} />
        </li>
        <li>
          <ListItem title={projects.game2.name} description={projects.game2.description} image={projects.game2.Image} url={projects.game2.url} order="imageFirst" />
        </li>
        <li>
          <ListItem title={projects.game3.name} description={projects.game3.description} image={projects.game3.Image} url={projects.game3.url} />
        </li>
        <li>
          <ListItem title={projects.VBAProject.name} description={projects.VBAProject.description} video={projects.VBAProject.Video} url={projects.VBAProject.url} order="imageFirst" />
        </li>
        {/*<li>
          <ListItem title={projects.SBGamesProject.name} description={projects.SBGamesProject.description} image={projects.SBGamesProject.Image} />
        </li>*/}
      </ul>
    </div>
  );
}