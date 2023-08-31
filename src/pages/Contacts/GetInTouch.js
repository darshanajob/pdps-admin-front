import React, { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
//i18n
import { withTranslation } from "react-i18next"


const GetInTouch = props => {
  //meta title
  document.title = "PDPS"


  //--------------------------------------------------

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            title={props.t("Contact us")}
            breadcrumbItem={props.t("Get in touch")}
          />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody className="service-heading">
                  <CardTitle className="h4 text-lg-center">
                    {props.t("Get in touch")}
                  </CardTitle>
                </CardBody>
                <CardBody>




                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(GetInTouch)
