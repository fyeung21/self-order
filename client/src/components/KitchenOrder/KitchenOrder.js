import React from 'react';
import { Button } from 'semantic-ui-react';
import TableNumber from '../TableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import "./kitchenStyles.css";

const KitchenOrder = () => {

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
            <Button size="large" basic color="red" className="doneBtn">Done</Button>
        </div>
    )
}
export default KitchenOrder;