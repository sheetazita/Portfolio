import React from 'react';
// import workBgOne from '../images/workBgOne.jpg';
import dotdotdogOne from '../images/dotdotdogOne.png';
import dotdotdogTwo from '../images/dotdotdogTwo.png';
import spaceechoOne from '../images/spaceechoOne.png';
import spaceechoTwo from '../images/spaceechoTwo.png';
import giftboxOne from '../images/giftboxOne.png';
import giftboxTwo from '../images/giftboxTwo.png';
import sacredsoulyogaOne from '../images/sacredsoulyogaOne.png';
import sacredsoulyogaTwo from '../images/sacredsoulyogaTwo.png';
import goodwordsOne from '../images/goodwordsOne.png';
import goodwordsTwo from '../images/goodwordsTwo.png';

export default function Works() {
  return (
    <div id="works">
    <div className="border-line"></div>
        <div id="title">
          <h1>Works</h1>
          <div className="line"></div>
        </div>
      <div className="dog">
        <h1>Featured Project: Dotdot Dog</h1>
        <a href="https://github.com/sheetazita/dotdogdog-web">
          <i id="github-icon" class="devicon-github-plain"></i>
        </a>
        <a href="http://dotdotdog.surge.sh/" target="_blank">
          <div className="dogimage-wrap">
        <img className="dog-one" src={dotdotdogOne} alt="dog" />
          <img className="dog-two" src={dotdotdogTwo} alt="dog" />
          </div>
        </a>

          <div className="project-info">
          <p>a front-end Javascript and third party API as back-end to generate various dog data so the users will get to know breeds information, dog characteristics with an interesting dog images from drop-down list.</p>
            <div className="icon-lists">
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <p>3rd-Party API</p>
            </div>
          </div>
      </div>
      <div className="border-line-two"></div>
{/* ---------------------------------Space Echo ------------------------------------ */}
      <div className="spaceecho">
        <h1>Featured Project: Space Echo</h1>
        <a href="https://github.com/sheetazita/dotdogdog-web">
          <i id="github-icon" class="devicon-github-plain"></i>
        </a>
        <a href="https://spaceecho.surge.sh/" target="_blank">
          <div className="dogimage-wrap">
        <img className="dog-one" src={spaceechoOne} alt="dog" />
          <img className="dog-two" src={spaceechoTwo} alt="dog" />
          </div>
        </a>

          <div className="project-info">
          <p>a full-stack web application for users to generate daily space photo and get to know daily space weather. This application was built with React for front-end, and a third party API for back-end.</p>
            <div className="icon-lists">
            <i class="devicon-react-original"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <p>3rd-Party API</p>
            </div>
          </div>
      </div>
      <div className="border-line-two"></div>
  {/* ---------------------------------Gift Box ------------------------------------ */}
  <div className="giftbox">
        <h1>Group Project: Gift Box</h1>
        <a href="https://github.com/sheetazita/dotdogdog-web">
          <i id="github-icon" class="devicon-github-plain"></i>
        </a>
        <a href="https://giftbox.surge.sh/" target="_blank">
          <div className="dogimage-wrap">
        <img className="dog-one" src={giftboxOne} alt="dog" />
          <img className="dog-two" src={giftboxTwo} alt="dog" />
          </div>
        </a>

          <div className="project-info">
          <p>application using Express, React, PostgreSQL, javascript. Users can complete all CRUD actions and post gift lists for their love ones.</p>
            <div className="icon-lists">
            <i class="devicon-react-original"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-express-original"></i>
            <i class="devicon-postgresql-plain"></i>
            </div>
          </div>
      </div>
      <div className="border-line-two"></div>
      {/* --------------------------------- Sacred Soul ------------------------------------ */}
  <div className="sacredsoul">
        <h1>Group Project: Sacred Soul Yoga</h1>
        <a href="https://github.com/sheetazita/dotdogdog-web">
          <i id="github-icon" class="devicon-github-plain"></i>
        </a>
        <a href="http://sacredsoulsyoga.surge.sh/" target="_blank">
          <div className="dogimage-wrap">
        <img className="dog-one" src={sacredsoulyogaOne} alt="dog" />
          <img className="dog-two" src={sacredsoulyogaTwo} alt="dog" />
          </div>
        </a>

          <div className="project-info">
          <p>an application using React, javascript, and CSS to rebuild a fitness website.</p>
            <div className="icon-lists">
            <i class="devicon-react-original"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            </div>
          </div>
      </div>
      <div className="border-line-two"></div>
        {/* --------------------------------- Good Words ------------------------------------ */}
  <div className="goodwords">
        <h1>Featured Project: Good Words</h1>
        <a href="https://github.com/sheetazita/Good-Words">
          <i id="github-icon" class="devicon-github-plain"></i>
        </a>
        <a href="https://goodwords.surge.sh/" target="_blank">
          <div className="dogimage-wrap">
        <img className="dog-one" src={goodwordsOne} alt="dog" />
          <img className="dog-two" src={goodwordsTwo} alt="dog" />
          </div>
        </a>

          <div className="project-info">
          <p>web application for users to generate daily, inspiring, encouraging Bible verses about love, hope, and faith. The aim of this application is to have another open resources for people who experience depression or during their difficult times. It also provides resources of gift suggestions for users who need gift ideas to their love ones. Users could create their account and able to log in to view their bookmarked Bible verses.</p>
            <div className="icon-lists">
            <i class="devicon-react-original"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-ruby-plain-wordmark"></i>
            <i class="devicon-rails-plain-wordmark"></i>
            <i class="devicon-postgresql-plain"></i>
            </div>
        </div>
        
      </div>


  </div>
  )
}
