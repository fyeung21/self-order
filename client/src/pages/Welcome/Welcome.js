import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';


const Welcome = () => {
  const [tableNumber, setTableNumner] = useState('')
  const history = useHistory();

  const onSubmitTableNumber = () => {
    console.log(tableNumber)
    //call a meteor method located in collections/activeTables.js
    Meteor.call('activeTables.insert', tableNumber )
    // history.push("../pages/Menu")
  };

  const handleChange = (e , {value} ) => {
    // console.log(value)
    setTableNumner(value)
    // console.log(tableNumber)
  }

  return (
    <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='red' textAlign='center'>
        Dim Sum Ordering System
      </Header>
      <Form size='large'>
        <Segment>
          <Form.Input 
          onChange={handleChange}
          value={tableNumber}
          fluid icon='utensils' 
          iconPosition='left' 
          placeholder='Enter a table number' />
          <Button color='red' fluid size='large' onClick={onSubmitTableNumber}>
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
