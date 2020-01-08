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
        var m = String(d.getMinutes()).padStart(2, "0");
        var h = String(d.getHours()).padStart(2, "0");

        // currentTime.textContent = h + ":" + m;
    }

    setInterval(time, 100);

    const history = useHistory()
    const goToMenu = () => {
        history.push('/menu-control')
    }


    return (
        <div className="kitchenBackground">
            <div className="kitHeader">
                <h1>{today}</h1>
                <h1 id="currentTime" className="timeNow"></h1>
                <Button onClick={goToMenu}><h3>Menu Control</h3></Button>
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
    const orders = GlobalOrders.find({
        "orderId" : {
            "$in" : 
            activeIds
           }
    }).fetch()

    // console.log(JSON.stringify(currectOrder))
    return { //return an object
       orders
    }
  })(Kitchen) //send the object as props