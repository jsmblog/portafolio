import React from 'react'

const Portfolio = ({logoPortfolio,mockupOne,linkToSite,mockupTwo,mockupThird,mockupFourth,mockupFiveth,mockupSixth ,mockupSeven , mockupEight}) => {
  return (
    <div>
        <div className='portfolio'>
        <h2>Portfolio</h2>
        <img width={35} src={logoPortfolio} alt="" />
        </div>
        <div >
        <div className='contPortfolio'>
            <div className='contMockup '><img className='mockupPortfolio ' src={mockupOne} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Test page
                </h2>
                <p>I made this project to practice html and css . It's simple but fun. <br /></p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://portafolio-gen22.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup contMockupOrder '><img className='mockupPortfolio ' src={mockupTwo} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Dating app
                </h2>
                <p>Let words transform your day. Explore our phrases page and discover the magic of words that inspire, motivate and uplift your spirit.<br /></p>
                </div>
                <div className='btnLink '>
                    <a  href="https://app-quote.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup '><img className='mockupPortfolio ' src={mockupThird} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Rick and Morty
                </h2>
                <p> Immerse yourself in the cosmic mayhem of Rick and Morty on our website. Discover exclusive content and unleash your interdimensional side!<br /> <br /></p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://rick-and-morty-joel.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup contMockupOrder '><img className='mockupPortfolio ' src={mockupFourth} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Makeup website
                </h2>
                <p> Unleash your creativity and transform your appearance with our makeup website. Discover trends, tutorials and essential products.<br /> </p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://maquillaje-web.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup'><img className='mockupPortfolio ' src={mockupFiveth} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                App Pokedex
                </h2>
                <p> Are you ready to be a Pokémon Master? Discover our website and immerse yourself in the fascinating world of Pokémon battles, trades and adventures.<br /> </p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://pokedex-joel.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup contMockupOrder '><img className='mockupPortfolio ' src={mockupSixth} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Weather app
                </h2>
                <p>Discover how our weather app will keep you informed and prepared for any weather condition. Try it right now. <br /> </p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://app-clima-joel.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio'>
            <div className='contMockup '><img className='mockupPortfolio ' src={mockupSeven} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Cpp website
                </h2>
                <p>Learn the programming language c++.<br /></p>
                </div>
                <div className='btnLink pulsate-fwd'>
                    <a  href="https://cpp-language.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        <div className='contPortfolio '>
            <div className='contMockup contMockupOrder '><img className='mockupPortfolio ' src={mockupEight} alt="mockupOne" /></div>
            <div >
                <div className='infoProjects'>
                <h2>
                Espam University
                </h2>
                <p>Replicate my university website. This is the original site → <a className='Colink' href="http://www.espam.edu.ec/inicio.aspx" target="_blank" rel="noopener noreferrer">Espam Mfl</a><br /></p>
                </div>
                <div className='btnLink '>
                    <a  href="https://espam-mfl.netlify.app/" target="_blank"> <button className='blink-2'>Go to site <img src= {linkToSite} width={20} alt="" /> </button></a>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Portfolio