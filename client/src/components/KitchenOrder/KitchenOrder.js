import React from 'react';
import { Grid, Image, Card, Modal, Button } from 'semantic-ui-react';
import TableNumber from '../../components/tableNumber';
import KitOrderCard from './KitOrderCard/KitOrderCard';
import "./kitchenStyles.css";

const KitchenOrder = ({ item }) => {

    return (
        <div>
            <h3>{"time created 14:20"}</h3>
            <TableNumber />
            <div>
                <KitOrderCard />
                <KitOrderCard />
                <KitOrderCard />
            </div>
            <h3>{"time done 14:40 (will show time when 'done' is pressed)"}</h3>
            <Button basic color="blue">Done</Button>
        </div>
    )
}
export default KitchenOrder;