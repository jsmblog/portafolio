import React from 'react'

const Skills = ({frontEnd , backend,mobile , html , css , Js , bootstrap, logoReact , notion , slack , github , nodeJs }) => {
  return (
   <>
   <div className='containerSkills'>
    <div>
        <h2>Skills</h2>
    </div>
    <div>
        <p>In my path as a developer , I have taken skills and a variety of technologies <br /> that allow me to carry out all kinds of projects.</p>
       <div className='imgSkills'>
       <img width={30} src={frontEnd} alt="Frontend" />
        <h4>Front-end</h4>
        <img width={30} src={backend} alt="Backend" />
        <h4>Back-end</h4>
        <img width={30} src={mobile} alt="mobile" />
        <h4>Mobile first</h4>
       </div>
    </div>
   </div>
   <div className='contImgSkills '>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={html} alt="html" />
    <h3>Html</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={css} alt="css" />
    <h3>Css</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={Js} alt="Js" />
    <h3>JavaScript</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={logoReact} alt="logoReact" />
    <h3>React Js</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={nodeJs} alt="nodeJs" />
    <h3>Node Js</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={github} alt="github" />
    <h3>Github</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={bootstrap} alt="bootstrap" />
    <h3>Bootstrap</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={slack} alt="slack" />
    <h3>Slack</h3>
    </div>
    <div className='boxSkills flip-in-ver-right'>
    <img className='wobble-hor-bottom' width={40} src={notion} alt="notion" />
    <h3>Notion</h3>
    </div>
   </div>
   </>
  )
}

export default Skills