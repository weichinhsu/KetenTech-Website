import React, { Component } from 'react';
import { Route, Switch, routerRedux, withRouter, Redirect } from 'dva/router';
import PropTypes from 'prop-types';
import _ from 'lodash';
import HomeLayout from './layouts/HomeLayout';

import Home from './routes/Home';

const { ConnectedRouter } = routerRedux;

class Root extends Component {
    static propTypes = {
        app: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }
    render() {
        const { children } = this.props;
        return children;
    }
}

const route = [
    {
        name:'Home',
        path: '/home',
        component: Home,
    },
];

const RouterRoot = withRouter(_.flow()(Root));

export default (props) => {
    return (
        <ConnectedRouter history={props.history}>
            <RouterRoot {...props}>
                <Switch>
                    <HomeLayout route={route}>
                        <Switch>
                            <Route path="/" exact render={() => (<Redirect to='/home' />)} />
                            {
                                _.map(route, item => (
                                    <Route key={item.path} path={item.path} exact component={item.component} />
                                ))
                            }
                        </Switch>
                    </HomeLayout>
                </Switch>
            </RouterRoot>
        </ConnectedRouter>
    )
}
