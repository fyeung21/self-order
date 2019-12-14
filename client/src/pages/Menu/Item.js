import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'
import "./menuStyle.css"


const Item = ({item}) => {
        return (
            <Grid.Column item={item.name} key={item.name}>
                <Card fuild>
                     <Image fluid src={item.imgurl} />
                     <Card.Content>
                        <div class="title">{item.name}</div>
                        <div class="price">${item.price} / <span class="pcs">{item.pcs}pcs</span></div>
                     </Card.Content>
                </Card>
            </Grid.Column>
        )
    }    
export default Item;