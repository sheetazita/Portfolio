import React from 'react';
import downArrow from '../images/downarrow.png'

export default function Header() {
  return (
    <header>
      <nav>
      <div className="nav-gradient"></div>
        <ul id="menu">
          <a href="nav"><li>Intro</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#works"><li>Works</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
{/* ------------------------------------------------ */}
    {/* <div id="hamburger">
      <div className="burger-line-wrapper">  
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
          
        <ul id="burgerMenu">
          <a href="nav"><li>Intro</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#works"><li>Works</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>
      </div> */}
{/* ----------------------------------------------- */}

      </nav>
      <div className="gradient"></div>
      <div className="greeting">
        <p>Hi, I am</p>
        <h1>Zita Zhang</h1>
        <p>Full Stack Software Engineer</p>
        <a href="#about"><img className="downArrow" src={downArrow} /></a>
      </div>
    </header>
  )
}
