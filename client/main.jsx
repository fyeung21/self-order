// import React from 'react';
import { Meteor } from 'meteor/meteor';
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { renderRoutes } from './src/routes';
import { Container, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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