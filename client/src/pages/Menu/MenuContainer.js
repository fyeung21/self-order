import React, {useContext, useEffect} from 'react';
import { Meteor } from 'meteor/meteor';
import { useHistory } from "react-router-dom";
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
import Item from '../../components/ItemCard/';
import TableNumber from '../../components/TableNumber/';
import { Grid, Button } from 'semantic-ui-react';
import NavBar from '../../components/NavBar/NavBar';
import { Menu } from '/imports/api/collections/menu';
import OrderId from '../../components/OrderId';
import "./styles.css";
import { GlobalOrders } from '../../../../imports/api/collections/globalOrders';
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { Session } from 'meteor/session'
// import MyOrder from '../pages/MyOrder'


// const menuItems = require('./menu.json');
const MenuContainer = ({menu, order, ...props}) => {
const orderId = useContext(OrderIdContext).getOrderId
const history = useHistory();

Session.set('orderId', orderId) //session is for passing value to withTracker
console.log('orderId' + order)

// useEffect(()=>{
//     console.log(JSON.stringify(order[0].requestBill))
//     if (order.requestBill == "Paid"){
//         history.push("./my-order")
//     }
// },[order])

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
            <br />
            <br />
            <br />
            <br />
            <NavBar order={order}/>
        </div>
    )
}

//withTracker tacks changes in database
export default withTracker(() => {
    //subscribe the 'menu' collection from mongodb
    Meteor.subscribe('menu')
    Meteor.subscribe('globalOrders')

    const id = parseInt(Session.get('orderId'))

    const query = {"activation" : true};
    const options = { sort: {"sortingIndex" : 1 } }; //-1 = descending sort 
    const menu = Menu.find(query, options).fetch()
    const order = GlobalOrders.find({"orderId" : id}).fetch()

    return { //return an object
        menu,
        order
    }
})(MenuContainer) //send the object to MenuConatiner as props