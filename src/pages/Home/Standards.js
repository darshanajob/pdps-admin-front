import React from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"
import president from "../../assets/images/members/president.JPG";
//i18n
import { withTranslation } from "react-i18next"


const MsgPresident = props => {

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <Card className="overflow-hidden">
            <div className="bg-primary bg-soft">
              <Row>
                <Col xs="12">
                  <div className="text-primary p-3 messages-center" >
                    <CardTitle className="mt-0">{props.t("Standards")} </CardTitle>
                  </div>
                </Col>
              </Row>
            </div>
            <CardBody className="pt-0">
              <Row>
                {/*<Col sm="4">*/}
                {/*  <div className="avatar-md profile-user-wid mb-4">*/}
                {/*    <img*/}
                {/*      src={president}*/}
                {/*      alt=""*/}
                {/*      className="img-thumbnail rounded-circle"*/}
                {/*    />*/}
                {/*  </div>*/}

                {/*</Col>*/}

                <Col sm={12}>
                  <div className="pt-4">
                    <Row>
                      <Col xs="12">
                        <p>
                          {props.t("StandardsText1")}
                        </p>
                        <p>
                          {props.t("StandardsText2")}
                        </p>
                        <p>
                          {props.t("StandardsText3")}
                        </p>
                      </Col>

                    </Row>

                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default withTranslation()(MsgPresident);
