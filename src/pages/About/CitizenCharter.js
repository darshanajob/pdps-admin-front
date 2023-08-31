import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Input,
  Label,
  Table,
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

const Service = props => {

  //meta title
  document.title = "PDPS";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title={props.t("About Us")} breadcrumbItem={props.t("Citizen Charter")} />

          <Row>
            <Col xs="12">        
              <Card>
                <CardBody className="service-heading">
                 <CardTitle className="h4 text-lg-center">{props.t("Citizen Charter")} </CardTitle>
                  </CardBody>
                <CardBody>
                  <Card className="overflow-hidden">
                <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>#</th>
                          <th>{props.t("Services")}</th>
                          <th>{props.t("Documents to be submitted")}</th>
                          <th>{props.t("Direct contact officer and phone number")}</th>
                          <th>{props.t("Minimum time taken to complete the task")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>{props.t("Approval of building plans")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                                <li>{props.t("Copies of building plan3")}</li>
                                <li>{props.t("Copies of building plan RDA")}</li>
                                <li>{props.t("Copies of building plan NBRO")}</li>
                                <li>{props.t("Copy of the survey plan")}</li>
                                <li>{props.t("Certificates nature of construction")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                                <li>{props.t("Sketch of land")}</li>
                                <li>{props.t("Land deed certified by the notary public")}</li>
                                <li>{props.t("Land located in assessment area")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 07241117871 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 14 </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>{props.t("Approval of land subdivision and consolidation development plans")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                                <li>{props.t("Copies of survey plan")}</li>
                                <li>{props.t("Certificates nature of development")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                                <li>{props.t("Land deed certified by the notary public")}</li>
                                <li>{props.t("Sketch of land")}</li>
                                <li>{props.t("Land located in assessment area")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 07241117871 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 14 </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>{props.t("Extension of validity of a development permit")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Original development plan")}</li>
                                <li>{props.t("Copy of Development Permit")}</li>
                                <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 07241117871 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 07 </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>{props.t("Approval of cover for unauthorized construction")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Application urban or sabha")}</li>
                                <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                                <li>{props.t("Copies of building plan5")}</li>
                                <li>{props.t("Copy of the land survey plan")}</li>
                                <li>{props.t("Certificates nature of construction")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                                <li>{props.t("Sketch of land")}</li>
                                <li>{props.t("Land deed certified by the notary public")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 07241117871 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 30 </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>{props.t("Issuance of Certificate of Compliance")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Application urban or sabha")}</li>
                                <li>{props.t("Copy of development & approved plan")}</li>                          
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 07241117871 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 14 </td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>{props.t("Issuance of Street Line / Building Limit Certificates")}</td>
                             <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Copy of the land survey plan")}</li>
                                <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 07241117871 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Hours")} : 01 </td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td>{props.t("Issuance of Non-Expropriation Certificates")}</td>
                             <td>
                            <ol>
                                <li>{props.t("Letter requesting non-possession")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                                <li>{props.t("Money Paid to council")}</li>                          
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 07241117871 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Hours")} : 01 </td>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          <td>{props.t("Issuance of Trade Licenses")}</td>
                             <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Copy of Environmental Protection Permit")}</li>                  
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
                            {props.t("Environment Officer")} :
                            <ul className="">
                                <li> 0784969320 </li>
                            </ul>
                            {props.t("Revenue Inspector")} :
                            <ul className="">
                                <li> 0775934467 </li>
                                <li> 0787590179 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 07 </td>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          <td>{props.t("Collection of business and industry tax")}</td>
                             <td>
                            <ol>
                                <li>{props.t("Business tax notice")}</li>                                
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

                            {props.t("Revenue Inspector")} :
                            <ul className="">
                                <li> 0775934467 </li>
                                <li> 0787590179 </li>
                            </ul>
                          </td>
                          <td>{props.t("Minutes")} : 15 </td>
                        </tr>
                        <tr>
                          <th scope="row">10</th>
                          <td>{props.t("Issuance of Advertisement Display Permits")}</td>
                             <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Advertisement intended for display")}</li>
                                <li>{props.t("Letter of permission from the RDA")}</li>
                                <li>{props.t("Copy of the letter by police")}</li>
                                <li>{props.t("Letter of consent")}</li>
                                <li>{props.t("Copy of the permit Urban Council")}</li>
                            </ol>
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

                            {props.t("Revenue Inspector")} :
                            <ul className="">
                                <li> 0775934467 </li>
                                <li> 0787590179 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 03 </td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>{props.t("Collection of entertainment tax and exemption from entertainment tax")}</td>
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
                        <tr>
                          <th scope="row">12</th>
                          <td>{props.t("Event Halls / Town Halls / Community Halls for rent")}</td>
                           <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>                          
                            </ol>
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
                        <tr>
                          <th scope="row">13</th>
                          <td>{props.t("Levy of assessment tax")}</td>
                            <td>
                            <ol>
                                <li>{props.t("Assessment notice")}</li>                               
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0766392417 </li>
                            </ul>
                          </td>
                          <td>{props.t("Minutes")} : 15 </td>
                        </tr>
                        <tr>
                          <th scope="row">14</th>
                          <td>{props.t("Registration and amendment of property title")}</td>
                            <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Land deed certified by the notary public2")}</li>                           
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>

                            {props.t("Revenue Inspector")} :
                            <ul className="">
                                <li> 0775934467 </li>
                                <li> 0787590179 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 05 </td>
                        </tr>
                        <tr>
                          <th scope="row">15</th>
                          <td>{props.t("Tax on sale of certain lands")}</td>
                            <td>
                            <ol>
                                <li>{props.t("Tax notice")}</li>                             
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>

                           
                            {props.t("Revenue Inspector")} :
                            <ul className="">
                                <li> 0775934467 </li>
                                <li> 0787590179 </li>
                            </ul>
                          </td>
                          <td>{props.t("Minutes")} : 15 </td>
                        </tr>
                        <tr>
                          <th scope="row">16</th>
                          <td>{props.t("Environmental Protection Permit")}</td>
                            <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Sketch of route")}</li>
                                <li>{props.t("Number of employees")}</li>
                                <li>{props.t("Copy of business registration")}</li>
                                <li>{props.t("Copy of the deed to business is located")}</li>
                                <li>{props.t("Agreement with the owner")}</li>
                                <li>{props.t("Copy of the land survey plan")}</li>
                                <li>{props.t("Copies of building plan")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>

                            {props.t("Environment Officer")} :
                            <ul className="">
                                <li> 0784969320 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 14 </td>
                        </tr>
                        <tr>
                          <th scope="row">17</th>
                          <td>{props.t("Requesting permission to damage roads")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Sketch of route damage")}</li>
                                <li>{props.t("Letter by service contact")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0718701448 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 02 </td>
                        </tr>
                        <tr>
                          <th scope="row">18</th>
                          <td>{props.t("Removal of hazardous conditions caused by trees")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>                
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 03 </td>
                        </tr>
                        <tr>
                          <th scope="row">19</th>
                          <td>{props.t("Getting a water supply")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Certified copy of the applicant's National Identity Card")}</li>
                                <li>{props.t("Request Letter")}</li>
                                <li>{props.t("Residence certificate")}</li>
                                <li>{props.t("Land deed certified by the notary public")}</li>
                                <li>{props.t("Applicant is not the owner of the land")}</li>
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 03 </td>
                        </tr>
                        <tr>
                          <th scope="row">20</th>
                          <td>{props.t("Getting water bowser service")}</td>
                          <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>                              
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Minutes")} : 30 </td>
                        </tr>
                        <tr>
                          <th scope="row">21</th>
                          <td>{props.t("Backhoe machine rental")}</td>
                            <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>                            
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0702522489 </li>
                            </ul>

                            {props.t("Technical Officer")} :
                            <ul className="">
                                <li> 0768176953 </li>
                                <li> 0718353966 </li>
                                <li> 0714430050 </li>
                            </ul>
                          </td>
                          <td>{props.t("Minutes")} : 30 </td>
                        </tr>
                        <tr>
                          <th scope="row">22</th>
                          <td>{props.t("Issuance of three-wheeler parking permits")}</td>
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
                        <tr>
                          <th scope="row">23</th>
                          <td>{props.t("Garbage collection")}</td>
                            <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>                          
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0714218585 </li>
                                <li> 0716997932 </li>
                            </ul>

                            {props.t("Environment Officer")} :
                            <ul className="">
                                <li> 0784969320 </li>                  
                            </ul>
                          </td>
                          <td>{props.t("Minutes")} : 15 </td>
                        </tr>
                        <tr>
                          <th scope="row">24</th>
                          <td>{props.t("Access to information under the Information Act")}</td>
                           <td>
                            <ol>
                                <li>{props.t("Correctly completed application form")}</li>
                                <li>{props.t("Information Request letter")}</li>                             
                            </ol>
                          </td>
                          <td>
                          {props.t("Front Office Officer")} :
                            <ul className="">
                                <li> 0812476276 </li>
                            </ul>

                            {props.t("Subject Officer")} :
                            <ul className="">
                                <li> 0719772797 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 07 </td>
                        </tr>
                        <tr>
                          <th scope="row">25</th>
                          <td>{props.t("Street lamp installation and maintenance")}</td>
                            <td>
                            <ul>
                              <li>{props.t("Installation street lamp")} : </li>
                              <ol>
                                  <li>{props.t("Correctly completed application form")}</li>
                                  <li>{props.t("Sketch of lamp")}</li>                               
                              </ol>
                              <li>{props.t("Maintenance street lights")} : </li>
                              <ol>
                                  <li>{props.t("Acceptable phone call")}</li>                                                               
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
                                <li> 0718866472 </li>
                            </ul>
                          </td>
                          <td>{props.t("Days")} : 03 </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  </Card>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withTranslation()(Service);


