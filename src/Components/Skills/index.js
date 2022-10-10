import React from 'react'
import {Logo} from './Logo'
import './style.css'
export const Skills = () => {

    let techSkills = [
        'html','css','javascript','python','webpack','postgresql','mongodb','node.js','jest',
        'github','git','flask','express','docker','django','redux','react'
    ]
    let techSkillsList = []
    techSkills.forEach((item,index) => {
        techSkillsList.push(
        <Logo
            key={index}
            tech={item}
            path={`/images/skills/${item}.svg`}
        />)
    })

  return (
    <div className="container skills-wrapper rounded p-3">
        <h2>Skills</h2>
        <hr width='100%'></hr>
        <div className="skill-logos">
        {techSkillsList}
        </div>
    </div>

  )
}
