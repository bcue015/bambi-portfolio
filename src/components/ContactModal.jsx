import React, { useEffect, useState } from "react"
import FacebookIcon from "../images/icons/facebook.svg"
import WhatsappIcon from "../images/icons/whatsapp.svg"
import TwitterIcon from "../images/icons/twitter.svg"

const EMAIL = "barbiecuedotcom@gmail.com"

const contacts = [
  { name: "WhatsApp", handle: "+63 991 293 6370", href: "https://wa.me/639912936370", icon: WhatsappIcon, modifier: "whatsapp" },
  { name: "Facebook", handle: "amawdotcomdotph", href: "https://www.facebook.com/amawdotcomdotph", icon: FacebookIcon, modifier: "facebook" },
  { name: "Twitter / X", handle: "@amawdotcomdotph", href: "https://twitter.com/amawdotcomdotph", icon: TwitterIcon, modifier: "twitter" },
]

// Opened by the "Contact Me" buttons, which add .modal--is-visible to .modal
function ContactModal() {
  const [copied, setCopied] = useState(false)

  function closeModal() {
    document.querySelector(".modal").classList.remove("modal--is-visible")
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="modal__card" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button type="button" className="modal__close" onClick={closeModal} aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="modal__header">
          <span className="modal__eyebrow">Let's work together</span>
          <h1 className="modal__title" id="contact-modal-title">
            Contact Me
          </h1>
          <p className="modal__text">I will be having an online message soon. For the meantime, you can contact me in the following platforms below.</p>
        </div>

        <ul className="modal__list">
          {contacts.map((contact) => (
            <li key={contact.name}>
              <a href={contact.href} target="_blank" rel="noopener noreferrer" className="modal__item">
                <span className={`modal__item-icon modal__item-icon--${contact.modifier}`}>
                  <img src={contact.icon} alt="" />
                </span>
                <span className="modal__item-body">
                  <span className="modal__item-name">{contact.name}</span>
                  <span className="modal__item-handle">{contact.handle}</span>
                </span>
                <span className="modal__item-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="modal__email">
          <span className="modal__item-icon modal__item-icon--email">
            <svg viewBox="0 0 64 48" aria-hidden="true">
              <path d="M0,0V8L32,24,64,8V0H0ZM0,16V48H64V16L32,32Z" />
            </svg>
          </span>
          <span className="modal__item-body">
            <span className="modal__item-name">Email</span>
            <a href={`mailto:${EMAIL}`} className="modal__email-address">
              {EMAIL}
            </a>
          </span>
          <button type="button" className={`modal__copy${copied ? " modal__copy--done" : ""}`} onClick={copyEmail}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
