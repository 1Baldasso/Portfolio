import React from 'react';
import './styles.css';

export default function ListItem(props)
{
  return(
    <div className={props.order==="imageFirst"? 'projectBlockIF' : 'projectBlockTF'}>
      <div className='projectDescription'>
        <h2>
          {props.title}
        </h2>
        <p>
          {props.description}
        </p>
        <p>
          {props.date}
        </p>
      </div>
      <div className={props.order==="imageFirst"? 'ProjectImageIF' : 'ProjectImageTF'}>
        <a href={props.url} target='_blank' rel='noreferrer noopener'><img src={props.image} alt="" className='Image'/></a>
      </div>
      {props.video}
    </div>
  );
}
        