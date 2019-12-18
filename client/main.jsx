import { Meteor } from 'meteor/meteor';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from './src/routes';
import { Container } from 'semantic-ui-react'
import './main.css'

const App = () => {
  return(
    <Container style={{ margin: 20 }}>
        {renderRoutes()}
    </Container>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react-target'));
});