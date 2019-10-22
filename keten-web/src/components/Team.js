import React, { Component } from 'react';
import _ from 'lodash';
import winnie from '../assets/winnie.jpg'
import dylan from '../assets/dylan.jpg'
import mercy from '../assets/mercy.jpg'
import rayhung from '../assets/rayhung.jpg'
import oliver from '../assets/oliver.jpg'

class Team extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">This is us.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={winnie} alt="" />
                            <h4>Weichin Hsu</h4>
                            <p className="text-muted">Chief Operation Officer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={mercy} alt="" />
                            <h4>Mercy Lee</h4>
                            <p className="text-muted">Chief Marketing Officer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={dylan} alt="" />
                            <h4>Dylan Liu</h4>
                            <p className="text-muted">Chief Executve Officer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={rayhung} alt="" />
                            <h4>Rayhung kao</h4>
                            <p className="text-muted">Chief Technology Officer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={oliver} alt="" />
                            <h4>Oliver Lin</h4>
                            <p className="text-muted">Chief Financial Officer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Team;