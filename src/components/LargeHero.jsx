import React from "react"
import BambiSmall from "../images/bambi.jpg"
import BambiLarge from "../images/bambi-hi-dpi.jpg"
import ReactIcon from "../images/icons/react.svg"
import LaravelIcon from "../images/icons/laravel.svg"
import GHLIcon from "../images/icons/ghl.svg"
import WordpressIcon from "../images/icons/wordpress.svg"
import JavascriptIcon from "../images/icons/javascript.svg"

const techLogos = [
  { name: "React", icon: ReactIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "WordPress", icon: WordpressIcon },
  { name: "GoHighLevel", icon: GHLIcon },
]

function LargeHero() {
  function modalButtonClicked(e) {
    e.preventDefault()
    document.querySelector(".modal").classList.add("modal--is-visible")
  }

  return (
    <section className="large-hero" id="my-home">
      <div className="wrapper wrapper--narrow-xs-to-md trigger-scroll">
        <div className="large-hero__layout">
          <div className="large-hero__content">
            <span className="large-hero__eyebrow">
              <span className="large-hero__wave" aria-hidden="true">
                👋
              </span>
              Howdy! I'm Bambi
            </span>
            <h1 className="large-hero__title">
              Web Developer and <span className="large-hero__highlight">GoHighLevel expert.</span>
            </h1>
            <p className="large-hero__text">Howdy! My name is Bambi. I love building website system and I speak the language of HTML, CSS, JavaScript, React, Laravel and a bunch of other tech tools. I am also an automation expert on GoHighLevel.</p>
            <div className="large-hero__actions">
              <a href="#" className="btn btn--large btn--primary large-hero__btn open-modal" onClick={modalButtonClicked}>
                Contact Me
              </a>
              <a href="#my-service" className="large-hero__btn large-hero__btn--ghost">
                View My Projects <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="large-hero__stack">
              <span className="large-hero__stack-label">I work with</span>
              <ul className="large-hero__stack-list">
                {techLogos.map((tech) => (
                  <li key={tech.name} title={tech.name}>
                    <img src={tech.icon} alt={tech.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="large-hero__photo">
            <div className="large-hero__ring">
              <img sizes="(min-width: 990px) 340px, 240px" srcSet={`${BambiSmall} 332w, ${BambiLarge} 596w`} alt="Bambi" className="large-hero__img" />
              <span className="large-hero__float large-hero__float--one">
                <img src={ReactIcon} alt="" /> React
              </span>
              <span className="large-hero__float large-hero__float--two">
                <img src={LaravelIcon} alt="" /> Laravel
              </span>
              <span className="large-hero__float large-hero__float--three">
                <img src={GHLIcon} alt="" /> GHL Automation
              </span>
            </div>
            <div className="large-hero__description">
              <h2 className="large-hero__name">Bambi Abangin</h2>
              <p className="large-hero__job">GHL / React / Laravel Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LargeHero
