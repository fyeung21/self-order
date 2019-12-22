import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import TableNumber from "../../components/TableNumber";
import { TableContext } from '../../contexts/TableContextProvider'


const Welcome = () => {
  const [tableNumber, setTableNumner] = useState('')
  const history = useHistory();

  const onSubmitTableNumber = () => {
    console.log('onSubmitTableNumber' + tableNumber)

    //call a meteor method located in collections/activeTables.js
    //submit a tableNumber to this method, 
    //then return the current orderId
    Meteor.call('activeTables.insert', tableNumber, 
      (error, result) => {
        if (error) {
          // handle error
        }
        else {
          console.log('!!!' + result);
        }
      }
    )
    history.push("./Menu")
  };

  const handleChange = (e) => {
    setTableNumner(e.target.value)
  }

  return (
    <TableContext.Consumer>
      {({ updateTableNumber }) => {
        return (
          <div>
            <TableNumber />
            <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='red' textAlign='center'>
                  Dim Sum Ordering System
                </Header>
                <Form size='large'>
                  <Segment>
                    <Form.Input
                      onChange={e => {
                        handleChange(e)
                        // updateTableNumber(tableNumber)
                        }
                      }
                      value={tableNumber}
                      fluid icon='utensils'
                      iconPosition='left'
                      placeholder='Enter a table number' 
                    />
                    <Button color='red' fluid size='large' onClick={() => {
                      onSubmitTableNumber() //this function call meteor method to set the table number to the server
                      updateTableNumber(tableNumber) //this function update the table number in TableContext
                      }
                    }>
                      GO TO MENU
                    </Button>
                  </Segment>
                </Form>
              </Grid.Column>
            </Grid>
          </div>
        )
      }}
    </TableContext.Consumer>
  );
};

export default Welcome;
