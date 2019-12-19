import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import "./../kitchenStyles.css";

const KitOrderCard = ({ item }) => {

    return (
        <div>
            <Card fluid className="kitOrderCard">
                <Card.Content>
                    <Button floated='right' basic color='green'>
                        Ready/Out
                        </Button>
                    <Card.Header>{"shrimp dumplings"}</Card.Header>
                    <Card.Meta>Qty: {"3"}</Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )
}
export default KitOrderCard;