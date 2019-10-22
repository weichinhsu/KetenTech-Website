import React, { Component } from 'react';
import { connect } from 'dva';
import animateScrollTo from 'animated-scroll-to';
import Team from '../components/Team'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Objective from '../components/Objective'
import About from '../components/About'

class Home extends Component {
    render() {
        return (
            <div>
                <header className="masthead" id="home">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Welcome To Our Studio!</div>
                            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" onClick={()=>animateScrollTo(document.querySelector('#services'))}>Tell Me More</a>
                        </div>
                    </div>
                </header>
                <Services/>
                <Objective/>
                <About/>
                <Team/>
                <Contact/>
            </div>
        );
    }
}

export default connect()(Home);
