import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import TableNumber from '../TableNumber/TableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import CancelBtn from './CancelBtn';
import { Meteor } from 'meteor/meteor';
import "./kitchenStyles.css";

const KitchenOrder = ( { order }) => {
    const [active, setActive] = useState(false)

    doneClick = () => {
        setActive(!active)
        Meteor.call('activeTables.inActiveTable', order.tableNumber)
    }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    const CompleteBtn = () => {
        return (
            <div>
                <h3>{time}</h3>
                <Button
                    className="btn"
                    basic
                    size="large"
                    color='grey'
                    toggle active={active}
                    onClick={this.doneClick} >
                    Complete
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
            <div className="kitOrderHeader">
                {order.requestBill? 
                <h2>BILL REQUESTED</h2> : 
                <h3>{"14:20"}</h3> 

                }
                <h2>Table#: {order.tableNumber} </h2>
                
            </div>
            <div className="kitCard">
                {order.items.map((item)=>{
                    return (
                        <KitOrderCard order={order} item={item} key={item.item_id}/>
                    )
                })}
            </div>
            {active ? <CompleteBtn /> : <IncompleteBtn />}
            <CancelBtn />
        </div>
    )
}
export default KitchenOrder;