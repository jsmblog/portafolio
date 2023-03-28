import React, { useState } from 'react'

const NavBar = ({logoJoel,menuHamburguer }) => {

    const [isOn, setIsOn] = useState(false)  
    const handleOn = () => {
    setIsOn(!isOn)
    }

    const isOnMenu = (isOn) ? "menuList positionFixed slide-in-elliptic-bottom-fwd": ""
  return (
    <>
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
                <div>
                    <img onClick={handleOn} className='menuHamburguer blink-2' width={50} src={menuHamburguer} alt="" />
                </div>
            </div>
        </nav>
    </div>
    <div className={`${isOnMenu}`}>
        <div><a href="#"><span>About myself </span></a></div>
        <div><a href="#"><span>Skills</span></a></div>
        <div><a href="#"><span>Portfolio</span></a></div>
    </div>
    </>
  )
}

export default NavBar