import React from 'react'

const NavBar = ({logoJoel}) => {
  return (
    <div>
        <nav className='navBar'>
            <div className='contentNavBar'>
                <div className='nameMe'>
                <img className='imgLogo' src={logoJoel} alt="LogoJoel" />
                <h2>J S M</h2>
                </div>
                <div className='LinksNavBar'>
                    <ul>
                        <li><span>{"<"}</span> About myself <span>{"/>"}</span></li>
                    </ul>
                    <ul>
                        <li>Skills</li>
                    </ul>
                    <ul>
                        <li>Portfolio</li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar