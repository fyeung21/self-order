import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import "./../kitchenStyles.css";

const KitOrderCard = ({item}) => {
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
                <Card.Content className="cardFlex">
                    <div>
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Meta>Qty: {item.qty}</Card.Meta>
                    </div>
                    {active ? <OutBtn /> : <ReadyBtn />}
                </Card.Content>
            </Card>
        </div>
    )

}
export default KitOrderCard;