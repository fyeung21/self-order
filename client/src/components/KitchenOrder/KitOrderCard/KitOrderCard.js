import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import "./../kitchenStyles.css";

const KitOrderCard = ({item}) => {
    const [active, setActive] = useState(false)

    handleClick = () => {
        setActive(!active)
    }

    const ReadyBtn = () => {
        return (
            <div>
                <Button
                    floated='right'

                    color='green'
                    toggle active={active}
                    onClick={this.handleClick} >
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
                    onClick={this.handleClick} >
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
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>Qty: {item.qty}</Card.Meta>
                </Card.Content>
            </Card>
        </div>
    )

}
export default KitOrderCard;