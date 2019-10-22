import React, { Component } from 'react';
import _ from 'lodash';
import Map from './Map'
class Contact extends Component {
    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">An NTHU High-Tech Entrepreneurship Company</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div style={{ height: 400, width: 500, marginRight:20 }}><Map /></div>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="section-heading">Our E-mail</h4>
                            <h5 className="section-heading">ketentech@gmail.com</h5>
                            <hr className="divider my-4"></hr>
                            <h4 className="section-heading">Address</h4>
                            <h5 className="section-heading">No.101, Sec.2, Kuang-Fu Rd, Hsinchu City</h5>
                            <h5 className="section-heading">Taiwan 30013, R.O.C.</h5>
                            <hr className="divider my-4"></hr>
                            <h4 className="section-heading">Social Media</h4>
                            <h5 className="section-heading">Facebook Keten 凱盾科技</h5>
                            
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Contact;