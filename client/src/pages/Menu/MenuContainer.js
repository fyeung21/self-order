import React, { useContext, useState, Fragment, createRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { useHistory } from "react-router-dom";
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
import Item from '../../components/ItemCard/';
import TableNumber from '../../components/TableNumber/';
import { Grid, Button, Sidebar, Segment, Menu, Icon, Sticky, Ref, GridColumn } from 'semantic-ui-react';
import NavBar from '../../components/NavBar/NavBar';
import { Menu as MenuData } from '/imports/api/collections/menu';
import { Categories } from '/imports/api/collections/categories';

import OrderId from '../../components/OrderId';
import "./styles.css";
import { GlobalOrders } from '../../../../imports/api/collections/globalOrders';
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { Session } from 'meteor/session'
// import MyOrder from '../pages/MyOrder'


// const menuItems = require('./menu.json');
const MenuContainer = ({ menu, order, categories }) => {
    const orderId = useContext(OrderIdContext).getOrderId
    const [sideBar, setSideBar] = useState(false)
    const [margin, setMargin] = useState("0px")
    const history = useHistory();

    Session.set('orderId', orderId) //session is for passing value to withTracker
    console.log('orderId' + order)

    const openSideBar = () => {
        setSideBar(!sideBar)
        if (!sideBar) {
            setMargin("140px")
        }
        if (sideBar) {
            setMargin("0px")
        }
    }

    const addItem = () => {
        Meteor.call('menu.insert', item)
    }
    contextRef = createRef()

    return (
        <Fragment>
            <Ref innerRef={contextRef}>
                <Sidebar.Pushable 
                as={Segment} 
                // this is they style that make sticky works.
                style={{ transform: "none" }}
                > 
                    <Sticky context={contextRef}>
                        <Sidebar
                            as={Menu}
                            animation="overlay"
                            // animation="slide along"
                            size="massive"
                            visible={sideBar}
                            inverted
                            vertical
                            width="thin"
                            onHide={() => openSideBar()}
                        // style={{position: 'fixed', top:'0px', bottom:'0px', overflowY:'auto', zIndex:'100'}}
                        >
                            {categories.map(item => {
                                return (
                                    <Menu.Item as='a'>{item.categoryEng}</Menu.Item>
                                )
                            })}
                        </Sidebar>
                    </Sticky>
                    
                    <Sidebar.Pusher dimmed={sideBar}>
                        <Segment basic>
                            <Grid>
                             <Grid.Row>

                                <Grid.Column width={8}>
                                    <Sticky context={contextRef} offset={10}>
                                        <Button
                                            color="red"
                                            size="large"
                                            onClick={openSideBar}
                                            circular
                                            icon="bars"
                                            content="Category"
                                            // style={{ marginLeft: margin }}
                                            >
                                                {/* <Icon color="white" name="bars" /> */}
                                        </Button>
                                </Sticky>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <div className="orderContent">
                                        <OrderId className="orderId" /><br />
                                        <TableNumber />
                                    </div>
                                </Grid.Column>
                                </Grid.Row>

                            </Grid>
                            {categories.map(cat => {
                                return (
                                    <div><h1>{cat.categoryEng}</h1>

                                        <Grid doubling columns={4} padded>
                                            {menu.map((item) => {
                                                // console.log(cat.categoryEng)
                                                // console.log(item.categoryName)
                                                if (item.categoryName == cat.categoryEng) {
                                                    console.log('smae')
                                                    return (
                                                        <Item item={item} key={item.name} />
                                                    )
                                                }
                                            }
                                            )}
                                        </Grid>
                                    </div>
                                )
                            })}


                            <Grid doubling columns={4} padded>
                                {menu.map((item) => (
                                    <Item item={item} key={item.name} />
                                ))}
                            </Grid>
                            <br />
                            <br />
                            <br />
                            <br />

                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Ref>
            <NavBar order={order} />
        </Fragment>
    )
}

//withTracker tacks changes in database
export default withTracker(() => {
    //subscribe the 'menu' collection from mongodb
    Meteor.subscribe('menu')
    Meteor.subscribe('globalOrders')
    Meteor.subscribe('categories')


    const id = parseInt(Session.get('orderId'))

    const query = { "activation": true };
    const options = { sort: { "sortingIndex": 1 } }; //-1 = descending sort 
    const menu = MenuData.find(query, options).fetch()
    const categories = Categories.find({}).fetch()
    const order = GlobalOrders.find({ "orderId": id }).fetch()

    return { //return an object
        menu,
        order,
        categories
    }
})(MenuContainer) //send the object to MenuConatiner as props