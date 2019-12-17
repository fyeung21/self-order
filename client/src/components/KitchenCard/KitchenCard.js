import React from 'react';
import { Grid, Image, Card, Modal, Button } from 'semantic-ui-react';
import "./kitCardStyle.css";

const KitchenCard = ({ item }) => {

    return (
        <div>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{"Shrimp Dumplings"}</Card.Header>
                    <Card.Meta>Qty: {"3"}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Ready/Out
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}
export default KitchenCard;