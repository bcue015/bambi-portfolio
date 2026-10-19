import React, { useState } from "react"
import { Modal, Typography } from "antd"
import { ghlVideos } from "../data/projects"

// Shows the YouTube thumbnail on the card; clicking opens the video large in a lightbox, like the screenshots.
function VideoCard({ title, youtubeId, description }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="project-card">
      <div className="project-card__media project-card__media--video">
        <button type="button" className="project-card__play" onClick={() => setOpen(true)} aria-label={`Play ${title}`}>
          <img src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="project-card__play-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
      <div className="project-card__body">
        <span className="project-card__tag">Automation</span>
        <h3 className="project-card__title">{title}</h3>
        {description && (
          <Typography.Paragraph className="project-card__desc" ellipsis={{ rows: 3, expandable: "collapsible", symbol: (expanded) => (expanded ? "Show less" : "Read more") }}>
            {description}
          </Typography.Paragraph>
        )}
      </div>

      {/* destroyOnHidden removes the player on close, which stops playback */}
      <Modal open={open} onCancel={() => setOpen(false)} footer={null} centered destroyOnHidden width="min(1100px, 92vw)" wrapClassName="video-lightbox" styles={{ mask: { background: "rgba(0, 0, 0, 0.85)" } }}>
        <div className="video-lightbox__frame">
          <iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <p className="video-lightbox__title">{title}</p>
      </Modal>
    </article>
  )
}

function GhlProjectsLarge() {
  return (
    <div className="project-grid">
      {ghlVideos.map((video) => (
        <VideoCard key={video.youtubeId} {...video} />
      ))}
    </div>
  )
}

export default GhlProjectsLarge
