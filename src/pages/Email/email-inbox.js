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

const EmailInbox = props => {

  //meta title
  document.title = "PDPS";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Email" breadcrumbItem="Inbox" />

          <Row>
            <Col xs="12">
              

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};



export default withRouter(EmailInbox);
