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
            <Grid.Column item={item.nameEng}>
                <Card fluid
                    onClick={handleOpen}>
                    <Image className="img" src={item.imgurl} />
                    <Card.Content>
                        <div className="div.eng-title">{item.categoryName}</div>
                        {/* {item.nameChi == 'null' ? 0 : <div className="title">{item.nameChi}</div>} */}
                        <div className="title">{item.nameEng}</div>
                        {item.price == 0 ? 
                            <div className="price">{item.pcs} pc(s) / order</div> 
                            :
                        <div className="price">${item.price} /
                        <span className="pcs">{item.pcs}pc(s)</span></div> }
                        {item.limit == 0 ? null : <span className="pcs">*Max.{item.limit} pcs per person</span>}
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