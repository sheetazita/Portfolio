import React from 'react';
import portfolioImg from '../images/portfolioImg.jpg';

export default function About() {
  return (
    <div id="about">
    <div className="border-line"></div>

      <div id="title">
      <h1>A Little Bit About Me</h1>
        <div className="line"></div>
      </div>
        <div className="about-section"> 
          <div className="about-text">
            <p>I am a <span className="bold">Full Stack Software Engineer</span> with a passionating heart and creative mind, who has a strong <span className="bold">graphic design</span> background. I enjoy problem solving and design intuitive, pixel-perfect user interfaces with efficient and modern backends.  I love to challenge myself by creating various application functionalities while maintain nice user experience design.  My passion motivates me to constantly advance myself. 
            <br />When I am not with my computer, I am probably practicing my piano skills, spending time with my dogs, or reading some mind-provoking books.</p>
          </div>
          <div className="portfolioImg-wrap">
            <img className="portfolioImg" src={portfolioImg} />
          </div>
        </div>
    </div>
  )
}
