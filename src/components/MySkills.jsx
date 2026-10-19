import React from "react"
import { Typography } from "antd"
import WordpressIcon from "../images/icons/wordpress.svg"
import ReactIcon from "../images/icons/react.svg"
import LaravelIcon from "../images/icons/laravel.svg"
import GHLIcon from "../images/icons/ghl.svg"
import AntD from "../images/icons/antdesign.svg"
import BootstrapIcon from "../images/icons/bootstrap.svg"

const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: ReactIcon,
    text: "The framework of Javascript that is quite interesting. I learn about React useState and useEffect, using Context, useReducer and Immer, routing, creating components and making it reusable, communicating to API using Axios and client-side validation. Right now, I'm using Vite(React) as the Frontend on my Laravel Projects.",
  },
  {
    name: "Laravel",
    category: "Backend",
    icon: LaravelIcon,
    text: "The framework of PHP that is responsible for backend stuffs. Combining Laravel and React is the best approach to build a website system. Using laravel passport or laravel sanctum would make the database secured. I learned about authentication, making controllers and models, migrating tables which is excellent on collaborating projects.",
  },
  {
    name: "Ant Design",
    category: "UI Library",
    icon: AntD,
    text: "Ant Design is a React UI framework and it is one of the most widely used by web developers. It already have pre designed components which you can you use on the frontend. At first, I was bit confused by this framework but time goes by I began to adapt by it. The Ant Design components are flexible, fast and has a great designs.",
  },
  {
    name: "Bootstrap",
    category: "CSS Framework",
    icon: BootstrapIcon,
    text: "I'm not really a fan of using bootstrap but I've had some experience of using it. It's quite easy and it can boost your web development workflow since it already have pre-designed components like carousel, buttons, alerts, cards and much more. But it can also be a pain when your employer wants a custom design and you're screwed.",
  },
  {
    name: "Wordpress",
    category: "CMS",
    icon: WordpressIcon,
    text: "At first, I had some difficulties of learning wordpress because this was my first CMS(Content Management System). It only requires a basic PHP knowledge and from time to time, I finally get it. I learned Custom Post Type, Wordpress Loop, Custom Queries, Advance Custom Fields, Communicating to REST API and much more.",
  },
  {
    name: "GoHighLevel",
    category: "CRM & Automation",
    icon: GHLIcon,
    text: "GoHighLevel is really easy to use and it is my favorite CRM software. I can create funnels/opportunities, landing pages, drag and drops surveys, and build an online book appointment. GHL is also known on their automation workflows, snapshots, client onboarding, memberships, white label and many more.",
  },
]

function ComponentName() {
  return (
    <section className="page-section my-skills lazyload" id="my-skills" data-matching-link="#my-skills-link">
      <div className="wrapper">
        <h1 className="u-section-title u-section-title--mb-mt u-color-main trigger-reveal">
          My <span>Skills</span>
        </h1>
        <div className="my-skills__grid trigger-reveal">
          {skills.map((skill) => (
            <article className="my-skills__card" key={skill.name}>
              <div className="my-skills__card-head">
                <div className="my-skills__card-icon">
                  <img src={skill.icon} alt="" />
                </div>
                <div>
                  <h5 className="my-skills__card-title">{skill.name}</h5>
                  <span className="my-skills__card-category">{skill.category}</span>
                </div>
              </div>
              <Typography.Paragraph className="my-skills__card-text" ellipsis={{ rows: 4, expandable: "collapsible", symbol: (expanded) => (expanded ? "Show less" : "Read more") }}>
                {skill.text}
              </Typography.Paragraph>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComponentName
