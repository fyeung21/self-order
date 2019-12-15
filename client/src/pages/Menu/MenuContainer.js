import _ from 'lodash'
import React from 'react';
import Item from './Item';
import { Grid } from 'semantic-ui-react'
import "./menuStyle.css"
import NavBar from '../../components/NavBar/NavBar';

const menuItems = require('./menu.json');
const MenuContainer = () => {
    return (
        <div>
            <Grid doubling columns={4} padded>
                {menuItems.map((item) => (
                    <Item item={item} />
                ))}
            </Grid>
            <NavBar />
        </div>
    )
}
export default MenuContainer;