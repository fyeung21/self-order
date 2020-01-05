import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import TableNumber from '../TableNumber/TableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import "./kitchenStyles.css";

const KitchenOrder = ( { order }) => {
    const [active, setActive] = useState(false)

    handleClick2 = () => {
        setActive(!active)
    }

    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    const CompleteBtn = () => {
        return (
            <div>
                <h3>{time}</h3>
                <Button
                    className="doneBtn"
                    basic
                    size="large"
                    color='grey'
                    toggle active={active}
                    onClick={this.handleClick2} >
                    Complete
                </Button>
            </div>
        )
    }
    const NotDoneBtn = () => {
        return (
            <div>
                <Button
                    className="doneBtn"
                    size="large"
                    color='yellow'
                    toggle active={active}
                    onClick={this.handleClick2} >
                    Done
                </Button>
            </div>
        )
    }

    return (
        <div>
            <div className="header">
                <h3>{"14:20"}</h3> {/* time created */}
                <h2>Table#: {order.tableNumber}</h2>
            </div>
            <div className="kitCard">
                {order.items.map((item)=>{
                    return (
                        <KitOrderCard item={item} key={item._id}/>
                    )
                })}
            </div>
            {active ? <CompleteBtn /> : <NotDoneBtn />}
        </div>
    )
}
export default KitchenOrder;