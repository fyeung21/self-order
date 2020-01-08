import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import "./../kitchenStyles.css";

const KitOrderCard = ({order, item}) => {

    readyClick = (item, order) => {
        Meteor.call('globalOrders.ready', order.orderId, item.item_id)
    }

    outClick = (item, order) => {
        Meteor.call('globalOrders.out', order.orderId, item.item_id)
    }

    const ReadyBtn = ({item, order}) => {
        return (
            <div>
                <Button
                    floated='right'
                    color='green'
                    // toggle active={active}
                    onClick={()=>{this.readyClick(item, order)}} >
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
                    // toggle active={active}
                    onClick={()=>{this.outClick(item, order)}} >
                    Out
                </Button>
            </div>
        )
    }
    const timeFormat = (time) => {
        // console.log(time)
        d = new Date(time)
        return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

    return (
        <div>
            <Card fluid className="kitOrderCard">
                <Card.Content className="cardFlex">
                    <div>
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Meta>Qty: {item.qty}</Card.Meta>
                        {item.orderTime ? 
                        <Card.Meta>Added: {timeFormat(item.orderTime)}</Card.Meta> 
                        :
                        <Card.Meta>Added: Not yet.</Card.Meta>
                        } 
                    </div>
                    {(item.orderTime && !item.ready) ? 
                        <ReadyBtn order={order} item={item}/>
                    : null }
                    {(item.orderTime && item.ready) ? 
                        <OutBtn order={order} item={item}/> 
                    : null }
                </Card.Content>
            </Card>
        </div>
    )

}
export default KitOrderCard;