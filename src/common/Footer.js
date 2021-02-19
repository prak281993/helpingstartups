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
          <a href="" className="footer__media-button footer__media-button--facebook">
            <div className="footer__media-icon">
              <i className="fa fa-facebook"></i>
            </div>
            <span>Helping Startup</span>
          </a>
          <div className="footer__media-button footer__media-button--instagram">
            <div className="footer__media-icon">
              <i className="fa fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </div>
          <div className="footer__media-button footer__media-button--twitter">
            <div className="footer__media-icon">
              <i className="fa fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </div>
        </div>
        <div className="footer__copyright">
          <span>&#169; HelpingStartup</span>
        </div>
      </div>
    </footer>
  );
}
