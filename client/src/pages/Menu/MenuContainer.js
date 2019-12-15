import _ from 'lodash'
import React, { Component } from 'react';
import Item from '../../components/ItemCard/';
import { Grid } from 'semantic-ui-react'

const menuItems = require('./menu.json');
const MenuContainer = () => {
    return (
        <Grid doubling columns={4} padded>
            {menuItems.map((item) => (
            <Item item={item} key={item.name}/>
            ))}
         </Grid>
    )
}
export default MenuContainer;