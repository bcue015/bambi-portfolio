import React, { useEffect } from "react"
import Bambi from "../images/bambi-1-small-hi-dpi.jpg"
import FacebookIcon from "../images/icons/facebook.svg"
import InstagramIcon from "../images/icons/instagram.svg"
import Twitter from "../images/icons/twitter.svg"

function AboutMe() {
  return (
    <section className="my-profile page-section" id="my-profile" data-matching-link="#my-profile-link">
      <div className="wrapper wrapper--my-profile">
        <h1 className="u-section-title u-section-title--mb-mt u-color-primary trigger-reveal">
          About <span>Me</span>
        </h1>
        <div className="row row--md-flex-row row--gutters row--align-start trigger-reveal">
          <div className="col-md-5">
            <div className="card u-bg-gradient-main u-color-white">
              <div className="card__photo">
                <img srcSet={Bambi} alt="Bambi" />
                {/* <picture>
                    <source sizes="442px" data-srcset="src/images/bambi-1-large.jpg 442w, src/images/bambi-1-large-hi-dpi.jpg 884w" media="(min-width: 990px)" />
                    <img className="lazyload" data-srcset="src/images/bambi-1-small.jpg 573w, src/images/bambi-1-small-hi-dpi.jpg 1146w" alt="Bambi" />
                  </picture> */}
              </div>
              <div className="card__body">
                <h4 className="card__title">Bambi Abangin</h4>
                <h5 className="card__subtitle">GHL / React / Laravel Developer</h5>
                <hr />
                <p className="card__text">&quot; There's nothing much happier when I successfully output the design onto the webpage. Which is why I do really love coding because it is full of logic. &quot;</p>
                <hr />
                <div className="card__icons">
                  <a href="https://www.facebook.com/amawdotcomdotph" target="_blank">
                    {/* <span className="icon icon--facebook"></span> */}
                    <img className="icon icon--facebook" src={FacebookIcon} alt="" />
                  </a>
                  <a href="https://www.instagram.com/amawdotcomdotph/" target="_blank" className="card__icons--twitter">
                    {/* <span className="icon icon--twitter"></span> */}
                    <img className="icon icon--twitter" src={InstagramIcon} alt="" />
                  </a>
                  <a href="https://twitter.com/amawdotcomdotph" target="_blank">
                    {/* <span className="icon icon--youtube"></span> */}
                    <img className="icon icon--youtube" src={Twitter} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 u-resp-mt">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-primary u-title-bb-mb">My Web Dev Story</h3>
              <div className="my-profile__story-text">
                <p>It all started when a friend of mine(a web developer) told me about this web development stuffs while drinking beers and chillin' for good. I would've never be curious about it if he would have not told me his monthly income. So I went home, did a lot of search on it and this kind of job pays pretty well. And this where it began.</p>
                <br />
                <p>Youtube is my bestfriend whenever I want to learn something new and because of it I learned HTML, CSS, Bootstrap, PHP and Javascript. To tell you frankly, those video tutorials were not enough to enhance my skills so I have to dig deeper.</p>
                <br />
                <p>Thanks to torrent sites, I manage to download those paid/premium video tutorials cause I dont want to spend a single penny though you already knew how to get it for free. I always love freebies, no offense.</p>
                <br />
                <p>Then I watch those video courses and I didnt regret it. I learned about web development workflow, making your website responsive, about Node Package Manager(NPM), automation tools like Gulp, Webpack and Vite, contributing projects to Github, Object-Oriented Programming in Javascript, React useState and useEffect, using BEM(Block Element Modifier) for your CSS Architecture, CRUD(Create, Read, Update, and Delete) on Laravel, making controllers and models. Then I learn more about GoHighLevel like client onboarding, automation workflows, snapshots and many more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
