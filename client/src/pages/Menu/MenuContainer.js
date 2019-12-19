import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
import Item from '../../components/ItemCard/';
import TableNumber from '../../components/TableNumber/';
import { Grid, Button } from 'semantic-ui-react';
import NavBar from '../../components/NavBar/NavBar';
import { Menu } from '/imports/api/collections/menu';

// const menuItems = require('./menu.json');


const MenuContainer = ({menu, ...props}) => {
    const item = {
        "name": "1111Shrimp Dumplings",
        "price" : 7,
        "pcs" : 4,
        "description" : "Whole shrimp in a translucent wrapper.",
        "cataglory" : " Steamed",
        "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
        "featured" : false
    }

    const addItem = () => {
        Meteor.call('menu.insert', item )
    }

    return (
        <div>
            <TableNumber />
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