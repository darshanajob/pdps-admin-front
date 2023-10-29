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

const RentHalls = props => {

  //meta title
  document.title = "PDPS";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title={props.t("Services")}  breadcrumbItemType={props.t("Taxes and rents")} breadcrumbItem={props.t("Event / Town / Community rent")} />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody className="service-heading">
                  <CardTitle className="h4 text-lg-center">
                    {props.t("Napana Auditorium Hall Booking")}
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
                            {props.t("Correctly completed application form")}
                          </td>
                          <td>
                            {props.t("Front Office Officer")} :
                            <ul className="">
                              <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                              <li> 0766930001 </li>
                            </ul>
                          </td>
                          <td>{props.t("Minutes")} : 15 </td>
                        </tr>
                        </tbody>
                      </Table>
                      <Table className="table mb-0">
                        <thead className="table-light">
                        <tr>
                          <th>{props.t("Napana Auditorium rental per day")}</th>
                          <th>{props.t("Price")}</th>
                          
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            {props.t("For weddings (with Furniture, Electricity and Water)")}
                            </td>
                            <td>Rs.40000.00</td>
                        </tr>
                        <tr>
                          <td>
                            {props.t("Deposit for weddings")}
                            </td>
                            <td>Rs.20000.00</td>
                        </tr>
                        <tr>
                          <td>
                            {props.t("For external institutions and other events")}
                            </td>
                            <td>Rs.25000.00</td>
                        </tr>
                        <tr>
                          <td>
                            {props.t("Deposit amount for external institutions and other events")}
                            </td>
                            <td>Rs.15000.00</td>
                        </tr>
                        <tr>
                          <td>
                            {props.t("For preschools")}
                            </td>
                            <td>Rs.15000.00</td>
                        </tr>
                        <tr>
                          <td>
                            {props.t("Deposit amount for preschools")}
                            </td>
                            <td>Rs. 5000.00</td>
                        </tr>
                        <tr>
                          <td>
                            {props.t("For public sector meetings")}
                            </td>
                            <td>Rs.10000.00</td>
                        </tr>
                        <tr>
                          <td>
                            {props.t("For political meetings")}
                            </td>
                            <td>Rs.10000.00</td>
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
                    <Link to="/booking-hall-application" >
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

export default withTranslation()(RentHalls);


