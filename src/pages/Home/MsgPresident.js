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
                  <div className="text-primary p-3">
                    <CardTitle className="mt-0">{props.t("Message of the Chairman")} </CardTitle>
                    <br></br>
                  </div>
                </Col>
              </Row>
            </div>
            <CardBody className="pt-0">
              <Row>
                <Col sm="4">
                  <div className="avatar-md profile-user-wid mb-4">
                    <img
                      src={president}
                      alt=""
                      className="img-thumbnail rounded-circle"
                    />
                  </div>

                </Col>

                <Col sm={12}>
                  <div className="pt-4">
                    <Row>
                      <Col xs="12">
                        <p className="text-muted mb-0 messages-justify">
                          <i className="bx bxs-quote-alt-left font-size-16"></i>&nbsp; &nbsp;
                          {props.t("ChairmanMsgText1")}
                        </p>
                        <p className="text-muted mb-0 messages-justify">
                        {props.t("ChairmanMsgText2")}
                        </p>
                        <p className="text-muted mb-0 messages-justify">
                          {props.t("ChairmanMsgText3")}
                          &nbsp; &nbsp;<i className="bx bxs-quote-alt-right font-size-16"></i>
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
