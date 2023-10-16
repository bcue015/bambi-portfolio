import React, { useEffect } from "react"
import BambiSmall from "../images/bambi.jpg"
import BambiLarge from "../images/bambi-hi-dpi.jpg"

function LargeHero() {
  function modalButtonClicked(e) {
    e.preventDefault
    document.querySelector(".modal").classList.add("modal--is-visible")
  }

  return (
    <section className="large-hero" id="my-home">
      <div className="wrapper wrapper--narrow-xs-to-md trigger-scroll">
        <div className="row row--lg-flex-row row--gutters-small">
          <div className="col-lg-8">
            <div className="large-hero__content">
              <h1 className="large-hero__title">
                Web Developer and GoHighLevel <span className="finest">expert.</span>
              </h1>
              <p className="large-hero__text">Howdy! My name is Bambi. I love building website system and I speak the language of HTML, CSS, JavaScript, React, Laravel and a bunch of other tech tools. I am also an automation expert on GoHighLevel.</p>
              <a className="btn btn--large btn--primary open-modal" onClick={modalButtonClicked}>
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="large-hero__photo">
              <img sizes="332px" srcSet={`${BambiSmall} 332w, ${BambiLarge} 596w`} alt="Bambi" className="large-hero__img" />
              <div className="large-hero__description">
                <h1 className="large-hero__name">Bambi Abangin</h1>
                <p className="large-hero__job">GHL / React / Laravel Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LargeHero
