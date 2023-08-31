import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Input,
  Label,
  Row,
  TabContent,
  TabPane,
  Nav,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavItem,
  NavLink,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
//i18n
import { withTranslation } from "react-i18next"

const MemberView = props => {

  //meta title
  document.title = "PDPS";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title={props.t("About Us")} breadcrumbItem={props.t("Members")} />

          <Row>
            <Col xs="12">
              

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(MemberView);


