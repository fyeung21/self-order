import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import AddItemForm from '../../components/AddItemForm'

import { Button, Icon, Image, Item, Checkbox, Header, Modal } from 'semantic-ui-react'
import './styles.css'

const DeleteItemButton = ({item, itemTotal}) => {
  const [delModal, setDelModal] = useState(false)

  onDelItem = () => {
    Meteor.call('menu.deleteItem', item, itemTotal )
  }

  openDelModal= () => {
    setDelModal(true)
  }

  closeDelModal= () => {
    setDelModal(false)
  }

  return (
    <Fragment>
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
    </Fragment>
  )
}
export default DeleteItemButton