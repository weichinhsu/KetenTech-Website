import React, { Component } from 'react';
import _ from 'lodash';
import animateScrollTo from 'animated-scroll-to';

class Topbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" onClick={()=>animateScrollTo(document.querySelector('#home'))}>KetenTech</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={()=>animateScrollTo(document.querySelector('#services'))}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={()=>animateScrollTo(document.querySelector('#objective'))}>Objectives</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={()=>animateScrollTo(document.querySelector('#about'))}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={()=>animateScrollTo(document.querySelector('#team'))}>Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={()=>animateScrollTo(document.querySelector('#contact'))}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Topbar;