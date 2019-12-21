import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { TableContext } from "../contexts/TableContextProvider"

// route components
import Menu from '../pages/Menu';
import Welcome from '../pages/Welcome';
import MyOrder from '../pages/MyOrder';
import Kitchen from '../pages/Kitchen';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <TableContext.Consumer> 
        {({getTableNumber})=>{
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
                <Redirect from="*" to="/" />
            </Switch>
                : 
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/my-order" component={MyOrder} />
                <Route exact path="/kitchen" component={Kitchen} />
                <Redirect from="*" to="/" />
            </Switch>}
            
        </Router>
        )
      }}
    </TableContext.Consumer>
    
);