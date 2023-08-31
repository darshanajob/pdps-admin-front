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

const TaxEntertainment = props => {

  //meta title
  document.title = "PDPS";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title={props.t("Services")} breadcrumbItemType={props.t("Taxes and rents")} breadcrumbItem={props.t("Entertainment tax")} />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody className="service-heading">
                  <CardTitle className="h4 text-lg-center">
                    {props.t("Collection of entertainment tax and exemption from entertainment tax")}
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
                            <ul>
                              <li>{props.t("Collection of entertainment tax")}</li>
                              <ol>
                                <li>{props.t("Ready printed tickets for sale")}</li>
                                <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                                <li>{props.t("Request Letter")}</li>
                                <li>{props.t("Residence certificate")}</li>
                                <li>{props.t("Land deed certified by the notary public")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                              </ol>
                              <li>{props.t("Exemption from entertainment tax")}</li>
                              <ol>
                                <li>{props.t("Tax should first be deposited")}</li>
                                <li>{props.t("Estimate of entertainment work")}</li>
                                <li>{props.t("Estimate of entertainment work 30 days")}</li>
                                <li>{props.t("Residence certificate")}</li>
                                <li>{props.t("Land deed certified by the notary public")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                              </ol>
                            </ul>
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

                            {props.t("Revenue Inspector")} :
                            <ul className="">
                              <li> 0775934467 </li>
                              <li> 0787590179 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 02 </td>
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

export default withTranslation()(TaxEntertainment);


