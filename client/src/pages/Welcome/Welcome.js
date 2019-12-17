import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import styles from "./styles";

const Welcome = () => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("../pages/Menu");
  };
  return (
    <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='red' textAlign='center'>
        Dim Sum Ordering System
      </Header>
      <Form size='large'>
        <Segment>
          <Form.Input fluid icon='utensils' iconPosition='left' placeholder='PASSCODE' />
          <Button color='red' fluid size='large' onClick={clickHandler}>
            GO TO MENU
          </Button>
        </Segment>
      </Form>
      {/* <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message> */}
    </Grid.Column>
  </Grid>
  );
};
export default Welcome;
