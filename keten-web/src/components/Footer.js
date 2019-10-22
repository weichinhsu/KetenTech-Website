import React, { Component } from 'react';
import _ from 'lodash';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <span className="copyright">Copyright &copy; KetenTech 2019</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;