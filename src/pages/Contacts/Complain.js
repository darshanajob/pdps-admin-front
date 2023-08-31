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
  Form,
  Dropdown,
} from "reactstrap"
import Select from "react-select"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import Swal from "sweetalert2"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
//i18n
import { withTranslation } from "react-i18next"

import ImageUploading from "react-images-uploading"
const Complain = props => {
  //meta title
  document.title = "PDPS"

  //---------------------------------------------
  const [selectService, setService] = useState([])
  const [selectSchema, setSchema] = useState([])
  const [images, setImages] = React.useState([])
  const maxNumber = 3

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }
  // Form validation
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      service: {},
      scheme: {},
      aname: "",
      address: "",
      tele: "",
      distance: "",
      taxNo: "",
      email: "",
      password: "",
      password1: "",
    },

    validationSchema: Yup.object({
      service: Yup.object().required("Service is required"),
      // service: Yup.object().test('is-empty', 'Service is required', (obj) => {
      //   return Object.keys(obj).length !== 0;
      // }),
      scheme: Yup.object().required("Water Scheme is required"),
      // scheme: Yup.object().test('is-empty', 'Water Scheme is required', (obj) => {
      //   return Object.keys(obj).length !== 0;
      // }),
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

    onSubmit: values => {
      //console.log("values", values);
      const data = {
        aname: values.aname,
        address: values.address,
        tele: values.tele,
        distance: values.distance,
        taxNo: values.taxNo,
        email: values.email,
        password: values.password,
        scheme: selectSchema,
        service: selectService,
      }
      console.log(data)
    },
  })
  const handleService = async e => {
    console.log(e.target.value, "e.target.value1")
    setService(e.target.value)
  }

  const handleSchema = async e => {
    console.log(e.target.value, "e.target.value2")
    setSchema(e.target.value)
  }

  const [rows1, setrows1] = useState([{ id: 1 }])

  function handleAddRowNested() {
    const modifiedRows = [...rows1]
    modifiedRows.push({ id: modifiedRows.length + 1 })
    setrows1(modifiedRows)
  }

  function handleRemoveRow(id) {
    if (id !== 1) {
      var modifiedRows = [...rows1]
      modifiedRows = modifiedRows.filter(x => x["id"] !== id)
      setrows1(modifiedRows)
    }
  }

  //--------------------------------------------------

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            title={props.t("Contact us")}
            breadcrumbItem={props.t("Complains")}
          />

          <Row>
            <Col xs="12">
              <Card>
                <CardBody className="service-heading">
                  <CardTitle className="h4 text-lg-center">
                    {props.t("Complains")}
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <Form
                    className="needs-validation"
                    onSubmit={e => {
                      e.preventDefault()
                      validation.handleSubmit()
                      return false
                    }}
                  >
                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Your complain")} :
                      </Label>
                      <Input
                        name="topic"
                        placeholder="Type your complain"
                        type="textarea"
                        rows="4"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.topic || ""}
                        invalid={
                          validation.touched.topic && validation.errors.topic
                            ? true
                            : false
                        }
                      />
                      {validation.touched.topic && validation.errors.topic ? (
                        <FormFeedback type="invalid">
                          {validation.errors.topic}
                        </FormFeedback>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label">
                        {props.t("Photographic evidence")} :
                      </Label>
                      <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          // write your building UI
                          <div className="mb-3">
                            {/*<div className="upload__image-wrapper">*/}
                            <div className="image-upload-button">
                              <button
                                // style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                type="button"
                                className="btn btn-light  w-sm"
                              >
                                <i className="mdi mdi-upload d-block font-size-16"></i>{" "}
                                Upload
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                className="btn btn-danger  w-sm"
                                onClick={onImageRemoveAll}
                              >
                                <i className="mdi mdi-trash-can d-block font-size-16"></i>{" "}
                                Remove all
                              </button>
                            </div>
                            <div className="image-group">
                              {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                  <img
                                    src={image["data_url"]}
                                    alt=""
                                    width="250"
                                    height="220"
                                  />
                                  <div className="image-item__btn-wrapper">
                                    <button
                                      onClick={() => onImageUpdate(index)}
                                    >
                                      <i className="mdi mdi-image-edit"></i>
                                    </button>
                                    <button
                                      onClick={() => onImageRemove(index)}
                                    >
                                      <i className="mdi mdi-close"></i>
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>

                          </div>
                        )}
                      </ImageUploading>
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

export default withTranslation()(Complain)
