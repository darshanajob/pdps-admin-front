import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Table,
  Row
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb3";
//i18n
import { withTranslation } from "react-i18next"

const PermitThreewheel = props => {

  //meta title
  document.title = "PDPS";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title={props.t("Services")}  breadcrumbItemType={props.t("License & certificates")} breadcrumbItem={props.t("Three-wheeler parking")} />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody className="service-heading">
                  <CardTitle className="h4 text-lg-center">
                    {props.t("Issuance of three-wheeler parking permits")}
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <Card className="overflow-hidden">
                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <thead className="table-light">
                        <tr>
                          <th>{props.t("Documents to be submitted")}</th>
                          <th>{props.t("Telephone Numbers")}</th>
                          <th>{props.t("Minimum time taken to complete the task")}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <ol>
                              <li>{props.t("Correctly completed application form")}</li>
                              <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                              <li>{props.t("Copy of driving license")}</li>
                              <li>{props.t("Copy of vehicle book")}</li>
                              <li>{props.t("Copy of vehicle insurance")}</li>
                            </ol>
                          </td>
                          <td>
                            {props.t("Front Office Officer")} :
                            <ul className="">
                              <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                              <li> 0775282000 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 01 </td>
                        </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Card>
                  <div className="d-flex flex-wrap gap-2 buttons-services-page">
                    <button
                      type="button"
                      className="btn btn-secondary"
                    >
                      <i className="fas fa-download font-size-16 align-middle me-2"></i>{" "}
                      {props.t("Download Application")}
                    </button>
                    <Link to="/water-supply-application" >
                      <button
                        type="button"
                        className="btn btn-primary "
                      >
                        <i className="fas fa-file-signature font-size-16 align-middle me-2"></i>{" "}
                        {props.t("Apply Online")}
                      </button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(PermitThreewheel);


