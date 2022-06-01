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
      </div>
      <div className='projectImage'>
        <a href={props.url}><img src={props.image} alt="" className='Image'/></a>
      </div>
      {props.video}
    </div>
  );
}
        