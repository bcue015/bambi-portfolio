import React, { useEffect } from "react"

function Header() {
  function hamburgerButtonClicked(e) {
    e.preventDefault
    document.querySelector(".site-header").classList.toggle("site-header--is-expanded")
    document.querySelector(".primary-nav").classList.toggle("primary-nav--is-visible")
  }
  return (
    <header className="site-header">
      <div className="wrapper wrapper--flex">
        <div className="site-header__logo">
          <a href="#my-home" className="site-header__logo-link">
            <h3 className="site-header__bamb-web">Bambi's</h3>
            <h1 className="site-header__developer">Portfolio</h1>
          </a>
        </div>

        <div className="site-header__menu-icon" onClick={hamburgerButtonClicked}>
          <div className="site-header__menu-icon__middle"></div>
        </div>

        <nav className="primary-nav">
          <ul>
            <li>
              <a href="#my-profile" id="my-profile-link">
                About
              </a>
            </li>
            <li>
              <a href="#my-skills" id="my-skills-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#my-service" id="my-service-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#my-goals" id="my-goals-link">
                Goals
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
