import React, {Fragment, useState} from 'react';
import DeleteItemButton from '../../components/DeleteItemButton'
import EditItemForm from '../../components/EditItemForm'

import { Button, Item, Checkbox, Modal } from 'semantic-ui-react'
import './styles.css'

const MenuControl = ({item}) => {
  const [ open, setOpen ] = useState(false)

  onEditItem = () => {
    setOpen(true)
  }

  const onClose = (close) => {
    console.log('onclose' + close)
    setOpen(close)
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
