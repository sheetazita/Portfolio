import React from 'react';
import portfolioImg from '../images/portfolioImg.jpg';

export default function About() {
  return (
    <div id="about">
      <div className="about-text">
        {/* <h1>Hi I am Zita Zhang</h1> */}
        <p>I am a software engineer transitioned from graphic designer</p>
      </div>
      <img className="portfolioImg" src={portfolioImg}/>
    </div>
  )
}
