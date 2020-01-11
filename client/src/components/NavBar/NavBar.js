import React, {useState, Fragment} from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { Modal, Header, Button } from 'semantic-ui-react';

import "./NavStyle";

const NavBar = ( {order} ) => {
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

      <Modal
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
        <Modal.Content>
          <div className="ui.description">
            <Modal.Description>
            <Button>
                Refill tea <Icon name="coffee" size="small" />
              </Button>
              <Button>
                Call the server <Icon name="bell" size="small" color="white" />
              </Button>
              <Button>
                Birthday <Icon name="birthday" size="small" />
              </Button>
            </Modal.Description>
          </div>
        </Modal.Content>
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
