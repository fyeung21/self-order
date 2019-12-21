import { Meteor } from 'meteor/meteor';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from './src/routes';
import { Container } from 'semantic-ui-react'
import './main.css'
import TableContextProvider from './src/contexts/TableContextProvider';

const App = () => {
  return(
    <Container style={{ margin: 20 }}>
      <TableContextProvider>
        {renderRoutes()}
      </TableContextProvider>
    </Container>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react-target'));
});