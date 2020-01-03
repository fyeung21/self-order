import { Meteor } from 'meteor/meteor';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useHistory } from 'react-router-dom'
import { renderRoutes } from './src/routes';
import { Container } from 'semantic-ui-react'
import './main.css'
import TableContextProvider from './src/contexts/TableContextProvider';
import OrderIdContextProvider from './src/contexts/OrderIdContextProvider';

const App = () => {
  return(
    <BrowserRouter>
      <Container style={{ margin: 20 }}>
        <TableContextProvider>
          <OrderIdContextProvider>
            {renderRoutes()}
          </OrderIdContextProvider>
        </TableContextProvider>
      </Container>
    </BrowserRouter>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react-target'));
});
