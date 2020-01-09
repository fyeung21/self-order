import React, { useState } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import TableNumber from '../TableNumber/TableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import CancelBtn from './CancelBtn';
import { Meteor } from 'meteor/meteor';
import "./kitchenStyles.css";

const KitchenOrder = ( { order }) => {
    const [active, setActive] = useState(false)

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

    return (
        <div>
            <Grid className="tableNumber">
                <Grid.Row color="red">
                    <Grid.Column floated='left' width={6}><h3>#: {order.tableNumber} </h3></Grid.Column>
                    <Grid.Column floated='right' width={10}><h3>{"Timer: 12:09"}</h3></Grid.Column>
                </Grid.Row>
            </Grid>
                {/* <h2>BILL REQUESTED</h2> : 
                <h3>{"14:20"}</h3> 
                }
            </div> */}
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