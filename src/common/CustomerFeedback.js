import React from "react";
import "./CustomerFeedback.scss";

function CustomerFeedback() {
  return (
    <section className="section-customerfeedback">
      <div className="section__customerfeedback">
        <div className="section__customerfeedback-header">
          <h1>Customer Says</h1>
        </div>
        <div
          id="customer-testimonial"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
          </ol>
          <div className="carousel-inner">
            <div
              className="section__customerfeedback-slidecontainer carousel-item active"
              data-interval="2000"
            >
              <div className="section__customerfeedback-slide">
                <span className="section__customerfeedback-slide-comment">
                  <p>
                    Thanking Helping Startup and its team for quickly setting up
                    my Company in just one week.
                  </p>
                  <p>You Guys did great job!! Keep it up.</p>
                </span>
                <span className="section__customerfeedback-slide-customer">
                  <p>-Anuj Jain</p>
                </span>
              </div>
            </div>
            <div
              className="section__customerfeedback-slidecontainer carousel-item"
              data-interval="2000"
            >
              <div className="section__customerfeedback-slide">
                <span className="section__customerfeedback-slide-comment">
                  <p>
                    Our experience with Helping Startup is awesome, their
                    Service Delivery is mind-blowing.
                  </p>
                </span>
                <span className="section__customerfeedback-slide-customer">
                  <p>-Ritoo Mittal</p>
                </span>
              </div>
            </div>
            <div
              className="section__customerfeedback-slidecontainer carousel-item"
              data-interval="2000"
            >
              <div className="section__customerfeedback-slide">
                <span className="section__customerfeedback-slide-comment">
                  <p>
                    As a layman I was not aware how to protect my Brand. Helping
                    Startup team has not only helped us getting our Trademark
                    registered but have explained each and every thing about
                    TRademark such as class, categories for business, type of
                    trademark etc. Really had a great experience!
                  </p>
                </span>
                <span className="section__customerfeedback-slide-customer">
                  <p>-Apoorv Mishra</p>
                </span>
              </div>
            </div>
            <div
              className="section__customerfeedback-slidecontainer carousel-item"
              data-interval="2000"
            >
              <div className="section__customerfeedback-slide">
                <span className="section__customerfeedback-slide-comment">
                  <p>
                    Team Helping Startup and specially Ankita Ji have
                    continuously helped us for the compliance of our Company
                    including registrations and GST filing from last 2 years.
                  </p>
                </span>
                <span className="section__customerfeedback-slide-customer">
                  <p>-Prateek Asthana</p>
                </span>
              </div>
            </div>
            <div
              className="section__customerfeedback-slidecontainer carousel-item"
              data-interval="2000"
            >
              <div className="section__customerfeedback-slide">
                <span className="section__customerfeedback-slide-comment">
                  <p>
                    They keep track of each and every compliance and keep us and
                    our management informed and updated, Thanks.
                  </p>
                </span>
                <span className="section__customerfeedback-slide-customer">
                  <p>-Pranav Kaushal</p>
                </span>
              </div>
            </div>
            <div
              className="section__customerfeedback-slidecontainer carousel-item"
              data-interval="2000"
            >
              <div className="section__customerfeedback-slide">
                <span className="section__customerfeedback-slide-comment">
                  <p>
                    Helping startup is a platform we recommend for stress free
                    work be it Company registration, be it Taxation Compliance
                    be it Legal or be it Trademark registration.
                  </p>
                </span>
                <span className="section__customerfeedback-slide-customer">
                  <p>-Ankita Gupta</p>
                </span>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#customer-testimonial"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#customer-testimonial"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CustomerFeedback;
