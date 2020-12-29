import React from 'react';
import './PictureDescription.scss';

function PictureDescription() {
    return (
        <section className="section-picture-description">
                <div className="section__picture-description">
                    <div className="section__picture-description--1">
                        <div className="section__picture-heading">
                            <span className="section__picture-heading--main-1">Become An Associate?</span>
                            <span className="section__picture-heading--sub-1">Sign up today to earn commission on every lead
                                shared.</span>
                        </div>
                        <div className="section__picture-content-1">
                            <span>Join HelpingStartup's ‘Become an Associate’ program if you’re a CA/ CS ,CMAs,
                                Lawyers, Angel Funds, Startups Hubs, Corporates, Business Consultants, Investor. We work
                                on a client revenue share model with professionals by sharing warm leads</span>
                        </div>
                        <div className="section__picture-button">
                            <a href="" className="custom-btn custom-btn--green">Join</a>
                        </div>
                    </div>
                    <div className="section__picture-description--2">
                    </div>
                    <div className="section__picture-description--3">
                        <div className="section__picture-heading">
                            <span className="section__picture-heading--main-3">KNOWLEDGE BASE</span>
                            <span className="section__picture-heading--sub-3">Know every single detail about
                                business and startups</span>
                        </div>
                        <div className="section__picture-content-3">
                            <span>Helping business by sharing the knowledge on
                                how to start and manage your business.</span>
                        </div>
                        <div className="section__picture-button">
                            <a href="" className="custom-btn custom-btn--green">View</a>
                        </div>
                    </div>
                    <div className="section__picture-description--4">
                    </div>
                </div>
            </section>
    )
}

export default PictureDescription
