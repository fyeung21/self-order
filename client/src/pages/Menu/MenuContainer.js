import _ from 'lodash'
import React, { Component } from 'react';
import Item from './Item';
import { Grid, Image } from 'semantic-ui-react'
import "./menuStyle.css"

const menuItems = require('./menu.json');
const MenuContainer = () => {
    return (
        <Grid doubling columns={4} padded>
            {menuItems.map((item) => (
            <Item item={item}/>
            ))}
         </Grid>
    )
}
export default MenuContainer;