import React, { useEffect, useState } from "react"
import Saassaid from "../images/said/saas-said.png"
import { Card, Carousel, Col, Row, Image } from "antd"
const { Meta } = Card
function MyProjectLarge() {
  return (
    <Carousel arrows infinite={false}>
      {" "}
      <div>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card hoverable cover={<Image src={Saassaid} />}>
              <Meta title="Inventory System" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
            </Card>
          </Col>
        </Row>
      </div>
    </Carousel>
  )
}

export default MyProjectLarge
