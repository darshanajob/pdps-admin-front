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
                    <CardTitle className="mt-0">{props.t("Commitment")} </CardTitle>
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
                        <ul>
                          <li> {props.t("Sincerely")} </li>
                          <li> {props.t("Wisely")} </li>
                          <li> {props.t("Politely")} </li>
                          <li> {props.t("With understanding")} </li>
                          <li> {props.t("Subjectively and impartially")} </li>
                          <li> {props.t("With transparency")} </li>
                          <li> {props.t("Accountability")} </li>
                          <li> {props.t("without delay")} </li>
                          <li> {props.t("Efficiently and effectively")} </li>
                        </ul>
                        {props.t("We are committed")}
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
