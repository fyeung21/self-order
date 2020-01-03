import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import TableNumber from '../TableNumber/TableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import "./kitchenStyles.css";

const KitchenOrder = () => {
    const [active, setActive] = useState(false)

    handleClick2 = () => {
        setActive(!active)
    }

    const CompleteBtn = () => {
        return (
            <div>
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
                <TableNumber />
            </div>
            <div className="kitCard">
                <KitOrderCard />
                <KitOrderCard />
                <KitOrderCard />
            </div>
            <h3 textalign="center">{"14:40"}</h3> {/* show time when 'done' is pressed */}
            {active ? <CompleteBtn /> : <NotDoneBtn />}
        </div>
    )
}
export default KitchenOrder;