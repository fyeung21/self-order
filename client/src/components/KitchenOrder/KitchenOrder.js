import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import TableNumber from '../TableNumber/TableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import "./kitchenStyles.css";

const KitchenOrder = () => {
    const [active, setActive] = useState(false)

    doneClick = () => {
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
                    onClick={this.doneClick} >
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
                    onClick={this.doneClick} >
                    Done
                </Button>
            </div>
        )
    }

    return (
        <div>
            <div className="header">
                <h3>{"14:20"}</h3> {/* time created */}
                <TableNumber />
            </div>
            <div className="kitCard">
                <KitOrderCard />
                <KitOrderCard />
                <KitOrderCard />
            </div>
            {active ? <CompleteBtn /> : <NotDoneBtn />}
        </div>
    )
}
export default KitchenOrder;