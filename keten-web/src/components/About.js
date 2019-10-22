import React, { Component } from 'react';
import { connect } from 'dva';
import about1 from '../assets/about/3.jpg'

class Goal extends Component {
    render() {
        return (
            <section className="page-section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">An NTHU High-Tech Entrepreneurship Company</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={about1} alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>September 2019</h4>
                                            <h4 className="subheading">Our Beginnings</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">In 2019, KetenTech secured the proper licensing and began the process of planning the new business. KetenTech is now ready to open a company serving the high-end market for blockchain auditing system.</p>
                                        </div>
                                    </div>
                                </li>

                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Be Part
                                            <br />Of Our
                                            <br />Story!
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect()(Goal);