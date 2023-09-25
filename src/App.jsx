import { useState } from "react"
import "./scss/main.scss"

// Components
import Header from "./components/Header"
import LargeHero from "./components/LargeHero"
import AboutMe from "./components/AboutMe"
import MySkills from "./components/MySkills"
import MyService from "./components/MyService"
import MyGoals from "./components/MyGoals"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <LargeHero />

      <div className="wrapper">
        <hr />
      </div>

      <AboutMe />
      <MySkills />
      <MyService />
      <MyGoals />
      <Footer />

      <div className="modal">
        <div className="modal__inner">
          <h1 className="modal__title">Contact Me</h1>
          <p className="modal__text">I will be having an online message soon. For the meantime, you can contact me in the following platforms below.</p>
          <div className="modal__icons">
            <a href="https://www.facebook.com/amawdotcomdotph" target="_blank" className="modal__icon-links">
              <span className="icon icon--modal-facebook"></span>
            </a>
            <a href="https://twitter.com/Bambi92491688" target="_blank" className="modal__icon-links modal__icon-links--twitter">
              <span className="icon icon--modal-twitter"></span>
            </a>
            <a href="https://www.youtube.com/channel/UCQv8fBPs460TnxwfVl2FeHw" target="_blank" className="modal__icon-links">
              <span className="icon icon--modal-youtube"></span>
            </a>
          </div>
          <h5 className="modal__email">
            <span className="icon icon--modal-mail"></span> Email: barbiecuedotcom@gmail.com
          </h5>
        </div>
        <div className="modal__close">X</div>
      </div>
    </>
  )
}

export default App
