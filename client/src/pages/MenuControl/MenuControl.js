import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Menu } from '/imports/api/collections/menu';

import { Button, Icon, Image, Item, Checkbox, Header, Modal } from 'semantic-ui-react'
import './styles.css'

const MenuControl = ({item}) => {
  const [delModal, setDelModal] = useState(false)
  
  onDelItem = () => {
    Meteor.call('menu.deleteItem', item )
  }

  openDelModal= () => {
    setDelModal(true)
  }

  closeDelModal= () => {
    setDelModal(false)
  }
    return (
      <Fragment>
        <Item>
          <Item.Image size='tiny' src={item.imgurl} />

          <Item.Content>
            <Item.Header as='a'>{item.name}</Item.Header>
            <Item.Meta>
              <span className='price'>${item.price}</span>
              <span className='pcs'>{item.pcs}/pcs</span>
              
            </Item.Meta>
            <Item.Description>{item.description}</Item.Description>
            <Item.Extra>
            
            </Item.Extra>
          </Item.Content>
          <Item.Content >
          <div className="right">
            <div className="activeToggle">
              Activation:  <Checkbox className="active" toggle />
            </div>
            {/* delete button that open modal box for comfirmation  */}
            <Button negative icon='trash' size="mini" onClick={openDelModal}/>
              <Modal 
                open={delModal} size='small'>
                <Header icon="trash" content="Delete item"></Header>
                <Modal.Content className="delete">
                <p>{item.name} will be deleted permanently. </p>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red' inverted onClick={closeDelModal}> 
                    <Icon name='remove' /> No
                  </Button>
                  <Button color='green' inverted onClick={onDelItem}>
                    <Icon name='checkmark' /> Confirm
                  </Button>
                </Modal.Actions>
              </Modal>

            <Button primary size="mini">
              Edit
              <Icon name='right chevron' />
            </Button>
          </div>
          </Item.Content>
        </Item>
      </Fragment>
    )
  }
export default MenuControl;
