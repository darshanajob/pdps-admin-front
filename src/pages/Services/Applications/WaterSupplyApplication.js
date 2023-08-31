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
import WaterSupplyService, { addWaterSupplyApply as applyWaterSupply } from "../../../services/WaterSupplyService"
//Import Breadcrumb
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
//i18n
import { withTranslation } from "react-i18next"

const WaterSupplyApplication = props => {

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
  const optionGroup1 = [
    {
      label: "Water Projects",
      options: [
        { label: "Punchibodhiya", value: "Punchibodhiya" },
        { label: "Doragamuwa", value: "Doragamuwa" },
        { label: "Girakaduwa", value: "Girakaduwa" },
      ],
    },
  ]



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
     
    },
    validationSchema: Yup.object({
      service: Yup.object().required("Service is required"),
      // scheme: Yup.object()
      //     .shape({
      //       id: Yup.string()
      //           .required('Water Scheme is required'),
      //     }),
      //scheme: Yup.object().required("Water Scheme is required"),
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
          distance: values.distance,
          taxNo: values.taxNo,
          email: values.email,
          password: values.password,
          scheme: dropdown,
          service: dropdown2,
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

 /* const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Implement your payment processing logic using the paymentMethod
    }
  };*/

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
                    {props.t("Water Supply")}
                  </CardTitle>

                  <Form className="needs-validation"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <label>
                      Scheme -{" "}
                      <Input
                          type="select"
                          id="batch"
                          name="batch"
                          className="form-control"
                          value={handleDropdown.id}
                          onChange={handleDropdown}
                      >


                        <option key={1} value={1}>
                          {props.t("New supply")}
                        </option>

                        <option key={2} value={2}>
                          {props.t("New supply")}
                        </option>

                      </Input>
                    </label>

                    <label>
                      Service
                      <Input
                          type="select"
                          id="batch"
                          name="batch"
                          className="form-control"
                          value={handleDropdown2.id}
                          onChange={handleDropdown2}
                      >
                        <option key={1} value={1}>
                          {props.t("New supply")}
                        </option>

                            <option key={2} value={2}>
                              {props.t("New supply")}
                            </option>

                      </Input>
                    </label>
                   {/* <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Service you want")} :{" "}
                      </Label>
                      <select defaultValue="0" className="form-select">
                        <option value="0"> {props.t("New supply")} </option>
                        <option value="1">
                          {props.t("Change existing supply")}
                        </option>
                        <option value="2">
                          {props.t("Change name of the applicant")}
                        </option>
                      </select>
                    </div>*/}
                    {/*<div className="mb-3 ">*/}
                    {/*  <Label className="form-label">*/}
                    {/*    {props.t("Water Scheme")} :*/}
                    {/*  </Label>*/}
                    {/*  <Select*/}
                    {/*      name="scheme"*/}
                    {/*      options={optionGroup1}*/}
                    {/*      className="select2-selection"*/}
                    {/*      isLoading={true}*/}
                    {/*      onChange={validation.handleChange}*/}
                    {/*      onBlur={validation.handleBlur}*/}
                    {/*      value={validation.values.scheme || ""}*/}
                    {/*      invalid={*/}
                    {/*        validation.touched.scheme &&*/}
                    {/*        validation.errors.scheme*/}
                    {/*            ? true*/}
                    {/*            : false*/}
                    {/*      }*/}
                    {/*  />*/}
                    {/*  {validation.touched.scheme &&*/}
                    {/*  validation.errors.scheme ? (*/}
                    {/*      <FormFeedback type="invalid">*/}
                    {/*        {validation.errors.scheme}*/}
                    {/*      </FormFeedback>*/}
                    {/*  ) : null}*/}
                    {/*</div>*/}


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
                        {props.t("Address where water service is required")} :
                      </Label>
                      <Input
                        name="address"
                        placeholder="Type your Home Address"
                        type="text"
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
                        placeholder="Type your Home Address"
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
{/*klsajdfslk*/}
                    {/* <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Purpose of obtaining water service")} :
                      </Label>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="homeUse"
                          value="Home"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="homeUse">
                          {props.t("Household consumption")}
                        </label>
                      </div>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="businessUse"
                          value="Business"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="businessUse"
                        >
                          {props.t("For business")}
                        </label>
                      </div>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="officeUse"
                          value="Office"
                        />
                        <label className="form-check-label" htmlFor="officeUse">
                          {props.t("For office work")}
                        </label>
                      </div>
                      <div className="form-check form-checkbox-outline form-check-primary mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="purpose"
                          id="otherUse"
                          value="Other"
                        />
                        <label className="form-check-label" htmlFor="otherUse">
                          {props.t("Other")}
                        </label>
                      </div>
                    </div> */}

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t(
                          "Distance from the water main to the point of water intake"
                        )}{" "}
                        :
                      </Label>
                      <Input
                        name="distance"
                        placeholder="Type distance from main water supply"
                        type="number"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.distance || ""}
                        invalid={
                          validation.touched.distance &&
                          validation.errors.distance
                            ? true
                            : false
                        }
                      />
                      {validation.touched.distance &&
                      validation.errors.distance ? (
                        <FormFeedback type="invalid">
                          {validation.errors.distance}
                        </FormFeedback>
                      ) : null}
                    </div>

                    {/* <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Nature of residence")} :
                      </Label>
                      <div className="form-check mb-3 mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="residence"
                          id="owner"
                          value="Owner"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="owner">
                          {props.t("Owner")}
                        </label>
                      </div>
                      <div className="form-check mb-3 mb-3 form-controller-distance">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="residence"
                          id="tenant"
                          value="Tenant"
                        />
                        <label className="form-check-label" htmlFor="tenant">
                          {props.t("Tenant")}
                        </label>
                      </div>
                    </div> */}

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Assessment no")} :
                      </Label>
                      <Input
                        name="taxNo"
                        placeholder="Type your assessment no"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.taxNo || ""}
                        invalid={
                          validation.touched.taxNo && validation.errors.taxNo
                            ? true
                            : false
                        }
                      />
                      {validation.touched.taxNo && validation.errors.taxNo ? (
                        <FormFeedback type="invalid">
                          {validation.errors.taxNo}
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

export default withTranslation()(WaterSupplyApplication)
