import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'
import "./menuStyle.css"


const Item = ({item}) => {
        return (
            <Grid.Column item={item.name}>
                <Card className="test">
                     <Image src={item.imgurl} />
                     <Card.Content>
                        <div className="title">{item.name}</div>
                        <div className="price">${item.price} / <span className="pcs">{item.pcs}pcs</span></div>
                     </Card.Content>
                </Card>
            </Grid.Column>
        )
    }    
export default Item;