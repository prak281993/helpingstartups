import React from 'react';
import './CustomerFeedback.scss';

function CustomerFeedback() {
    return (
        <section className="section-customerfeedback">
                <div className="section__customerfeedback">
                    <div className="section__customerfeedback-header">
                        <h1>Customer Says</h1>
                    </div>
                    <div id="customer-testimonial" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                          </ol>
                        <div className="carousel-inner">
                          <div className="section__customerfeedback-slidecontainer carousel-item active" data-interval="2000">
                            <div className="section__customerfeedback-slide">
                                <span className="section__customerfeedback-slide-comment">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi vitae, asperiores, eius earum a ipsam delectus</p>
                                </span>
                                <span className="section__customerfeedback-slide-customer">
                                    <p>Bruce Wayne</p>
                                </span>
                            </div>
                          </div>
                          <div className="section__customerfeedback-slidecontainer carousel-item" data-interval="2000">
                            <div className="section__customerfeedback-slide">
                                <span className="section__customerfeedback-slide-comment">
                                    <p>Veritatis laboriosam omnis, velit eius vel facere libero quo expedita id quidem, eos sunt molestias porro maiores, illum consectetur aliquam saepe delectus!</p>
                                </span>
                                <span className="section__customerfeedback-slide-customer">
                                    <p>Bryan Adams</p>
                                </span>
                            </div>
                          </div>
                          <div className="section__customerfeedback-slidecontainer carousel-item" data-interval="2000">
                            <div className="section__customerfeedback-slide">
                                <span className="section__customerfeedback-slide-comment">
                                    <p>Atque, debitis! Molestias, accusamus omnis provident quidem ex culpa nulla repudiandae repellat nihil ducimus maiores enim, autem voluptate. Voluptates cupiditate atque dolor?</p>
                                </span>
                                <span className="section__customerfeedback-slide-customer">
                                    <p>Jonathan Jones</p>
                                </span>
                            </div>
                          </div>
                          <div className="section__customerfeedback-slidecontainer carousel-item" data-interval="2000">
                            <div className="section__customerfeedback-slide">
                                <span className="section__customerfeedback-slide-comment">
                                    <p>Accusamus omnis provident quidem ex culpa nulla repudiandae repellat nihil ducimus maiores enim, autem voluptate. Voluptates cupiditate atque dolor?</p>
                                </span>
                                <span className="section__customerfeedback-slide-customer">
                                    <p>Robert James</p>
                                </span>
                            </div>
                          </div>
                        </div>
                        <a className="carousel-control-prev" href="#customer-testimonial" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#customer-testimonial" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                </div>
            </section>
    )
}

export default CustomerFeedback
