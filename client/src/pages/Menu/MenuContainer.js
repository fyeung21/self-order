import React, { Component } from 'react';
import Item from './Item';
import { Grid } from 'semantic-ui-react'

const menuItems = require('./menu.json');

const MenuContainer = () => {
    return (
    // <Grid doubling centered columns={8} verticalAlign>
        <Grid centered>
            <Grid.Row>
            {menuItems.map(item => {
                return <Item item={item}/>
            })}
            </Grid.Row>
    </Grid>
    )
}
export default MenuContainer;