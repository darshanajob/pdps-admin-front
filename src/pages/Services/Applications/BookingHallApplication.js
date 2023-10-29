import React, { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
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
  FormFeedback,
  Form, Dropdown,
} from "reactstrap"
import Select from "react-select"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import Swal from "sweetalert2"
import BookingHallService, { addBookingHallApplication } from "../../../services/BookingHallService"
//Import Breadcrumb
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
//i18n
import { withTranslation } from "react-i18next"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingHallApplication = props => {

  //meta title
  document.title = "PDPS"

  //---------------------------------------------
  const [selectedMulti2, setselectedMulti2] = useState(null)

  //define the state for the form
  const [dropdown, setDropdown] = useState([]);
  const [dropdown2, setDropdown2] = useState([]);
  const stripe = useStripe();
  const elements = useElements();
  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2)
  }
  const reservationRequirements = [
    "For weddings (with Furniture, Electricity and Water)",
    "For external institutions and other events",
    "For preschools",
    "For public sector meetings",
    "For political meetings",
  ];



  // Form validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      service: {},
      //scheme: {},
      aname: "",
      address: "",
      tele: "",
      distance: "",
      taxNo:"",
      email: "",
      password: "",
      password1: "",
      city: "",
      idNumber: "",
      reservationDate: null,
      reservationRequirement: "",
      toolsAndEquipment: "",
     
    },
    validationSchema: Yup.object({
      service: Yup.object().required("Service is required"),
     
      aname: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      password: Yup.string().required("Password is required"),
      password1: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
      idNumber: Yup.string()
    .required('National ID number is required')
    .matches(/^[0-9]{9}[VX][0-9]{2}$|^1[0-9]{11}$/, 'Invalid Sri Lankan NIC format'),
    reservationDate: Yup.date().required('Reservation date is required'),
      tele: Yup.string()
        .required("Telephone number is required")
        .matches(/^[0-9]{10}$/, "Incorrect Telephone number"),
      distance: Yup.number().required("Distance is required"),
      taxNo: Yup.string().required("Tax no is required"),
      email: Yup.string()
        .email("Must be a valid Email")
        .max(255)
        .required("Email is required"),
      }),
      onSubmit: (values) => {

        const data = {

          aname: values.aname,
          address: values.address,
          tele: values.tele,
          idNumber: values.idNumber,
          distance: values.distance,
          taxNo: values.taxNo,
          email: values.email,
          password: values.password,
          scheme: dropdown,
          service: dropdown2,
          reservationDate: values.reservationDate,
        }
        console.log(data)
          WaterSupplyService.addWaterSupplyApply(data)
              .then(async (response) => {
                if (response) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Insert Success .',
                  });
                }




              })
              .catch((e) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error!',
                  text: 'Something Went Wrong.',
                });
              })

      }
    });


//event for dropdown
  const handleDropdown = async e => {
    console.log(e.target.value, "e.target.value1")
    setDropdown(e.target.value)
  }

  const handleDropdown2 = async e => {
    console.log(e.target.value, "e.target.value2")
    setDropdown2(e.target.value)
  }

 

  //--------------------------------------------------
  return (
    <React.Fragment>

      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
     {/*     <Breadcrumbs
            title={props.t("Services")}
            breadcrumbItem={props.t("Water Supply")}
          />*/}
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    {props.t("Napana Auditorium Reservation")}
                  </CardTitle>

                  <Form className="needs-validation"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Applicant Name")} :
                      </Label>
                      <Input
                        name="aname"
                        placeholder="Type your name"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.aname || ""}
                        invalid={
                          validation.touched.aname && validation.errors.aname
                            ? true
                            : false
                        }
                      />
                      {validation.touched.aname && validation.errors.aname ? (
                        <FormFeedback type="invalid">
                          {validation.errors.aname}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Applicant's permanent address")} :
                      </Label>
                      <Input
                        name="address"
                        placeholder="Type your Home Address"
                        type="tel"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.address || ""}
                        invalid={
                          validation.touched.address &&
                          validation.errors.address
                            ? true
                            : false
                        }
                      />
                      {validation.touched.address &&
                      validation.errors.address ? (
                        <FormFeedback type="invalid">
                          {validation.errors.address}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Phone Number")} :
                      </Label>
                      <Input
                        name="tele"
                        placeholder="Type your phone number"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.tele || ""}
                        invalid={
                          validation.touched.tele && validation.errors.tele
                            ? true
                            : false
                        }
                      />
                      {validation.touched.tele && validation.errors.tele ? (
                        <FormFeedback type="invalid">
                          {validation.errors.tele}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("National Identity Card Number")} :
                      </Label>
                      <Input
                        name="idNumber"
                        placeholder="Type your id number"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.idNumber || ""}
                        invalid={
                          validation.touched.idNumber && validation.errors.idNumber
                            ? true
                            : false
                        }
                      />
                      {validation.touched.idNumber && validation.errors.idNumber ? (
                        <FormFeedback type="invalid">
                          {validation.errors.idNumber}
                        </FormFeedback>
                      ) : null}
                    </div>
                                                   
                    <div className="mb-3">
                      <Label className="form-label">
                        {" "}
                        {props.t("Email")} :
                      </Label>
                      <Input
                        name="email"
                        placeholder="Enter Valid Email"
                        type="email"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">
                          {validation.errors.email}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label>{props.t("Password")}:</Label>
                      <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password || ""}
                        invalid={
                          validation.touched.password &&
                          validation.errors.password
                            ? true
                            : false
                        }
                      />
                      {validation.touched.password &&
                      validation.errors.password ? (
                        <FormFeedback type="invalid">
                          {validation.errors.password}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Input
                        name="password1"
                        type="password"
                        placeholder="Re-type Password"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.password1 || ""}
                        invalid={
                          validation.touched.password1 &&
                          validation.errors.password1
                            ? true
                            : false
                        }
                      />
                      {validation.touched.password1 &&
                      validation.errors.password1 ? (
                        <FormFeedback type="invalid">
                          {validation.errors.password1}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {" "}
                        {props.t("Auditorium Reservation Date")} :
                      </Label>
                      <DatePicker
                        selected={validation.values.reservationDate}
                        onChange={(date) =>
                          validation.setFieldValue("reservationDate", date)
                        }
                        onBlur={() =>
                          validation.setFieldTouched("reservationDate", true)
                        }
                        dateFormat="dd/MM/yyyy"
                        className={`form-control ${
                          validation.touched.reservationDate &&
                          validation.errors.reservationDate
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      {validation.touched.reservationDate &&
                      validation.errors.reservationDate ? (
                        <FormFeedback type="invalid">
                          {validation.errors.reservationDate}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Requirement of Auditorium reservation")} :
                      </Label>
                      <Input
                        type="select"
                        name="reservationRequirement"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.reservationRequirement || ""}
                        invalid={
                          validation.touched.reservationRequirement &&
                          validation.errors.reservationRequirement
                            ? true
                            : false
                        }
                      >
                        <option value="">Select Reservation Requirement</option>
                        {reservationRequirements.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Input>
                      {validation.touched.reservationRequirement &&
                      validation.errors.reservationRequirement ? (
                        <FormFeedback type="invalid">
                          {validation.errors.reservationRequirement}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Equipment and tools requested")} :
                      </Label>
                      <Input
                        name="toolsAndEquipment"
                        placeholder="Type your tools and equipment"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.toolsAndEquipment || ""}
                        invalid={
                          validation.touched.toolsAndEquipment &&
                          validation.errors.toolsAndEquipment
                            ? true
                            : false
                        }
                      />
                      {validation.touched.toolsAndEquipment &&
                      validation.errors.toolsAndEquipment ? (
                        <FormFeedback type="invalid">
                          {validation.errors.toolsAndEquipment}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Instructions and conditions to be followed")} :
                      </Label>
                      <div>
                        <ul>
                          <li>Furniture, electrical equipment etc. in the Auditorium should not be damaged or altered.</li>
                          <li>Sentence 2</li>
                          <li>Sentence 3</li>
                          <li>Sentence 4</li>
                          <li>Sentence 5</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3">
                      <Label check>
                        <Input
                          type="checkbox"
                          name="agreement"
                          onChange={(e) => {
                            validation.handleChange(e); 
                            validation.setFieldValue("agreement", e.target.checked); 
                          }}
                          onBlur={validation.handleBlur}
                          checked={validation.values.agreement || false}
                          invalid={
                            validation.touched.agreement &&
                            validation.errors.agreement
                              ? true
                              : false
                          }
                          style={{ border: '1px solid black', marginRight: '8px' }}
                        />
                        
    
                        {props.t(
                          "I would like to emphasize that the following instructions and conditions should be followed while taking the Auditorium, which is operated under the control of the Pathaduumbara Regional Council, on a rental basis."
                        )}
                      </Label>
                      {validation.touched.agreement &&
                      validation.errors.agreement ? (
                        <FormFeedback type="invalid">
                          {validation.errors.agreement}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary">
                        Submit
                      </Button>{" "}
                      <Button type="reset" color="secondary">
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(BookingHallApplication)
