import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"


const Navbar = props => {
  const [home, sethome] = useState(false)
  const [about, setabout] = useState(false)
  const [service, setservice] = useState(false)
  const [aproval, setaproval] = useState(false)
  const [license, setlicense] = useState(false)
  const [tax, settax] = useState(false)
  const [other, setother] = useState(false)
  const [download, setdownload] = useState(false)
  const [tender, settender] = useState(false)
  const [gallery, setgallery] = useState(false)
  const [contact, setcontact] = useState(false)
  const [login, setlogin] = useState(false)

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/home"
                  >
                    {/*<i className="bx bx-home-circle me-2"></i>*/}
                    {props.t("Home")} {props.menuOpen}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setabout(!about)
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    {/*<i className="bx bx-customize me-2"></i>*/}
                    {props.t("About Us")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: about })}>
                    <div className="dropdown">
                      <Link
                        to="/citizen-charter"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Citizen Charter")}
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/view-members"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Members")}
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/view-officers"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Officers")}
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setservice(!service)
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    {/*<i className="bx bx-customize me-2"></i>*/}
                    {props.t("Services")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: service })}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setaproval(!aproval)
                        }}
                      >
                        {props.t("Get Approvals")}{" "}
                        
                        <div className="arrow-down"></div>
                      </Link>
                      
                      <div className={classname("dropdown-menu", { show: aproval })}>
                        <Link to="/building-plan" className="dropdown-item">
                          {props.t("Approval of building plans")}
                        </Link>
                        <Link to="/unauth-contstruction" className="dropdown-item">
                          {props.t(
                            "Approval of cover for unauthorized construction"
                          )}
                        </Link>
                        <Link to="/land-subdivison" className="dropdown-item">
                          {props.t(
                            "Approval of land subdivision and consolidation development plans"
                          )}
                        </Link>
                        <Link to="/advertisement-display" className="dropdown-item">
                          {props.t("Issuance of Advertisement Display Permits")}
                        </Link>
                        <Link to="/road-damage" className="dropdown-item">
                          {props.t("Requesting permission to damage roads")}
                        </Link>
                        
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setlicense(!license)
                        }}
                      >
                        {props.t("License & certificates")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: license })}>
                        <Link to="/trade-license" className="dropdown-item">
                          {props.t("Issuance of Trade Licenses")}
                        </Link>
                        <Link to="/environment-protect" className="dropdown-item">
                          {props.t("Environmental Protection Permit")}
                        </Link>
                        <Link to="/threewheel-permit" className="dropdown-item">
                          {props.t("Issuance of three-wheeler parking permits")}
                        </Link>
                        <Link to="/development-permit" className="dropdown-item">
                          {props.t(
                            "Extension of validity of a development permit"
                          )}
                        </Link>
                        <Link to="/compliance-certificate" className="dropdown-item">
                          {props.t("Issuance of Certificate of Compliance")}
                        </Link>
                        <Link to="/street-building-certificate" className="dropdown-item">
                          {props.t(
                            "Issuance of Street Line / Building Limit Certificates"
                          )}
                        </Link>
                        <Link to="/non-expropriation-certificate" className="dropdown-item">
                          {props.t(
                            "Issuance of Non-Expropriation Certificates"
                          )}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          settax(!tax)
                        }}
                      >
                        {props.t("Taxes and rents")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      
                      
                      <div className={classname("dropdown-menu", { show: tax })}>
                        <Link to="/tax-assessment" className="dropdown-item">
                          {props.t("Levy of assessment tax")}
                        </Link>
                        <Link to="/tax-business" className="dropdown-item">
                          {props.t("Collection of business and industry tax")}
                        </Link>
                        <Link to="/tax-entertainment" className="dropdown-item">
                          {props.t(
                            "Collection of entertainment tax and exemption from entertainment tax"
                          )}
                        </Link>
                        <Link to="/tax-land-sales" className="dropdown-item">
                          {props.t("Tax on sale of certain lands")}
                        </Link>
                        <Link to="/rent-halls" className="dropdown-item">
                          {props.t(
                            "Event Halls / Town Halls / Community Halls for rent"
                          )}
                        </Link>
                        <Link to="/rent-backhoe" className="dropdown-item">
                          {props.t("Backhoe machine rental")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setother(!other)
                        }}
                      >
                        {props.t("Other")} <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: other })}>
                        <Link to="/register-property" className="dropdown-item">
                          {props.t(
                            "Registration and amendment of property title"
                          )}
                        </Link>
                        <Link to="/tree-cut" className="dropdown-item">
                          {props.t(
                            "Removal of hazardous conditions caused by trees"
                          )}
                        </Link>
                        <Link to="/water-supply" className="dropdown-item">
                          {props.t("Getting a water supply")}
                        </Link>
                        <Link to="/water-bowser" className="dropdown-item">
                          {props.t("Getting water bowser service")}
                        </Link>
                        <Link to="/garbage-collect" className="dropdown-item">
                          {props.t("Garbage collection")}
                        </Link>
                        <Link to="/street-lamp" className="dropdown-item">
                          {props.t("Street lamp installation and maintenance")}
                        </Link>
                        <Link to="/information-access" className="dropdown-item">
                          {props.t(
                            "Access to information under the Information Act"
                          )}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Projects")}
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setdownload(!download)
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    {/*<i className="bx bx-download me-2"></i>*/}
                    {props.t("Downloads")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: download })}>
                    <div className="dropdown">
                      <Link
                        to="/download-application"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Applications")}
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/download-gazette"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Acts")}
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/download-gazette"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Commitee Reports")}
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setcontact(!contact)
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    {/*<i className="bx bx-download me-2"></i>*/}
                    {props.t("Contact us")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: contact })}>
                    <div className="dropdown">
                      <Link
                        to="/get-in-touch"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Get in touch")}
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/complain"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Complains")}
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      settender(!tender)
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    {/*<i className="mdi mdi-air-filter me-2"></i>*/}
                    {props.t("Tender")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: tender })}>
                    <div className="dropdown">
                      <Link
                        to="/tender-calling"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Tender Calling")}
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/supplier-register"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Supplier Registration")}
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/tender-bidding"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        {props.t("Bidding")}
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/gallery"
                  >
                    {/*<i className="bx bx-images me-2"></i>*/}
                    {props.t("Gallery")}
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/login"
                    target="_bank"
                  >
                    {/*<i className="bx bx-log-in me-2"></i>*/}
                    {props.t("Login")}
                  </Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
