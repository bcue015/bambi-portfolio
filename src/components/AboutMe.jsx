import React from "react"
import Bambi from "../images/bambi-profile.png"

const storySteps = [
  {
    title: "The spark",
    text: "It all started when a friend of mine(a web developer) told me about this web development stuffs while drinking beers and chillin' for good. I would've never be curious about it if he would have not told me his monthly income. So I went home, did a lot of search on it and this kind of job pays pretty well. And this where it began.",
  },
  {
    title: "Learning on YouTube",
    text: "Youtube is my bestfriend whenever I want to learn something new and because of it I learned HTML, CSS, Bootstrap, PHP and Javascript. To tell you frankly, those video tutorials were not enough to enhance my skills so I have to dig deeper.",
  },
  {
    title: "Digging deeper",
    text: "Thanks to torrent sites, I manage to download those paid/premium video tutorials cause I dont want to spend a single penny though you already knew how to get it for free. I always love freebies, no offense.",
  },
  {
    title: "Leveling up",
    text: "Then I watch those video courses and I didnt regret it. I learned about web development workflow, making your website responsive, about Node Package Manager(NPM), automation tools like Gulp, Webpack and Vite, contributing projects to Github, Object-Oriented Programming in Javascript, React useState and useEffect, using BEM(Block Element Modifier) for your CSS Architecture, CRUD(Create, Read, Update, and Delete) on Laravel, making controllers and models. Then I learn more about GoHighLevel like client onboarding, automation workflows, snapshots and many more.",
  },
]

const stack = ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "React", "Laravel", "Vite", "Webpack", "Gulp", "NPM", "GitHub", "BEM", "GoHighLevel"]

function AboutMe() {
  return (
    <section className="my-profile page-section" id="my-profile" data-matching-link="#my-profile-link">
      <div className="wrapper wrapper--my-profile">
        <h1 className="u-section-title u-section-title--mb-mt u-color-primary trigger-reveal">
          About <span>Me</span>
        </h1>
        <div className="my-profile__layout trigger-reveal">
          <aside className="my-profile__photo-col">
            <div className="my-profile__photo">
              <img src={Bambi} alt="Bambi Abangin" />
            </div>
            <div className="my-profile__badge">
              <span className="my-profile__badge-name">Bambi Abangin</span>
              <span className="my-profile__badge-job">GHL / React / Laravel Developer</span>
            </div>
          </aside>

          <div className="my-profile__content">
            <span className="my-profile__eyebrow">Who I am</span>
            <h3 className="my-profile__heading u-color-primary">My Web Dev Story</h3>

            <ol className="my-profile__timeline">
              {storySteps.map((step) => (
                <li className="my-profile__step" key={step.title}>
                  <h4 className="my-profile__step-title">{step.title}</h4>
                  <p className="my-profile__step-text">{step.text}</p>
                </li>
              ))}
            </ol>

            <div className="my-profile__stack">
              <h4 className="my-profile__stack-title">Picked up along the way</h4>
              <ul className="my-profile__chips">
                {stack.map((item) => (
                  <li className="my-profile__chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
