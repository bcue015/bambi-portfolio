import React from "react"
// import One from "../images/svg/service-html.svg"
// import Two from "../images/svg/service-wordpress.svg"
// import Three from "../images/svg/service-full.svg"
// import Saassaid from "../images/said/saas-said.png"
import MyProjectLarge from "./MyProjectLarge"
import GhlProjectsLarge from "./GhlProjectsLarge"
import { webProjects, ghlVideos } from "../data/projects"
import { Tabs, ConfigProvider } from "antd"

const tabLabel = (text, count) => (
  <span className="my-service__tab">
    {text}
    {count > 0 && <span className="my-service__tab-count">{count}</span>}
  </span>
)

function MyService() {
  const items = [
    {
      key: "1",
      label: tabLabel("Web Development", webProjects.length),
      children: <MyProjectLarge />,
    },
    {
      key: "2",
      label: tabLabel("Go High Level", ghlVideos.length),
      children: <GhlProjectsLarge />,
    },
    {
      key: "3",
      label: tabLabel("Video Editing", 0),
      children: (
        <div className="my-service__empty">
          <h3>Coming soon</h3>
          <p>Video editing samples are on the way.</p>
        </div>
      ),
    },
  ]
  return (
    <section className="my-service page-section" id="my-service" data-matching-link="#my-service-link">
      <h1 className="u-section-title u-section-title--mb-mt u-color-primary trigger-reveal">
        My <span>Projects</span>
      </h1>
      <div className="wrapper">
        <div className="your-class trigger-reveal">
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#2563eb",
                colorLink: "#2563eb",
                // borderRadius: 2,
                // fontSize: 20,
                // fontFamily: "Roboto",

                // Alias Token
                // colorBgContainer: "#f6ffed",
              },
            }}
          >
            <Tabs centered defaultActiveKey="1" items={items} />
          </ConfigProvider>
        </div>
        {/* <div className="row row--md-flex-row row--gutters-large row--mb trigger-reveal">
          <div className="col-md-5 col-md-5--order-2">
            <div>
              <img src={One} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-primary u-title-bb-mb">Web Design/Development</h3>
              <div className="my-profile__story-text">
                <p>I will convert your design/PSD into HTML and CSS with Javascipt.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--md-flex-row row--gutters-large row--mb trigger-reveal">
          <div className="col-md-5 col-md-5--order-1">
            <div>
              <img src={Two} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-primary u-resp-mt u-title-bb-mb">Wordpress Development</h3>
              <div className="my-profile__story-text">
                <p>I will convert your design/PSD or HTML to Wordpress.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--md-flex-row row--gutters-large row--mb trigger-reveal">
          <div className="col-md-5 col-md-5--order-2">
            <div>
              <img src={Three} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="my-profile__story">
              <h3 className="my-profile__story-title u-color-primary u-title-bb-mb">Wordpress Blog Creation</h3>
              <div className="my-profile__story-text">
                <p>I will create your own Wordpress Blog, with unique and astonishing design.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-profile__note">
          <h4 className="my-profile__note-text">Note: I can do designing as well if you're not able to provide your own design. Give me some information about your website and we are set. I will then provide all of the source code files after the website is done.</h4>
        </div> */}
      </div>
    </section>
  )
}

export default MyService
