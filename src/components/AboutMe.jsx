import React, { useEffect } from "react"

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
                <img srcSet="src/images/bambi-1-small-hi-dpi.jpg" alt="Bambi" />
                {/* <picture>
                    <source sizes="442px" data-srcset="src/images/bambi-1-large.jpg 442w, src/images/bambi-1-large-hi-dpi.jpg 884w" media="(min-width: 990px)" />
                    <img className="lazyload" data-srcset="src/images/bambi-1-small.jpg 573w, src/images/bambi-1-small-hi-dpi.jpg 1146w" alt="Bambi" />
                  </picture> */}
              </div>
              <div className="card__body">
                <h4 className="card__title">Bambi Abangin</h4>
                <h5 className="card__subtitle">Wordpress Developer</h5>
                <hr />
                <p className="card__text">&quot; There's nothing much happier when I successfully output the design onto the webpage. Which is why I do really love coding because it is full of logic. &quot;</p>
                <hr />
                <div className="card__icons">
                  <a href="https://www.facebook.com/amawdotcomdotph" target="_blank">
                    <span className="icon icon--facebook"></span>
                  </a>
                  <a href="https://twitter.com/Bambi92491688" target="_blank" className="card__icons--twitter">
                    <span className="icon icon--twitter"></span>
                  </a>
                  <a href="https://www.youtube.com/channel/UCQv8fBPs460TnxwfVl2FeHw" target="_blank">
                    <span className="icon icon--youtube"></span>
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
                <p>Then I watch those video courses and I didnt regret it. I learned about web development workflow, making your website responsive, about Node Package Manager(NPM), automation tools like Gulp and Webpack, contributing projects to Github, Object-Oriented Programming in Javascript, compiling and bundling CSS and Javascript, using BEM(Block Element Modifier) for your CSS Architecture and using Babel for Javascript. Wordpress is the one that I was excited and eager to learn and it took most of my time developing websites using wordpress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
