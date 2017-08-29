import React from 'react';
import './App.css';

const Tags = (props) => (
  <div className="cardContainer">
    {props.tagsData && props.tagsData.map((tag, index) => {
      return (
        <div key={index} className="card">
          <p>{tag.title.substring(0, 20)}...</p>
          <img src={tag.media.m} />
        </div>
      )
    })}
  </div>
);

export default Tags;