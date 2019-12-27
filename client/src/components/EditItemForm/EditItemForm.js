import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
import Item from '../ItemCard';
import TableNumber from '../TableNumber';
import { Form, Divider, Image, Button } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';
import { Menu } from '/imports/api/collections/menu';
import OrderId from '../OrderId';
import "./styles.css";
// import AddItemFrom from '.';

// const menuItems = require('./menu.json');
const AddItemForm = ( {item, closeModal} ) => {
  const [state, setState] = useState(
    { 
    _id: item._id,
    name: item.name, 
    price: item.price, 
    pcs: item.pcs, 
    description: item.description, 
    imgurl: item.imgurl
    }
  )
  let { _id, name, price, pcs, description, imgurl} = state

    handleSubmit = () => {
      Meteor.call('menu.updateItem', state )
      closeModal(false)
    }

    onClose = () => {
      console.log('close clicked')
      closeModal(false)
    }

    handleChange = (e, {name, value}) => {
      if (name === 'price'){
        if(/^\d*\.?\d{0,2}$/.test(value)){
          console.log('yes')
          setState({...state, [name]: value}) 
        }
      }
      else if (name === 'pcs'){
        if(/^\d*\ ?\d{0}$/.test(value)){
          console.log('yes')
          setState({...state, [name]: value}) 
        }
      }
      else {
      setState({...state, [name]: value}) 
      }
    }

    return (
      <Fragment>
      <h1>Edit</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          required
          label='Item name' 
          placeholder='Name' 
          name='name'
          value={name}
          onChange={this.handleChange}
          />
        <Form.Group>
          <Form.Input 
            required
            label='Price (number only)' 
            placeholder='Price' 
            name='price'
            value={price}
            onChange={this.handleChange} 
            width={8} />
          <Form.Input
            required
            label='Pcs (number only)' 
            placeholder='Pcs' 
            name='pcs'
            value={pcs}
            onChange={this.handleChange} 
            width={8} />
        </Form.Group>
        <Form.TextArea
          label='Description' 
          placeholder='Description' 
          name='description'
          value={description}
          onChange={this.handleChange}
          />
        <Form.Input
          required
          label='imgurl' 
          placeholder='imgurl' 
          name='imgurl'
          value={imgurl}
          onChange={this.handleChange}
          />
        <span className="button">
        <Form.Button content='Submit' />
        </span>
        <span className="button">
          <Button onClick={onClose}>
            Cancel
          </Button> 
        </span>
      </Form>
      <Divider hidden />
      <Image src={imgurl} size='small' />
      <div>
      {JSON.stringify(state)}
      </div>
    </Fragment>

    )
}

export default AddItemForm
//withTracker tacks changes in database
// export default withTracker(() => {
//     //subscribe the 'menu' collection from mongodb
//     Meteor.subscribe('menu')
//     const menu = Menu.find({}).fetch()
//     return { //return an object
//         menu
//     }
// })(addItemForom) //send the object to MenuConatiner as props