import React, { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap"

// Pages Components
import ImageSlider from "../Dashboard/imageslider"
import MsgPresident from "./MsgPresident"
import MsgSecretary from "./MsgSecretary"
import VisionMision from "./VisionMision"
import Dedication from "./Dedication"
import Expectation from "./Expectation"
import Standards from "./Standards"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Dashboard = props => {
  //meta title
  document.title = "PDPS"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Home")}
            breadcrumbItem={props.t("Home")}
          />
          <Row>
            <Col xl="12">
              <Card>
                <CardBody>
                  <ImageSlider />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl="12">
              <Card body>
                <CardTitle className="mt-0">
                  {props.t("Latest News")}{" "}
                </CardTitle>
                <Marquee delay={4} direction="right">
                  {props.t("LatestNewsSample")}{" "}
                </Marquee>
              </Card>
            </Col>
          </Row>
          <Row data-masonry='{"percentPosition": true }'>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry
                columnsCount={3}
                gutter="24px"
                // className="my-masonry-grid"
                // columnClassName="my-masonry-grid_column"
              >
                <MsgPresident />

                <VisionMision />

                <MsgSecretary />

                <Dedication />

                <Standards />

                <Expectation />
              </Masonry>
            </ResponsiveMasonry>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Dashboard)
