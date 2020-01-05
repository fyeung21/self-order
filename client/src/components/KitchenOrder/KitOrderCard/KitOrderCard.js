import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import "./../kitchenStyles.css";

const KitOrderCard = () => {
    const [active, setActive] = useState(false)

    readyClick = () => {
        setActive(!active)
    }

    const ReadyBtn = () => {
        return (
            <div>
                <Button
                    floated='right'

                    color='green'
                    toggle active={active}
                    onClick={this.readyClick} >
                    Ready
                </Button>
            </div>
        )

    }

    const OutBtn = () => {
        return (
            <div>
                <Button
                    floated='right'
                    basic
                    color='red'
                    toggle active={active}
                    onClick={this.readyClick} >
                    Out
                </Button>
            </div>
        )
    }


    return (
        <div>
            <Card fluid className="kitOrderCard">
                <Card.Content>
                    {active ? <OutBtn /> : <ReadyBtn />}
                    <Card.Header>{"shrimp dumplings"}</Card.Header>
                    <Card.Meta>Qty: {"3"}</Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )

}
export default KitOrderCard;