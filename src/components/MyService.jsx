import React, { useEffect } from "react"
import One from "../images/svg/service-html.svg"
import Two from "../images/svg/service-wordpress.svg"
import Three from "../images/svg/service-full.svg"

function MyService() {
  return (
    <section className="my-service page-section" id="my-service" data-matching-link="#my-service-link">
      <h1 className="u-section-title u-section-title--mb-mt u-color-primary trigger-reveal">
        My <span>Projects</span>
      </h1>
      <div className="wrapper">
        <div className="your-class">
          <div>your content</div>
          <div>your content</div>
          <div>your content</div>
        </div>
        <div className="row row--md-flex-row row--gutters-large row--mb trigger-reveal">
          <div className="col-md-5 col-md-5--order-2">
            <div>
              <img src={One} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-primary u-title-bb-mb">Web Design/Development</h3>
              <div className="my-profile__story-text">
                <p>I will convert your design/PSD into HTML and CSS with Javascipt.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--md-flex-row row--gutters-large row--mb trigger-reveal">
          <div className="col-md-5 col-md-5--order-1">
            <div>
              <img src={Two} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-primary u-resp-mt u-title-bb-mb">Wordpress Development</h3>
              <div className="my-profile__story-text">
                <p>I will convert your design/PSD or HTML to Wordpress.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--md-flex-row row--gutters-large row--mb trigger-reveal">
          <div className="col-md-5 col-md-5--order-2">
            <div>
              <img src={Three} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-primary u-title-bb-mb">Wordpress Blog Creation</h3>
              <div className="my-profile__story-text">
                <p>I will create your own Wordpress Blog, with unique and astonishing design.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-profile__note">
          <h4 className="my-profile__note-text">Note: I can do designing as well if you're not able to provide your own design. Give me some information about your website and we are set. I will then provide all of the source code files after the website is done.</h4>
        </div>
      </div>
    </section>
  )
}

export default MyService
