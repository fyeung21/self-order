import React, { Fragment, useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Divider, Image, Button, Dropdown, Modal } from 'semantic-ui-react';
import NewCatForm from '../NewCatForm'

import "./styles.css";

const AddItemForm = ({ categories, closeModal, sortingIndex }) => {

  // options.value = categories.categoryChi + " " + categories.categoryEng
  const [state, setState] = useState(
    {
      nameChi: '',
      nameEng: '',
      categoryId: '',
      price: '',
      pcs: '',
      description: '',
      imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/768px-No_image_available.svg.png',
      sortingIndex: sortingIndex + 1,
      activation: true,
      qty: 1,
      // value: 'choose a category'
    }
  )

  const [addNewCat, setAddNewCat] = useState(false)

  let { nameChi, nameEng, price, pcs, description, imgurl, value } = state

  const addItem = () => {
    Meteor.call('menu.insert', item)
  }

  handleSubmit = () => {
    Meteor.call('menu.insert', state)
    closeModal(false)
  }

  onClose = () => {
    console.log('close clicked')
    closeModal(false)
  }

  handleChange = (e, { name, value }) => {
    if (name === 'price') {
      if (/^\d*\.?\d{0,2}$/.test(value)) {
        console.log('yes')
        setState({ ...state, [name]: value })
      }
    }
    else if (name === 'pcs') {
      if (/^\d*\ ?\d{0}$/.test(value)) {
        console.log('yes')
        setState({ ...state, [name]: value })
      }
    }
    else if (name === 'categoryId'){
      if (value === "new") {
        setAddNewCat(true)
      } else {
        setAddNewCat(false)
      }
      let id = ''
      let category = categories.find((item) => {
        return (
          item.categoryName === value
          )
        })
      setState({ ...state, [name]: category.categoryId, categoryName: value })
    }
    else {
      setState({ ...state, [name]: value })
    }
  }

  const handleCatChange = (e, { value }) => {
    console.log(value)
    if (value === "new") {
      setAddNewCat(true)
    } else {
      setAddNewCat(false)
    }
  }
 
  useEffect(() => {
    //create data for category dropdown menu
    categories.map((item, index) => {
      if (item.value !== "new") {
        item.text = item.categoryChi + " " + item.categoryEng
        item.value = item.categoryChi + " " + item.categoryEng
        item.categoryName = item.categoryChi + " " + item.categoryEng
        item.categoryId = item._id
        item.key = index + 1
      }
    })
  },[categories])

  return (
    <Fragment>
      <h1>Add an item</h1>
      <p>{JSON.stringify(categories)}</p>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group>
          <Form.Field  width={16}>
            <label>{'Select a category'}</label>
            <Dropdown
              onChange={handleChange}
              options={categories}
              placeholder='Choose a category'
              name="categoryId"
              selection
              value={value}
            />
          </Form.Field>
          <NewCatForm 
            categories={categories} 
            setAddNewCat={setAddNewCat} 
            addNewCat={addNewCat}
            setState={setState}
            state={state}/>
        </Form.Group>
        <Form.Group>
          <Form.Input
            required
            label='Chinese name'
            placeholder='Chinese Name'
            name='nameChi'
            value={nameChi}
            onChange={this.handleChange}
            width={6}
          />
          <Form.Input
            required
            label='English name'
            placeholder='English Name'
            name='nameEng'
            value={nameEng}
            onChange={this.handleChange}
            width={10}
          />
        </Form.Group>
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