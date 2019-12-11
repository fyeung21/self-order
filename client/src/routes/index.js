import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

// route components
import Menu from '../pages/Menu';
import Welcome from '../pages/Welcome';
import MyOrder from '../pages/MyOrder';
import SingleItem from '../pages/SingleItem';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/my-order" component={MyOrder} />
            <Route exact path="/single-item" component={SingleItem} />
            <Route exact path="/single-item/:itemid" component={SingleItem} />
        </Switch>
    </Router>
);