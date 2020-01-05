import React from 'react';
import KitchenOrder from '../../components/KitchenOrder';
import { GlobalOrders } from '/imports/api/collections/globalOrders';
import { ActiveTables } from '/imports/api/collections/activeTables';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid, Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import "./styles";

const Kitchen = ({orders}) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    var currentTime = document.getElementById('currentTime');

    function time() {
        var d = new Date();
        var m = d.getMinutes();
        var h = d.getHours();

        currentTime.textContent = h + ":" + m;
    }

    setInterval(time, 1000);

    const history = useHistory()
    const clickHandler4 = () => {
        history.push('/menucontrol')
    }


    return (
        <div className="kitchenBackground">
            <div className="kitHeader">
                <h1>{today}</h1>
                <h1 id="currentTime" className="timeNow"></h1>
                <Button onClick={clickHandler4}><h1>Menu Control</h1></Button>
            </div>
            <div className="kitchenFlex">
                {orders.map((order) => {
                    return (
                        <div className="kitOrderCont">
                            <KitchenOrder order={order} key={order.orderId}/>
                        </div>
                    )
                })}
            </div>
        </div >
    );
};
// export default Kitchen;
export default withTracker(() => {
    let activeIds = []
    //subscribe the 'globalOrders' collection from mongodb
    Meteor.subscribe('globalOrders')
    Meteor.subscribe('activeTables')
    // const id = parseInt(Session.get('orderId'))
    const activeOrders = ActiveTables.find().fetch()
    for (let i in activeOrders) {
        activeIds.push(parseInt(activeOrders[i].orderId))
    }
    console.log(JSON.stringify(activeIds))
    const orders = GlobalOrders.find({
        "orderId" : {
            "$in" : 
            activeIds
           }
    }).fetch()

    console.log(JSON.stringify(orders))

    // console.log(JSON.stringify(currectOrder))
    return { //return an object
       orders
    }
  })(Kitchen) //send the object as props