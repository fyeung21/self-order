import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';

// route components
import Menu from '../pages/Menu';
import Welcome from '../pages/Welcome';
import MyOrder from '../pages/MyOrder';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/my-order" component={MyOrder} />
            <Redirect from="*" to="/menu" />
        </Switch>
    </Router>
);