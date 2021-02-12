import { Auth } from "aws-amplify";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import "./NavbarDemo.scss";
import UserProfile from "./UserProfile";

export default function NavbarDemo() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const user = useContext(UserContext);

  return (
    <div className="customnav">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm fixed-top">
        <Link to="/" className="navbar-brand font-weight-bold mr-auto">
          HelpingStartup
        </Link>
        <div
          id="navbarContent"
          className="navbarContent collapse navbar-collapse order-sm-12 order-lg-1"
        >
          <ul className="navbar-nav ml-auto">
            <li onMouseOver={() => setShowMegaMenu(false)} className="nav-item">
              <Link to="/" className="nav-link font-weight-bold text-uppercase">
                Home
              </Link>
            </li>
            <li
              onMouseOver={() => setShowMegaMenu(true)}
              className="nav-item dropdown megamenu"
            >
              <span
                id="megamenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link dropdown-toggle font-weight-bold text-uppercase"
              >
                Services
              </span>
              <div
                aria-labelledby="megamenu"
                className={`dropdown-menu border-0 p-0 m-0 ${
                  showMegaMenu ? "show" : ""
                }`}
              >
                <div className="container-fluid bg-dark">
                  <div
                    onMouseLeave={() => setShowMegaMenu(false)}
                    className="submenu row text-light rounded-0 m-0 shadow-sm"
                  >
                    <div className="col-12">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-sm-6 col-lg-3 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              START A BUSINESS
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <Link
                                  to="/private-limited"
                                  className="nav-link text-small pb-0"
                                >
                                  Private Limited Company
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/limited-liability"
                                  className="nav-link text-small pb-0 "
                                >
                                  Limited Liability Company
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/one-person-company"
                                  className="nav-link text-small pb-0 "
                                >
                                  One Person Company
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/partnership-firm"
                                  className="nav-link text-small pb-0 "
                                >
                                  Partnership Firm
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/proprietorship-firm"
                                  className="nav-link text-small pb-0 "
                                >
                                  Proprietorship Firm
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 col-lg-3 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              TRADEMARK & COPYRIGHT
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <Link
                                  to="/trademark-registration"
                                  className="nav-link text-small pb-0 "
                                >
                                  Trademark Registration
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/trademark-objection"
                                  className="nav-link text-small pb-0 "
                                >
                                  Trademark Objection
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/trademark-assignment"
                                  className="nav-link text-small pb-0 "
                                >
                                  Trademark Assignment
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/trademark-renewal"
                                  className="nav-link text-small pb-0 "
                                >
                                  Trademark Renewal
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/copyright-registration"
                                  className="nav-link text-small pb-0 "
                                >
                                  Copyright Registration
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 col-lg-3 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              GOVT & TAX REGISTRATION
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  GST Registration
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  TDS Return
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Importer Exporter Code
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Professional Tax Registration
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Shops & Establishments Registration
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 col-lg-3 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              LEGAL DOCUMENTATION
                            </h6>
                            <ul className="list-unstyled">
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Non-Disclosure Agreement
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Founders Agreement
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Term Sheet
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Shareholders Agreement
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/"
                                  className="nav-link text-small pb-0 "
                                >
                                  Share Purchase Agreement
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li onMouseOver={() => setShowMegaMenu(false)} className="nav-item">
              <Link to="/" className="nav-link font-weight-bold text-uppercase">
                About Us
              </Link>
            </li>
            <li onMouseOver={() => setShowMegaMenu(false)} className="nav-item">
              {!user ? (
                <span
                  onClick={() => Auth.federatedSignIn()}
                  className="nav-link font-weight-bold text-uppercase"
                >
                  Sign in
                </span>
              ) : (
                <span className="nav-link font-weight-bold text-uppercase">
                  <UserProfile />
                </span>
              )}
            </li>
          </ul>
        </div>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler order-md-1"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}
