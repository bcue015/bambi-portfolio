import React, { useEffect } from "react"

function MyGoals() {
  return (
    <section className="my-goals page-section page-section--no-pb" id="my-goals" data-matching-link="#my-goals-link">
      <h1 className="u-section-title u-section-title--mb-mt u-color-main trigger-reveal">
        My <span>Goals</span>
      </h1>
      <img className="my-goals__wave lazyload" src="src/images/wave.png" alt="" />
      <div className="wrapper trigger-reveal">
        <div className="row row--lg-flex-row row--gutters-large">
          <div className="col-lg-6">
            <div className="my-goals__img">
              <img src="src/images/svg/goals.svg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-lg-6--align-start u-resp-mt--at-large">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-main u-title-bb-mb">An Ongoing Learning</h3>
              <div className="my-profile__story-text">
                <p>Staying current is what I have in my mind right now because I dont want to get behind. Web development, wordpress specifically, is in demand yet a crowded places wherin you could meet a lots of talented competitors. Not to mention there are page-builders to which the one who doesn't know about coding can build an extravagant websites. And staying current to all of my tools and designs will help me rise up.</p>
                <br />
                <p>Next is learning javascript. Javascript is a popular language which most of the developers used. And I'm still learning a thing or two about this language, but first I have to learn the plain javascript language to whom they refered as &quot;vanilla javascript&quot;, before I proceed to those javascript frameworks like jquery and react.</p>
                <br />
                <p>And finally, I have to learn about advance wordpress, like the famous wordpress plugin woocommerce. Every e-commerce website always strikes my curiousity on how would they do it, how do they integrate payments or any questions regarding e-commerce that makes the question mark revolves around my head.</p>
                <br />
                <p>But it doesn't matter because I will never stop from learning. And if curiousity strikes me, then I will have to dig deeper cause its all worth it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyGoals
