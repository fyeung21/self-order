import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
// import ItemCard from '../../components/ItemCard/';
import TableNumber from '../../components/TableNumber/';
import { Grid, Button, Item, Modal, MenuHeader } from 'semantic-ui-react';
import NavBar from '../../components/NavBar/NavBar';
import { Menu } from '/imports/api/collections/menu';
import { Categories } from '/imports/api/collections/categories';
import OrderId from '../../components/OrderId';
import AddItemForm from '../../components/AddItemForm'
import "./styles.css";
import MenuControl from './MenuControl';
import { useHistory } from "react-router-dom";

// const menuItems = require('./menu.json');
const MenuControlContainer = ({ categories, menu, ...props }) => {
    const itemTotal = menu.length
    console.log('length' + itemTotal)
    const [open, setOpen] = useState(false)
    const onAddItemnModal = () => {
        setOpen(true)
    }
    const onClose = (close) => {
        console.log('onclose' + close)
        setOpen(close)
    }

    const history = useHistory()
    const goToKitchen = () => {
        history.push('/kitchen')
    }

    return (
        <div>
            <div className="flexContainer">
                <h1>Menu Control Panel</h1>
                <Button onClick={goToKitchen}>Kitchen</Button>
            </div>
            <Button className="addButton" onClick={onAddItemnModal}>Add an item +</Button>
            <Modal dimmer='blurring' open={open} onClose={onClose} className="addItemForm">
                <AddItemForm categories={categories} closeModal={onClose} sortingIndex={itemTotal} />
            </Modal>
            <div className="orderContent">
            </div>
            <Item.Group divided>
                {categories.map(cat => {
                    // let filter1 = []
                    let filter1 = menu.filter(item=>{
                    //     console.log(JSON.stringify("cat " + cat._id))
                    //     console.log(JSON.stringify(item.categoryId))
                        return (
                            item.categoryId == cat.categoryId
                            )
                        })
                    return (
                        <div>
                            <h2>{cat.categoryChi +  " " + cat.categoryEng}</h2>
                            <p>{JSON.stringify(filter1)}</p>
                        </div>
                    )
                })}
                {menu.map((item) => (
                    <MenuControl categories={categories} item={item} key={item.name} itemTotal={itemTotal} />
                ))}
            </ Item.Group>
            <Button onClick={onAddItemnModal}>Add an item +</Button>
            <br />
            <br />
            <br />
            <br />
            {/* <NavBar /> */}
        </div>
    )
}

//withTracker tacks changes in database
export default withTracker(() => {
    //subscribe the 'menu' collection from mongodb
    Meteor.subscribe('menu')
    Meteor.subscribe('categories')
    const query = {};
    const options = { sort: { "sortingIndex": 1 } }; //-1 = descending sort 
    const menu = Menu.find(query, options).fetch()
    const categories = Categories.find({}).fetch()

    return { //return an object
        menu,
        categories
    }
})(MenuControlContainer) //send the object to MenuConatiner as props