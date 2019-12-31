import React from 'react'

export default function Skills() {
  return (
<div id="skills">
      <div className="border-line"></div>
      
      <div id="title">
        <h1>Skills</h1>
        <div className="line"></div>
      </div>

      <div className="skills-section">
          <div className="section-one">
            <p>DEVELOPMENT</p>
            <div className="development-icons">
            <i class="devicon-javascript-plain"><br /><span>Javascript</span></i>
            <i class="devicon-html5-plain"><br /><span>HTML</span></i>
            <i class="devicon-css3-plain"><br /><span>CSS</span></i>
            <i class="devicon-react-original"><br /><span>React</span></i>
            <i class="devicon-express-original"><br /><span>Express</span></i>
            <i class="devicon-ruby-plain"><br /><span>Ruby</span></i>
            <i class="devicon-rails-plain"><br /><span>Ruby on Rails</span></i>
            <i class="devicon-postgresql-plain"><br /><span>PostgreSQL</span></i>
            <i class="devicon-sequelize-plain"><br /><span>Sequelize</span></i>
            <i class="devicon-nodejs-plain"><br /><span>Node.js</span></i>
            <i class="devicon-wordpress-plain"><br /><span>Wordpress</span></i>
            <i class="devicon-github-plain"><br /><span>GitHub</span></i>
            <i class="devicon-git-plain"><br /><span>Git</span></i>

          </div>
        </div>
        
        <div className="section-two">
            <div className="design">
              <p>DESIGN</p>
              <div className="development-icons">
              <i class="devicon-photoshop-plain"><br /><span>Photoshop</span></i>
              <i class="devicon-illustrator-plain"><br /><span>Illustrator</span></i>
            </div>
          </div>
          </div>
      </div>  
</div>
  )
}
