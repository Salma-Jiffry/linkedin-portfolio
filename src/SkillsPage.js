import React from 'react'
import java from '../src/images/java.png'
import net from '../src/images/net-removebg.png'
import git from '../src/images/github.png'
import react from '../src/images/react.png'
import sql from '../src/images/sql.png'
import html from '../src/images/html5.png'
import css from '../src/images/css.png'
import js from '../src/images/javascript.png'
import boost from '../src/images/boostrap.png'
import php from '../src/images/php.png'
import python from '../src/images/python.png'

const SkillsPage = () => {
  return (
    <div className='skillspage' id='4'>
        <div className='skillheading'>
            My Skills
        </div>
        <div className='skills-container'>
            <div className='skill-card'>
              <img src={java} alt='Java' />
              <div className='skill-name'>Java</div>
            </div>
            <div className='skill-card'>
              <img src={net} alt='.NET' />
              <div className='skill-name'>.NET Framework</div>
            </div>
            <div className='skill-card'>
              <img src={git} alt='Git' />
              <div className='skill-name'>Github</div>
            </div>
            <div className='skill-card'>
              <img src={react} alt='React' />
              <div className='skill-name'>React</div>
            </div>
            <div className='skill-card'>
              <img src={sql} alt='SQL' />
              <div className='skill-name'>SQL</div>
            </div>
            <div className='skill-card'>
              <img src={html} alt='HTML' />
              <div className='skill-name'>HTML</div>
            </div>
            <div className='skill-card'>
              <img src={css} alt='CSS' />
              <div className='skill-name'>CSS</div>
            </div>
            <div className='skill-card'>
              <img src={js} alt='JavaScript' />
              <div className='skill-name'>JavaScript</div>
            </div>
            <div className='skill-card'>
              <img src={boost} alt='Bootstrap' />
              <div className='skill-name'>Bootstrap</div>
            </div>
            <div className='skill-card'>
              <img src={php} alt='PHP' />
              <div className='skill-name'>PHP</div>
            </div>
            <div className='skill-card'>
              <img src={python} alt='Python' /> 
              <div className='skill-name'>Python</div>
            </div>
        </div>
    </div>
  )
}

export default SkillsPage