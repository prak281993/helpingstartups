import React from 'react';
import './CustomerFeedback.scss';

function CustomerFeedback() {
    return (
        <section class="section-customerfeedback">
                <div class="section__customerfeedback">
                    <div class="section__customerfeedback-header">
                        <h1>Customer Says</h1>
                    </div>
                    <div id="customer-testimonial" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                          </ol>
                        <div class="carousel-inner">
                          <div class="section__customerfeedback-slidecontainer carousel-item active" data-interval="2000">
                            <div class="section__customerfeedback-slide">
                                <span class="section__customerfeedback-slide-comment">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi vitae, asperiores, eius earum a ipsam delectus</p>
                                </span>
                                <span class="section__customerfeedback-slide-customer">
                                    <p>Bruce Wayne</p>
                                </span>
                            </div>
                          </div>
                          <div class="section__customerfeedback-slidecontainer carousel-item" data-interval="2000">
                            <div class="section__customerfeedback-slide">
                                <span class="section__customerfeedback-slide-comment">
                                    <p>Veritatis laboriosam omnis, velit eius vel facere libero quo expedita id quidem, eos sunt molestias porro maiores, illum consectetur aliquam saepe delectus!</p>
                                </span>
                                <span class="section__customerfeedback-slide-customer">
                                    <p>Bryan Adams</p>
                                </span>
                            </div>
                          </div>
                          <div class="section__customerfeedback-slidecontainer carousel-item" data-interval="2000">
                            <div class="section__customerfeedback-slide">
                                <span class="section__customerfeedback-slide-comment">
                                    <p>Atque, debitis! Molestias, accusamus omnis provident quidem ex culpa nulla repudiandae repellat nihil ducimus maiores enim, autem voluptate. Voluptates cupiditate atque dolor?</p>
                                </span>
                                <span class="section__customerfeedback-slide-customer">
                                    <p>Jonathan Jones</p>
                                </span>
                            </div>
                          </div>
                          <div class="section__customerfeedback-slidecontainer carousel-item" data-interval="2000">
                            <div class="section__customerfeedback-slide">
                                <span class="section__customerfeedback-slide-comment">
                                    <p>Accusamus omnis provident quidem ex culpa nulla repudiandae repellat nihil ducimus maiores enim, autem voluptate. Voluptates cupiditate atque dolor?</p>
                                </span>
                                <span class="section__customerfeedback-slide-customer">
                                    <p>Robert James</p>
                                </span>
                            </div>
                          </div>
                        </div>
                        <a class="carousel-control-prev" href="#customer-testimonial" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#customer-testimonial" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
                </div>
            </section>
    )
}

export default CustomerFeedback
