import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { TableContext } from "../contexts/TableContextProvider"

// route components
import Menu from '../pages/Menu';
import Welcome from '../pages/Welcome';
import MyOrder from '../pages/MyOrder';
import Kitchen from '../pages/Kitchen';
import MenuControl from '../pages/MenuControl';



const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <TableContext.Consumer>
        {({ getTableNumber }) => {
            console.log('table' + getTableNumber)
            return (
                <Router history={browserHistory}>
                    {/* if no table number cookie, go to welcome page */}
                    {getTableNumber === 0 ?
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route exact path="/menu" component={Welcome} />
                            <Route exact path="/welcome" component={Welcome} />
                            <Route exact path="/my-order" component={Welcome} />
                            <Route exact path="/kitchen" component={Kitchen} />
                            <Route exact path="/menu-control" component={MenuControl} />
                            <Redirect from="*" to="/" />
                        </Switch>
                        :
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route exact path="/menu" component={Menu} />
                            <Route exact path="/welcome" component={Welcome} />
                            <Route exact path="/my-order" component={MyOrder} />
                            <Route exact path="/kitchen" component={Kitchen} />
                            <Route exact path="/menu-control" component={MenuControl} />
                            <Redirect from="*" to="/" />
                        </Switch>}

                </Router>
            )
        }}
    </TableContext.Consumer>
);