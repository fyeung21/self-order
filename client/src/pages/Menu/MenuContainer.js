import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
import Item from '../../components/ItemCard/';
import TableNumber from '../../components/TableNumber/';
import { Grid, Button } from 'semantic-ui-react';
import NavBar from '../../components/NavBar/NavBar';
import { Menu } from '/imports/api/collections/menu';
import OrderId from '../../components/OrderId';
import "./styles.css";

// const menuItems = require('./menu.json');
const MenuContainer = ({menu, ...props}) => {
const addItem = () => {
        Meteor.call('menu.insert', item )
    }
    return (
        <div>
            <div className="orderContent">
            <span className="orderId"><OrderId className="orderId"/></span>
            <span><TableNumber /></span>
            </div>
            <Grid doubling columns={4} padded>
                {menu.map((item) => (
                    <Item item={item} key={item.name} />
                ))}
            </Grid>
            <Button onClick={addItem}>add an item</Button>
            <br />
            <br />
            <br />
            <br />
            <NavBar />
        </div>
    )
}

//withTracker tacks changes in database
export default withTracker(() => {
    //subscribe the 'menu' collection from mongodb
    Meteor.subscribe('menu')
    const menu = Menu.find({}).fetch()
    return { //return an object
        menu
    }
})(MenuContainer) //send the object to MenuConatiner as props