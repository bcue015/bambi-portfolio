import React, { useEffect } from "react"
import Bambi from "../images/bambi-profile.png"
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
            <div className="card ">
              <div className="card__photo">
                <img srcSet={Bambi} alt="Bambi" />
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
