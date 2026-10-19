import React from "react"
import { Image, Typography } from "antd"
import { webProjects } from "../data/projects"

function MyProjectLarge() {
  return (
    <div className="project-grid">
      {webProjects.map((project) => (
        <article className="project-card" key={project.title}>
          <div className="project-card__media">
            <Image src={project.image} alt={project.title} preview={{ mask: "View screenshot" }} />
          </div>
          <div className="project-card__body">
            <span className="project-card__tag">{project.category}</span>
            <h3 className="project-card__title">{project.title}</h3>
            <Typography.Paragraph className="project-card__desc" ellipsis={{ rows: 3, expandable: "collapsible", symbol: (expanded) => (expanded ? "Show less" : "Read more") }}>
              {project.description}
            </Typography.Paragraph>
          </div>
        </article>
      ))}
    </div>
  )
}

export default MyProjectLarge
