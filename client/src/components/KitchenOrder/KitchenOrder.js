import React, { useState, useEffect } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import TableNumber from '../TableNumber/TableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import CancelBtn from './CancelBtn';
import { Meteor } from 'meteor/meteor';
import "./kitchenStyles.css";

const KitchenOrder = ( { order }) => {
    const [active, setActive] = useState(false)
    const [billColor, setBillColor] = useState("blue")

    // const sortedItems = () => {
    const sortedItems = order.items.sort((a, b)=>{
            let comparison = 0;
            if (a.orderTime > b.orderTime) {
              comparison = -1;
            } else if (a.orderTime < b.orderTime) {
              comparison = 1;
            }
            console.log(comparison)
            return comparison;
          }
        )
    // }
    

    doneClick = () => {
        setActive(!active)
        Meteor.call('activeTables.inActiveTable', order.tableNumber)
    }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    const CompleteBtn = () => {
        return (
            <div>
                {/* <h3>{time}</h3> */}
                <Button
                    className="btn"
                    basic
                    color='red'
                    toggle active={active}
                    onClick={this.doneClick} >
                    Completed
                </Button>
            </div>
        )
    }
    const IncompleteBtn = () => {
        return (
            <div>
                <Button
                    className="btn"
                    size="large"
                    color='yellow'
                    toggle active={active}
                    onClick={this.doneClick} >
                    Done
                </Button>
            </div>
        )
    }
    // useEffect(()=>{
    //     if (order.requestBill === 'Paid'){
    //         setBillColor('orange')
    //     }
    //     if (order.requestBill === 'Bill Requested'){
    //         setBillColor('orange')
    //     }
    // },[order.requestBill])

    return (
        <div>
            <Grid className="tableNumber">
            {order.requestBill == "Refill tea" ? 
                <Grid.Row color='orange' textAlign="center">
                    <Grid.Column><h3>{order.requestBill}</h3></Grid.Column>
                </Grid.Row> : null 
                }
                {order.requestBill == "Call the server" ? 
                <Grid.Row color='orange' textAlign="center">
                    <Grid.Column><h3>{order.requestBill}</h3></Grid.Column>
                </Grid.Row> : null 
                }
                {order.requestBill == "Birthday" ? 
                <Grid.Row color='orange' textAlign="center">
                    <Grid.Column><h3>{order.requestBill}</h3></Grid.Column>
                </Grid.Row> : null 
                }
                {order.requestBill == "Bill requested" ? 
                <Grid.Row color='blue' textAlign="center">
                    <Grid.Column><h3>{order.requestBill}</h3></Grid.Column>
                </Grid.Row> : null 
                }
                {order.requestBill == "Paid" ? 
                <Grid.Row color='green' textAlign="center">
                    <Grid.Column><h3>{order.requestBill}</h3></Grid.Column>
                </Grid.Row> : null 
                }
                <Grid.Row color="red">
                    <Grid.Column floated='left' width={6}><h3>#: {order.tableNumber} </h3></Grid.Column>
                    <Grid.Column floated='right' width={10}><h3>{"Timer: 12:09"}</h3></Grid.Column>
                </Grid.Row>
            </Grid>
            <div className="kitCard">
                {sortedItems.map((item)=>{
                    //sort the array by date
                    return (
                        <KitOrderCard order={order} item={item} key={item.item_id}/>
                    )
                })}
            </div>

            <CompleteBtn />
            {/* {active ?  : <IncompleteBtn />}
            <CancelBtn /> */}
        </div>
    )
}
export default KitchenOrder;