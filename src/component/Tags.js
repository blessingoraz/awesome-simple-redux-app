import React from 'react';
import '../App.css';

const Tags = ({ tags }) => {
  return (
    <div className="cardContainer">
      {tags && tags.map((tag, index) => {
        return (
          <div key={index} className="card">
            <p>{tag.title.substring(0, 20)}...</p>
            <img alt="" src={tag.media.m} />
          </div>
        )
      })}
    </div>
  )
};

export default Tags;

