import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import DeleteItemButton from '../../components/DeleteItemButton'
import EditItemForm from '../../components/EditItemForm'

import { Button, Item, Checkbox, Modal } from 'semantic-ui-react'
import './styles.css'

const MenuControl = ({categories, item, itemTotal}) => {
  const [ open, setOpen ] = useState(false)
  const [ activation, setActivation] = useState(item.activation)

  const onEditItem = () => {
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

  const onUp = () => {
      Meteor.call('menu.itemGoUp', item)
  }

  const onDown = () => {
    Meteor.call('menu.itemGoDown', item, itemTotal)
}
    return (
      <Fragment>
        <Item>
          <div className="sortDiv">
            <div className="sortButton">
            <Button icon="chevron up" size="mini" circular onClick={onUp}/>
            {'#' + item.sortingIndex}
            <Button icon="chevron down" size="mini" circular onClick={onDown}/>
            </div>
          </div>

          <Item.Image size='tiny' src={item.imgurl} />
          <Item.Content>
            <Item.Description className="categoryName">category: {item.categoryName}</Item.Description>
            <Item.Header as='a'>
            {item.nameChi} <br />
            {item.nameEng} 
            </Item.Header>
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

            <DeleteItemButton item={item} itemTotal={itemTotal}/>

            <Button primary size="mini" content="Edit >" onClick={onEditItem}/>
              <Modal dimmer='blurring' open={open} onClose={onClose} className="addItemForm">
                <EditItemForm categories={categories} item={item} closeModal={onClose}/>
              </Modal>

          </div>
          </Item.Content>
        </Item>
      </Fragment>
    )
  }
export default MenuControl;
