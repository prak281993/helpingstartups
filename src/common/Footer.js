import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer__heading">
          <h1>Follow Us</h1>
        </div>
        <div className="footer__media">
          <a
            target="_blank"
            href="https://www.facebook.com/helpingstartup.in/"
            className="footer__media-button footer__media-button--facebook"
          >
            <div className="footer__media-icon">
              <i className="fa fa-facebook"></i>
            </div>
            <span>Facebook</span>
          </a>
          <a
            className="footer__media-button footer__media-button--instagram"
            href="#"
          >
            <div className="footer__media-icon">
              <i className="fa fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
          <a
            className="footer__media-button footer__media-button--twitter"
            href="#"
          >
            <div className="footer__media-icon">
              <i className="fa fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </a>
        </div>
        <div className="footer__copyright">
          <span>&#169; HelpingStartup</span>
        </div>
      </div>
    </footer>
  );
}
