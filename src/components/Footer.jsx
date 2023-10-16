import React, { useEffect } from "react"

function Footer() {
  function modalButtonClicked(e) {
    e.preventDefault
    document.querySelector(".modal").classList.add("modal--is-visible")
  }
  return (
    <footer className="site-footer u-bg-gradient-main page-section--very-small">
      <div className="wrapper trigger-footer">
        <p>
          <span className="site-footer__text">Copyright &copy; 2023 Bam Web Dev. All rights reserved.</span>{" "}
          <a className="btn btn--primary1 open-modal" onClick={modalButtonClicked}>
            Contact Me
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
