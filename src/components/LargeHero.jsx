import React, { useEffect } from "react"

function LargeHero() {
  return (
    <>
      <section className="large_hero">
        <div className="wrapper">
          <div className="row row--gap">
            <div className="col-md-8">
              <h1 className="large-hero__title">
                Making your website as simple at its <span className="larger-hero__finest">finest.</span>
              </h1>
              <p className="the-paragraph">Howdy! My name is Bambi and I am a wordpress developer. I can design simple yet astonishing responsive user-interfaces with user-experience on the fly. I can also create your own personal blog with wordpress and I can make it dynamic!</p>
              <button className="btn btn--main-color btn--large">Contact Me</button>
            </div>
            <div className="col-md-4">
              <div className="large-hero__img_border">
                <img className="large-hero__image" src="../src/images/bambi.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LargeHero
