import React from 'react';
import { Grid, Image, Card, Modal } from 'semantic-ui-react';
import ItemOrderForm from '../ItemOrderForm/index';
import "./itemCardStyle.css";


const ItemCard = ({ item }) => {
    const handleOpenItemOrderForm = () => {
        console.log('open')
    }
    return (
        <Modal dimmer='blurring' trigger={
            <Grid.Column item={item.name}>
                <Card fluid
                    onClick={handleOpenItemOrderForm}>
                    <Image src={item.imgurl} />
                    <Card.Content>
                        <div className="title">{item.name}</div>
                        <div className="price">${item.price} / <span className="pcs">{item.pcs}pcs</span></div>
                    </Card.Content>
                </Card>
            </Grid.Column>
        }>
            <ItemOrderForm item={item} />
        </Modal>
    )
}
export default ItemCard;