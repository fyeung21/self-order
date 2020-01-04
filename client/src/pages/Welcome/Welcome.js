import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor';
import TableNumber from "../../components/TableNumber";
import OrderId from '../../components/OrderId';
import { TableContext } from '../../contexts/TableContextProvider'
import { OrderIdContext } from '../../contexts/OrderIdContextProvider'
import "./styles.css";


const Welcome = () => {
  const [tableNumber, setTableNumner] = useState('')

  const history = useHistory();

  const  onSubmitTableNumber = () => {
    //call a meteor method located in collections/activeTables.js
    //submit a tableNumber to this method, 
    //then return the current orderId in promise.
    return new Promise ((resolve, reject) => {
      Meteor.call('activeTables.insert', tableNumber, 
      (error, result) => {
        if (error) {
          reject(console.log(error))
          // handle error
        }
        else { //success
          console.log('Current order ID?: ' + result);
          resolve(result) 
          history.push("./Menu")
        }
      }
    )
    })
  };

  const handleChange = (e) => {
    setTableNumner(e.target.value)
  }

  return (
    <OrderIdContext.Consumer>
    {({updateOrderId}) => (
    <TableContext.Consumer>
      {({ updateTableNumber, currentOrderId }) => {
        return (
          <div>
            <div className="orderContent">
            <span className="orderId"><OrderId className="orderId"/></span>
            <span><TableNumber /></span>
          </div>
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
                      //this function call a meteor method 
                      //to set the table number to the server
                      //then return an order id
                      onSubmitTableNumber()
                      .then((result) => {
                        console.log('promise ' + result)
                        updateOrderId(result) //this function update the order ID in TableContext
                        updateTableNumber(tableNumber)//this function update the table number in TableContext
                      }) 
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
    )}
    </OrderIdContext.Consumer>
  );
};

export default Welcome;
