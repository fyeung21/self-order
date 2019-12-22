
import React, {Fragment, useState} from 'react';
import { Button, Header, Image, Modal, Transition} from 'semantic-ui-react'
import "./itemOrderStyle.css"

const ItemOrderForm = ({item, modalOpen}) => {
const [qty, setQty] = useState(0)

  const handlePlusQty = () => {
    let counter = qty
    counter++
    setQty(counter)
  }
  const handleMinusQty = () => {
    let counter = qty
    
    if(counter > 0) {
        counter--
        setQty(counter)
      }
    }
  const handleClose = () => {
    setVisible(false)
  }
    return (
      <Fragment>
      <Modal.Header>Add to order</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size='medium'
          src={item.imgurl}
        />
        <Modal.Description>
          <Header><h2>{item.name}</h2></Header>
          <p>
            {item.description}
          </p>
          <Header>${item.price} / <span className="pcs">{item.pcs}pcs</span></Header>
          <div className="qty">
            <div>
              <Button circular icon='minus' onClick={handleMinusQty} />
            </div>
            <h2 className="qtyNum">{qty}</h2>
            <div>
              <Button circular icon='plus' onClick={handlePlusQty} />
            </div>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={modalOpen}>
          Close
        </Button>
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content="Add to order"
          onClick={this.close}
        />
      </Modal.Actions>
    </Fragment>
  )
}
export default ItemOrderForm;