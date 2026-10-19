import React from "react"
import { Typography } from "antd"
import Goals from "../images/svg/goals.svg"

const goals = [
  {
    title: "Mastering AWS Architecture",
    status: "Up next",
    tags: ["EC2", "S3", "Lambda", "RDS", "VPC"],
    text: "Next on my list is mastering Amazon Web Services (AWS), specifically its architecture. As one of the leading cloud platforms in the industry, AWS offers powerful tools that are essential for building scalable, secure, and reliable web applications. I’m currently diving into the core architectural concepts—learning how different AWS services like EC2, S3, Lambda, RDS, and VPC come together to form robust infrastructure. My goal is to understand how to design systems that are not only efficient but also cost-effective and resilient, whether it’s for hosting modern web apps or deploying backend APIs. Before diving into advanced configurations or automation, I’m focusing on solidifying my grasp of the fundamentals—because knowing the architecture inside out lays the groundwork for everything else.",
  },
  {
    title: "Going Deeper on GoHighLevel",
    status: "Always evolving",
    tags: ["AI features", "Automations", "Integrations", "CRM workflows"],
    text: "And finally, I’ve already mastered GoHighLevel (GHL), from building funnels and automations to managing CRM workflows and client accounts. But the learning doesn’t stop there—GHL is constantly evolving, especially with the introduction of powerful AI-driven features and new integrations. These updates fuel my curiosity even more. I find myself digging deeper into how these tools can be optimized, automated, and customized to create smarter, more efficient systems for businesses. Staying ahead of GHL’s rapid development ensures that I can keep delivering cutting-edge solutions to any project I take on.",
  },
]

function MyGoals() {
  return (
    <section className="my-goals page-section" id="my-goals" data-matching-link="#my-goals-link">
      <h1 className="u-section-title u-section-title--mb-mt u-color-main trigger-reveal">
        My <span>Goals</span>
      </h1>
      <div className="wrapper">
        <div className="my-goals__intro trigger-reveal">
          <div className="my-goals__img">
            <img src={Goals} alt="" />
          </div>
          <div>
            <span className="my-goals__eyebrow">What drives me</span>
            <h3 className="my-goals__heading">An Ongoing Learning</h3>
            <p className="my-goals__lead">
              <strong>Staying current</strong> is what drives me right now—I don’t want to fall behind. Web development is constantly evolving, and while Laravel and React are powerful tools, they’re also part of a highly competitive field filled with incredibly talented developers. With the rise of no-code tools and page builders, even those without deep coding knowledge can now create visually impressive websites. That’s why staying up to date with my tools, tech stack, and design trends is essential if I want to stand out and grow.
            </p>
          </div>
        </div>

        <div className="my-goals__grid trigger-reveal">
          {goals.map((goal, index) => (
            <article className="my-goals__card" key={goal.title}>
              <div className="my-goals__card-top">
                <span className="my-goals__card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="my-goals__card-status">{goal.status}</span>
              </div>
              <h4 className="my-goals__card-title">{goal.title}</h4>
              <ul className="my-goals__tags">
                {goal.tags.map((tag) => (
                  <li className="my-goals__tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <Typography.Paragraph className="my-goals__card-text" ellipsis={{ rows: 5, expandable: "collapsible", symbol: (expanded) => (expanded ? "Show less" : "Read more") }}>
                {goal.text}
              </Typography.Paragraph>
            </article>
          ))}
        </div>

        <blockquote className="my-goals__quote trigger-reveal">
          <p>In the end, none of it feels like a burden—because I’ll never stop learning. When curiosity strikes, I dig deeper. Because every bit of knowledge gained is always worth it.</p>
        </blockquote>
      </div>
    </section>
  )
}

export default MyGoals
