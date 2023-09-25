import React, { useEffect } from "react"

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
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">HTML 5</h5>
                <p className="my-skills__card-text">The very basic language in web development and the most easiest to learn of all time. It took me a week for me learn this language before proceeding CSS. But there are still some elements or tags that I need to work on with because I'm not really a fan of preemptive memorizing. Researching is my meat and potatoes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-skills__card">
              <div className="my-skills__card-img">
                <span className="icon icon--css"></span>
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">CSS 3</h5>
                <p className="my-skills__card-text">The language that made me hook for two months and still learning more about it. CSS will provide an eye-catching website and making it responsive to all devices like mobile and desktop. Some of developers underestimated this language because they think that its is so quite easy. Well, they have to reconsider to think again.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-skills__card">
              <div className="my-skills__card-img">
                <span className="icon icon--javascript"></span>
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">Javascript</h5>
                <p className="my-skills__card-text">The most interactive language in my web development courses. Though I only learn basics like object-oriented programming, its quite helpful for me as a developer in terms of manipulating classNamees or id's in the DOM(Document Object Model). In fact this is my stepping stone in learning more and more about javascript.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--md-flex-row row--gutters row--card-second-mb trigger-reveal">
          <div className="col-md-4">
            <div className="my-skills__card my-skills__card--mb">
              <div className="my-skills__card-img">
                <span className="icon icon--bootstrap"></span>
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">Bootstrap 4</h5>
                <p className="my-skills__card-text">I'm not really a fan of using bootstrap but I've had some experience of using it. It's quite easy and it can boost your web development workflow since it already have pre-designed components like carousel, buttons, alerts, cards and much more. But it can also be a pain when your employer wants a custom design and you're screwed.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="my-skills__card my-skills__card--mb">
              <div className="my-skills__card-img">
                <span className="icon icon--wordpress"></span>
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
              </div>
              <div className="my-skills__card-body">
                <h5 className="my-skills__card-title">Gulp 4</h5>
                <p className="my-skills__card-text">An automation tool that saves the day. Gulp saves me from auto compiling/bundling CSS and Javascript, auto-reloading webpages using browser-sync, optimizing images and svg's, minifying Javascript and CSS, and building. I already have my own configuration in my gulpfile and I used it in every projects to speed up my workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComponentName
