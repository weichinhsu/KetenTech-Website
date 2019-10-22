import React, { Component } from 'react'
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'

class HomeLayout extends Component {

  changeRoute = (route) => {
    this.props.dispatch(routerRedux.push(route))
  }
  render() {
    const { children, route } = this.props
    console.log(children)
    return (
      <div id="page-top">
        <Topbar />
        {children}
        <Footer />
      </div>
    )
  }
}

export default connect()(HomeLayout)