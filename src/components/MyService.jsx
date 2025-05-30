import React, { useEffect, useState } from "react"
import One from "../images/svg/service-html.svg"
import Two from "../images/svg/service-wordpress.svg"
import Three from "../images/svg/service-full.svg"
import Saassaid from "../images/said/saas-said.png"
import MyProjectLarge from "./MyProjectLarge"
import MyProjectMedium from "./MyProjectMedium"
import { Tabs, ConfigProvider, Card, Carousel, Col, Row, Image } from "antd"

const { Meta } = Card
const onChange = (key) => {
  console.log(key)
}

function MyService() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  const items = [
    {
      key: "1",
      label: "Web Development",
      children: width < 768 ? <MyProjectMedium /> : <MyProjectLarge />,
    },
    {
      key: "2",
      label: "Go High Level",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Video Editing",
      children: "Content of Tab Pane 3",
    },
  ]
  return (
    <section className="my-service page-section" id="my-service" data-matching-link="#my-service-link">
      <h1 className="u-section-title u-section-title--mb-mt u-color-primary trigger-reveal">
        My <span>Projects</span>
      </h1>
      <div className="wrapper">
        <div className="your-class">
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#e91e63",
                // borderRadius: 2,
                // fontSize: 20,
                // fontFamily: "Roboto",

                // Alias Token
                // colorBgContainer: "#f6ffed",
              },
            }}
          >
            <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
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
