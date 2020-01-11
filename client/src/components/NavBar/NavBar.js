import React, {useState, Fragment, useContext} from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { Modal, Grid, Button } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"

import "./NavStyle";


const NavBar = ( {order} ) => {
    const orderId = useContext(OrderIdContext).getOrderId

    const [openModal, setOpenModal] = useState(false)
    const history = useHistory()
    const clickHandler = (order) => {

        console.log(JSON.stringify(order))
        if (order[0].requestBill === 'Paid'){
            alert("Order has been paid. Session expired")

            // console.log("error")
            // setOpenModal(true)
        }
        else {
            history.push('/Menu')
        }
    }
    const clickHandler2 = () => {
        // alert("A server will be here shortly.")
    }
    const clickHandler3 = () => {
        history.push('/my-order')
    }
    state = {}

    const { activeItem } = this.state

    const services = [
        {name: "Refill tea", icon: "coffee", color:"red"},
        {name: "Call the server", icon: "bell", color:"red"},
        {name: "Birthday", icon: "birthday", color:"red"}
    ]

    const onService = (service) => {
        Meteor.call('globalOrders.requestBill', orderId, service.name)
    }
    
    return (
    <Fragment>
        <Modal open={openModal}>
            <Modal.Header>
                Error
            </Modal.Header>
        </Modal>
        <Menu fluid fixed="bottom" widths={3}>

            {/* Menu */}
            <Menu.Item
                name='Menu'
                active={activeItem === 'menu'}
                onClick={()=>{clickHandler(order)}}
            >
                <div className="navContainer">
                    <Icon name='food' size='big' />
                    <span>Menu</span>
                </div>
            </Menu.Item>

      {/* Service */}

      <Modal size="mini" closeIcon
        trigger={
          <Menu.Item
            name="Service"
            active={activeItem === "service"}
            onClick={clickHandler2}
          >
            <div className="navContainer">
              <Icon name="bell outline" size="big" />
              <span>Service</span>
            </div>
          </Menu.Item>
        }
      >
        <Modal.Header>Select an option</Modal.Header>
          <div className="ui.description">
          <Modal.Content  className="service">
          <Grid centered columns={1}>
              {services.map(service => {
                  return(
                <Grid.Column textAlign='center'>
                    <Modal trigger={
                        <Button color={service.color} fluid size="huge"
                        onClick={()=>onService(service)}>
                        <Icon name={service.icon} size="small" />
                        {" " + service.name} 
                        </Button>  
                        }
                        header='Your server will be here shorty!'
                        actions={[{ key: 'done', content: 'OK', positive: true }]}/>
              </Grid.Column>
              )})}
              </Grid>
              </Modal.Content>
          </div>
      </Modal>

      <Menu.Item
        name="My Order"
        active={activeItem === "my-order"}
        onClick={clickHandler3}
      >
        <div className="navContainer">
          <Icon name="edit outline" size="big" />
          <span>My Order</span>
        </div>
      </Menu.Item>
    </Menu>
    </Fragment>

  );
};
export default NavBar;
