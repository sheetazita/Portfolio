import React from 'react';
import downArrow from '../images/downarrow.png'

export default function Header() {
  return (
    <header>
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
