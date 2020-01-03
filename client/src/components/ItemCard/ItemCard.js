import React, { useState } from 'react';
import { Grid, Image, Card, Modal } from 'semantic-ui-react';
import ItemOrderForm from '../ItemOrderForm/index';
import "./itemCardStyle.css";


const ItemCard = ({ item }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const handleClose = () => { setModalOpen(false) }
    const handleOpen = () => { setModalOpen(true) }

    return (
        <Modal dimmer='blurring' open={modalOpen} trigger={
            <Grid.Column item={item.name}>
                <Card fluid
                    onClick={handleOpen}>
                    <Image className="img" src={item.imgurl} />
                    <Card.Content>
                        <div className="title">{item.name}</div>
                        <div className="price">${item.price} / <span className="pcs">{item.pcs}pcs</span></div>
                    </Card.Content>
                </Card>
            </Grid.Column>
        }>
            <ItemOrderForm 
                item={item} 
                modalOpen={handleClose} 

            />
        </Modal>
    )
}
export default ItemCard;