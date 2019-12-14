import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react'

const Item = ({item}) => {
        return (
            <div>
                <Grid.Column width={8}>
                    <div className="menu">
                    {/* <Image src={item.imgurl} fluid/> */}
                        <Card fluid>
                        <Image fluid src={item.imgurl} />
                            <Card.Content>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Header>${item.price}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{item.pcs}/pcs</span>
                            </Card.Meta>
                            <Card.Description>
                                {item.description}
                            </Card.Description>
                            </Card.Content>
                        </Card>
                        </div>
                </Grid.Column>
             </div>
        );
    }    
export default Item;