import { useState, useEffect } from "react"
import "./scss/main.scss"

// Components
import Header from "./components/Header"
import LargeHero from "./components/LargeHero"
import AboutMe from "./components/AboutMe"
import MySkills from "./components/MySkills"
import MyService from "./components/MyService"
import MyGoals from "./components/MyGoals"
import Footer from "./components/Footer"
import ContactModal from "./components/ContactModal"

function App() {
  // Here

  const [hasElementAHittedElementB, setHasElementAHittedElementB] = useState(false)

  useEffect(() => {
    const siteHeader = document.querySelector(".site-header")
    const handleScroll = () => {
      if (window.scrollY > 60) {
        siteHeader.classList.add("site-header--dark")
      } else {
        siteHeader.classList.remove("site-header--dark")
      }
    }

    // Attach scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const itemsToReveal = document.querySelectorAll(".trigger-reveal")
    itemsToReveal.forEach((el) => {
      el.classList.add("reveal-item")
    })

    const handleScroll = () => {
      itemsToReveal.forEach((el) => {
        const scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
        if (scrollPercent < 75) {
          el.classList.add("reveal-item--is-visible")
        }
        // console.log(el.getBoundingClientRect(el).y)
      })
    }

    // Attach scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Header />
      <LargeHero />

      {/* <div className="wrapper">
        <hr />
      </div> */}

      <AboutMe />
      <MySkills />
      <MyService />
      <MyGoals />
      <Footer />

      <ContactModal />
    </>
  )
}

export default App
