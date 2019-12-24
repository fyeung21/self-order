import React, {Fragment, useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'
import { withTracker } from 'meteor/react-meteor-data';
import Item from '../../components/ItemCard/';
import TableNumber from '../../components/TableNumber/';
import { Form, Divider, Image } from 'semantic-ui-react';
import NavBar from '../../components/NavBar/NavBar';
import { Menu } from '/imports/api/collections/menu';
import OrderId from '../../components/OrderId';
import "./styles.css";
// import AddItemFrom from '.';

// const menuItems = require('./menu.json');
const AddItemForm = () => {
  const [state, setState] = useState(
    { 
    title:'', 
    price:'', 
    pcs:'', 
    description:'', 
    imgurl:''
    }
  )
  let { title, price, pcs, description, imgurl} = state

    const addItem = () => {
            Meteor.call('menu.insert', item )
        }

    handleSubmit = () => {
      console.log(JSON.stringify(state))
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
      <h1>Add an item</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label='Title' 
          placeholder='Title' 
          name='title'
          value={title}
          onChange={this.handleChange}
          fuild/>
        <Form.Group>
          <Form.Input 
            label='Price' 
            placeholder='Price' 
            name='price'
            value={price}
            onChange={this.handleChange} 
            width={8} />
          <Form.Input
            label='Pcs' 
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
          fuild/>
        <Form.Input
          label='imgurl' 
          placeholder='imgurl' 
          name='imgurl'
          value={imgurl}
          onChange={this.handleChange}
          fuild/>
        <Form.Button content='Submit' />
      </Form>
      <Divider hidden />
      <Image src={imgurl} size='medium' />
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