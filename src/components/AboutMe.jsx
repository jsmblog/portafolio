import React from 'react'

const AboutMe = ({photoProfile,location,email}) => {
  return (
    <>
        <div className='aboutMyself'>
        <div className='contentAboutMyself'>
            <div>
            <h2 className='bounce-in-top'>Developer web Frontend</h2>
            <h1>Joel Saldarriaga Mera</h1>
            <p > I like programming and web development. <br /> I love learning, improving, and honing my <br /> soft and human skills, I specialize in <br /> frontend technologies. Although I am always <br /> willing to explore new languages ​​and tools <br /> for development.</p>
            </div>
            <div className='contPhoto slide-in-blurred-right'>
                <img src={photoProfile} alt="photoProfile" />
            </div>
        </div>
    </div>
    <div className='locationAndEmail'>
        <div className='images'>
            <img className='flicker-3' width={33} src={location} alt="location" />
            <h3>Manabí - Ecuador</h3>
            <img className='flicker-3' width={33} src={email} alt="email" />
            <h3>JSMBlog19@Gmail.com</h3>
        </div>
        <div className='quote '>
            <h2 className='slide-in-blurred-right'>"Technology is a tool to solve problems"</h2>
        </div>
    </div>
    </>
    
  )
}

export default AboutMe