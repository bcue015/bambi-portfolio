import React, { useEffect } from "react"
import Wave from "../images/wave.png"
import Goals from "../images/svg/goals.svg"

function MyGoals() {
  return (
    <section className="my-goals page-section page-section--no-pb" id="my-goals" data-matching-link="#my-goals-link">
      <h1 className="u-section-title u-section-title--mb-mt u-color-main trigger-reveal">
        My <span>Goals</span>
      </h1>
      {/* <img className="my-goals__wave lazyload" src={Wave} alt="" /> */}
      <div className="wrapper trigger-reveal">
        <div className="row row--lg-flex-row row--gutters-large">
          <div className="col-lg-6">
            <div className="my-goals__img">
              <img src={Goals} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-lg-6--align-start u-resp-mt--at-large">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-main u-title-bb-mb">An Ongoing Learning</h3>
              <div className="my-profile__story-text">
                <p>
                  <strong>
                    <span className="u-color-main">Staying current</span>
                  </strong>{" "}
                  is what drives me right now—I don’t want to fall behind. Web development is constantly evolving, and while Laravel and React are powerful tools, they’re also part of a highly competitive field filled with incredibly talented developers. With the rise of no-code tools and page builders, even those without deep coding knowledge can now create visually impressive websites. That’s why staying up to date with my tools, tech stack, and design trends is essential if I want to stand out and grow.
                </p>
                <br />
                <p>Next on my list is mastering Amazon Web Services (AWS), specifically its architecture. As one of the leading cloud platforms in the industry, AWS offers powerful tools that are essential for building scalable, secure, and reliable web applications. I’m currently diving into the core architectural concepts—learning how different AWS services like EC2, S3, Lambda, RDS, and VPC come together to form robust infrastructure. My goal is to understand how to design systems that are not only efficient but also cost-effective and resilient, whether it’s for hosting modern web apps or deploying backend APIs. Before diving into advanced configurations or automation, I’m focusing on solidifying my grasp of the fundamentals—because knowing the architecture inside out lays the groundwork for everything else.</p>
                <br />
                <p>And finally, I’ve already mastered GoHighLevel (GHL), from building funnels and automations to managing CRM workflows and client accounts. But the learning doesn’t stop there—GHL is constantly evolving, especially with the introduction of powerful AI-driven features and new integrations. These updates fuel my curiosity even more. I find myself digging deeper into how these tools can be optimized, automated, and customized to create smarter, more efficient systems for businesses. Staying ahead of GHL’s rapid development ensures that I can keep delivering cutting-edge solutions to any project I take on.</p>
                <br />
                <p>In the end, none of it feels like a burden—because I’ll never stop learning. When curiosity strikes, I dig deeper. Because every bit of knowledge gained is always worth it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyGoals
