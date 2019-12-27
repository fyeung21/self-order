import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import DeleteItemButton from '../../components/DeleteItemButton'
import EditItemForm from '../../components/EditItemForm'

import { Button, Item, Checkbox, Modal } from 'semantic-ui-react'
import './styles.css'

const MenuControl = ({item}) => {
  const [ open, setOpen ] = useState(false)
  const [ activation, setActivation] = useState(item.activation)

  onEditItem = () => {
    setOpen(true)
  }

  const onClose = (close) => {
    console.log('onclose' + close)
    setOpen(close)
}
  const onActivation = () => {
      Meteor.call('menu.activation', item._id, !activation)
      setActivation(!activation)
  }
    return (
      <Fragment>
        <Item>
          <Item.Image size='tiny' src={item.imgurl} />
          <Item.Content>
            <Item.Header as='a'>{item.name}  </Item.Header>
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
              Activate:  
              <Checkbox 
              className="active" 
              toggle checked={activation} 
              onClick={onActivation}/>
            </div>

            <DeleteItemButton item={item}/>

            <Button primary size="mini" content="Edit >" onClick={onEditItem}/>
              <Modal dimmer='blurring' open={open} onClose={onClose} className="addItemForm">
                <EditItemForm item={item} closeModal={onClose}/>
              </Modal>

          </div>
          </Item.Content>
        </Item>
      </Fragment>
    )
  }
export default MenuControl;
