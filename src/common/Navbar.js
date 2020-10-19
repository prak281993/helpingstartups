import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const toggleMenu = () => {
    const menuLines = document.querySelector(".customnavbar__menu-lines");
    menuLines.addEventListener("click", function () {
      document
        .querySelector(".customnavbar__nav")
        .classList.toggle("nav-visible");
      document
        .querySelector(".customnavbar__list")
        .classList.toggle("nav-active");
      const navLinks = document.querySelectorAll(".customnavbar__item");
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });

      // display close icon
      menuLines.classList.toggle("toggle");
    });
  };
  return (
    <div className="customnavbar">
      <div className="customnavbar__logo-container">
        <h4>HelpingStartups</h4>
      </div>
      <div className="customnavbar__nav">
        <ul className="customnavbar__list">
          <li className="customnavbar__item customnavbar__list--item1">
            <Link className="customnavbar__link" to="/">
              Home
            </Link>
          </li>
          <li className="customnavbar__item customnavbar__list--item2">
            <a className="customnavbar__link">
              Services
            </a>
            <ul className="customnavbar__submenu">
              <ul className="customnavbar__submenu-list">
                <h4 className="customnavbar__submenu-list-header">
                  START A BUSINESS
                </h4>
                <li className="customnavbar__submenu-list-item">
                  <Link to="/private-limited">Private Limited Company</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Limited Liability Partnership</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">One Person Company</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Partnership Firm</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Proprietorship Firm</Link>
                </li>
              </ul>
              <ul className="customnavbar__submenu-list">
                <h4 className="customnavbar__submenu-list-header">
                  TRADEMARK & COPYRIGHT
                </h4>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Trademark Registration</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Trademark Objection</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Trademark Assignment</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Trademark Renewal</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Copyright Registration</Link>
                </li>
              </ul>
              <ul className="customnavbar__submenu-list">
                <h4 className="customnavbar__submenu-list-header">
                  GOVT & TAX REGISTRATION
                </h4>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">GST Registration</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">TDS Return</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Importer Exporter Code</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Professional Tax Registration</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Shops & Establishments Registration</Link>
                </li>
              </ul>
              <ul className="customnavbar__submenu-list">
                <h4 className="customnavbar__submenu-list-header">
                  LEGAL DOCUMENTATION
                </h4>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Non-Disclosure Agreement</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Founders Agreement</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Term Sheet</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Shareholders Agreement</Link>
                </li>
                <li className="customnavbar__submenu-list-item">
                  <Link href="">Share Purchase Agreement</Link>
                </li>
              </ul>
            </ul>
          </li>
          <li className="customnavbar__item customnavbar__list--item3">
            <Link className="customnavbar__link" href="#">
              About us
            </Link>
          </li>
          <li className="customnavbar__item customnavbar__list--item4">
            <Link className="customnavbar__link" href="#">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
      <div className="customnavbar__menu-lines">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Navbar;
