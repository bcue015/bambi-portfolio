import React, { useEffect } from "react"
import WordpressIcon from "../images/icons/wordpress.svg"
import ReactIcon from "../images/icons/react.svg"
import LaravelIcon from "../images/icons/laravel.svg"
import GHLIcon from "../images/icons/ghl.svg"
import AntD from "../images/icons/antdesign.svg"
import BootstrapIcon from "../images/icons/bootstrap.svg"

function ComponentName() {
  return (
    <section className="page-section my-skills lazyload" id="my-skills" data-matching-link="#my-skills-link">
      <div className="wrapper wrapper--my-profile">
        <h1 className="u-section-title u-section-title--mb-mt u-color-main trigger-reveal">
          My <span>Skills</span>
        </h1>
        <div className="row row--md-flex-row row--gutters row--skills-mb row--card-first-mb trigger-reveal">
          <div className="col-md-4">
            <div className="my-skills__card">
              <div className="my-skills__card-img">
                <span className="icon icon--html"></span>
                <img className="icon icon--html" src={ReactIcon} alt="" />
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">React</h5>
                <p className="my-skills__card-text">The framework of Javascript that is quite interesting. I learn about React useState and useEffect, using Context, useReducer and Immer, routing, creating components and making it reusable, communicating to API using Axios and client-side validation. Right now, I'm using Vite(React) as the Frontend on my Laravel Projects. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-skills__card">
              <div className="my-skills__card-img">
                <span className="icon icon--css"></span>
                <img className="icon icon--html" src={LaravelIcon} alt="" />
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">Laravel</h5>
                <p className="my-skills__card-text">The framework of PHP that is responsible for backend stuffs. Combining Laravel and React is the best approach to build a website system. Using laravel passport or laravel sanctum would make the database secured. I learned about authentication, making controllers and models, migrating tables which is excellent on collaborating projects.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-skills__card">
              <div className="my-skills__card-img">
                <span className="icon icon--javascript"></span>
                <img className="icon icon--html" src={AntD} alt="" />
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">Ant Design</h5>
                <p className="my-skills__card-text">Ant Design is a React UI framework and it is one of the most widely used by web developers. It already have pre designed components which you can you use on the frontend. At first, I was bit confused by this framework but time goes by I began to adapt by it. The Ant Design components are flexible, fast and has a great designs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--md-flex-row row--gutters row--card-second-mb trigger-reveal">
          <div className="col-md-4">
            <div className="my-skills__card my-skills__card--mb">
              <div className="my-skills__card-img">
                <span className="icon icon--bootstrap"></span>
                <img className="icon icon--html" src={BootstrapIcon} alt="" />
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">Bootstrap</h5>
                <p className="my-skills__card-text">I'm not really a fan of using bootstrap but I've had some experience of using it. It's quite easy and it can boost your web development workflow since it already have pre-designed components like carousel, buttons, alerts, cards and much more. But it can also be a pain when your employer wants a custom design and you're screwed.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-skills__card my-skills__card--mb">
              <div className="my-skills__card-img">
                <span className="icon icon--wordpress"></span>
                <img src={WordpressIcon} alt="" />
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">Wordpress</h5>
                <p className="my-skills__card-text">At first, I had some difficulties of learning wordpress because this was my first CMS(Content Management System). It only requires a basic PHP knowledge and from time to time, I finally get it. I learned Custom Post Type, Wordpress Loop, Custom Queries, Advance Custom Fields, Communicating to REST API and much more.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-skills__card my-skills__card--mb">
              <div className="my-skills__card-img">
                <span className="icon icon--gulp"></span>
                <img className="icon icon--gulp" src={GHLIcon} alt="" />
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">GoHighLevel</h5>
                <p className="my-skills__card-text">GoHighLevel is really easy to use and it is my favorite CRM software. I can create funnels/opportunities, landing pages, drag and drops surveys, and build an online book appointment. GHL is also known on their automation workflows, snapshots, client onboarding, memberships, white label and many more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComponentName
