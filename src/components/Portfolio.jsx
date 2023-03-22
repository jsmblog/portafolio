import React from 'react'

const Portfolio = ({logoPortfolio,mockupOne,linkToSite,mockupTwo,mockupThird,mockupFourth,mockupFiveth,mockupSixth}) => {
  return (
    <div>
        <div className='portfolio'>
        <h2>Portfolio</h2>
        <img width={35} src={logoPortfolio} alt="" />
        </div>
        <div >
        <div className='contPortfolio'>
            <div className='contMockup '><img className='mockupPortfolio blink-2' src={mockupOne} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Test page
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis voluptatem temporibus exercitationem reiciendis <br /> quis asperiores officiis possimus amet beatae dolores!</p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://portafolio-gen22.netlify.app/" target="_blank"> <button>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup contMockupOrder '><img className='mockupPortfolio blink-2' src={mockupTwo} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Dating app
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis voluptatem temporibus exercitationem reiciendis <br /> quis asperiores officiis possimus amet beatae dolores!</p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://app-quote.netlify.app/" target="_blank"> <button>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup '><img className='mockupPortfolio blink-2' src={mockupThird} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Rick and Morty
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis voluptatem temporibus exercitationem reiciendis <br /> quis asperiores officiis possimus amet beatae dolores!</p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://rick-and-morty-joel.netlify.app/" target="_blank"> <button>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup contMockupOrder '><img className='mockupPortfolio blink-2' src={mockupFourth} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Makeup website
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis voluptatem temporibus exercitationem reiciendis <br /> quis asperiores officiis possimus amet beatae dolores!</p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://maquillaje-web.netlify.app/" target="_blank"> <button>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup'><img className='mockupPortfolio blink-2' src={mockupFiveth} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                App Pokedex
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis voluptatem temporibus exercitationem reiciendis <br /> quis asperiores officiis possimus amet beatae dolores!</p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://pokedex-joel.netlify.app/" target="_blank"> <button>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup contMockupOrder '><img className='mockupPortfolio blink-2' src={mockupSixth} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Weather app
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Omnis voluptatem temporibus exercitationem reiciendis <br /> quis asperiores officiis possimus amet beatae dolores!</p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://app-clima-joel.netlify.app/" target="_blank"> <button>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Portfolio