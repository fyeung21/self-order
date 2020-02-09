import React, {  useState, useEffect } from 'react';
import { Form, Divider, Image, Button, Dropdown, Modal } from 'semantic-ui-react';

const NewCatForm = ( {categories, addNewCat, setAddNewCat, setState, state }) => {
  const [categoryChi, addCategoryChi] = useState('')
  const [categoryEng, addCategoryEng] = useState('')
  const [disabled, setDisabled] = useState(true)

  //disable ADD button if nothing in value
  useEffect(()=>{
    if (categoryChi || categoryEng){
      setDisabled(false)
    }
    if (!categoryChi && !categoryEng){
      setDisabled(true)
    }
  }, [categoryChi, categoryEng])

  handleAddCatChange = (e, { name, value }) => {
    if ( name ==="categoryChi"){
      addCategoryChi(value)
    }
    if ( name ==="categoryEng"){
      addCategoryEng(value)
    }
  }
//this is where u need to get the categoryId
  AddCat = () => {
    let newCategory = {categoryChi , categoryEng}
    console.log(JSON.stringify(newCategory))
    Meteor.call('Categories.AddCat', newCategory)
    let newCatStr = categoryChi + " " + categoryEng
    //set timeout because the dropdown menu doesn't change instantly
    setTimeout(()=>{
      setState({ ...state, "value": newCatStr, "categoryName": newCatStr})
    },200)
    setAddNewCat(false)
  }

    //add new category at the 1st of the category array
if (categories[0].value !== "new") {
  categories.unshift({ text: "+ Add a new category", value: "new", key: 0 })
}

  return (
    <>
      <Modal size='tiny' open={addNewCat}>
        <Modal.Header>Add new category</Modal.Header>
        <Modal.Content>
        <Form.Input
        // required
        label="Chinese Category's name:  "
        // placeholder='Chinese Name'
        name='categoryChi'
        value={categoryChi}
        onChange={handleAddCatChange}
        fluid
      />
      <br />
      <Form.Input
        required
        label="English Category's name:  "
        // placeholder='English Name'
        name='categoryEng'
        value={categoryEng}
        onChange={handleAddCatChange}
        fluid
      />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={()=>{
            setAddNewCat(false)
            setState({ ...state, value: '' })
          }}>Cancel</Button>
          <Button
            disabled={disabled}
            positive
            icon='checkmark'
            // labelPosition='right'
            content='ADD'
            onClick={()=>{
              AddCat()
              // forceUpdate()
              setAddNewCat(false)
              }
            }
          />
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default NewCatForm