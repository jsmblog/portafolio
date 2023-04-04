import './App.css'
import NavBar from './components/NavBar'
import logoJoel from './assets/photos/logoJoel.png'
import AboutMe from './components/AboutMe'
import photoProfile from './assets/photos/photoProfile.jpg'
import location from './assets/photos/mapa.png'
import email from './assets/photos/gmail.png'
import Skills from './components/Skills'
import frontEnd from './assets/photos/frontend.png'
import backend from './assets/photos/backend.png'
import mobile from './assets/photos/smartphone.png'
import html from './assets/photos/html-5.png'
import css from './assets/photos/css-3.png'
import logoReact from './assets/photos/react.png'
import bootstrap from './assets/photos/bootstrap.png'
import Js from './assets/photos/js.png'
import github from './assets/photos/github.png'
import nodeJs from './assets/photos/node-js.png'
import slack from './assets/photos/slack.png'
import notion from './assets/photos/notion.png'
import Portfolio from './components/Portfolio'
import logoPortfolio from './assets/photos/portafolio.png'
import mockupOne from './assets/photos/mockupOne.png'
import mockupTwo from './assets/photos/mockupTwo.png'
import mockupThird from './assets/photos/mockupThird.png'
import mockupFourth from './assets/photos/mockupFourth.png'
import mockupFiveth from './assets/photos/mockupFiveth.png'
import mockupSixth from './assets/photos/mockupSixth.png'
import linkedin from './assets/photos/linkedin.png'
import linkToSite from './assets/photos/enlace-roto.png'
import whatsapp from './assets/photos/whatsapp.png'
import llamada from './assets/photos/llamada.png'
import ContactMe from './components/ContactMe'
import logoContactMe from './assets/photos/contactMe.png'
import menuHamburguer from './assets/photos/hamburguesa.png'
import darkMode from './assets/photos/darkMode.png'
import DarkMode from './components/DarkMode'
import { useState } from 'react'


function App() {

  const [isOnDm, setIsOnDm] = useState(false)
const handleClickdarkMode = () => {
setIsOnDm(!isOnDm)
console.log(isOnDm)
}
const darkModeActived = (isOnDm) ? "btnDmActived": ""

  return (
    <div id={`${darkModeActived}`} className="App">
      <NavBar logoJoel={logoJoel} menuHamburguer={menuHamburguer} />
      <AboutMe photoProfile={photoProfile} location={location} email={email} />
      <Skills frontEnd={frontEnd} backend={backend} mobile={mobile} html={html} css={css} logoReact={logoReact} bootstrap={bootstrap} Js={Js} github={github} nodeJs={nodeJs} slack={slack} notion={notion} />
      <Portfolio logoPortfolio={logoPortfolio} mockupOne={mockupOne} linkToSite={linkToSite} mockupTwo={mockupTwo} mockupThird={mockupThird} mockupFourth={mockupFourth} mockupFiveth={mockupFiveth} mockupSixth={mockupSixth} />
      <ContactMe logoContactMe={logoContactMe} whatsapp={whatsapp} llamada={llamada} email={email} linkedin={linkedin} />
      <DarkMode handleClickdarkMode={handleClickdarkMode} darkMode={darkMode} />
    </div>
  )
}

export default App
