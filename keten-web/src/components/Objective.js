import React, { Component } from 'react';
import { connect } from 'dva';

class Objective extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="objective">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Objectives</h2>
                            <h3 className="section-subheading text-muted">Company Vision & Mission</h3>
                            <h4 className="section-heading">Vision</h4>
                            <h5 className="section-heading">
                                Using blockchain auditing to make every corporation and individual better do their business
                                with fast, accurate, reliable and secure services.
                            </h5>
                            <hr className="objective_divider my-4"></hr>
                            <h4 className="section-heading">Mission</h4>
                            <h5 className="section-heading">
                            To provide Corporations and CPAs a blockchain auditing system with privacy-preserving transactions and tamper-proof design.

                            </h5>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect()(Objective);