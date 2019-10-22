import React, { Component } from 'react';
import { connect } from 'dva';

class Services extends Component {
    render() {
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Secure Transparent Reliable</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-draw-polygon fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Blockchain Application</h4>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-database fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Database Maintance</h4>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Information Security</h4>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect()(Services);