
import React, {Fragment, useState, useContext, useEffect} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Button, Header, Image, Modal, Transition} from 'semantic-ui-react'
import { OrderIdContext } from "../../contexts/OrderIdContextProvider"
import { GlobalOrders } from '/imports/api/collections/globalOrders';

import "./itemOrderStyle.css"

const ItemOrderForm = ({item, modalOpen}) => {

  const orderId = useContext(OrderIdContext).getOrderId
  const [thisItem, setthisItem] = useState(item)

  const addItemToOrder = () => {
    Meteor.call('globalOrders.insertItem', thisItem, orderId, (err, res) => {
      if (err) {
        alert(err)
      } else {
        // success!
      }
    })
  }

  const handlePlusQty = () => {
    let counter = thisItem.qty
    counter = counter + 1
    setthisItem({...thisItem, "qty" : counter})
  }
  const handleMinusQty = () => {
    let counter = thisItem.qty
    if(counter > 0) {
      counter = counter - 1
      setthisItem({...thisItem, "qty" : counter})
      }
    }
  const handleClose = () => {
    setVisible(false)
  }

  //get Qty when component will mount
  useEffect(()=>{
    Meteor.call('globalOrders.getQty',  thisItem, orderId, (err, res) => {
      if (err) {
        alert(err)
      } else {
        console.log("getQty " + res)
        setthisItem({...thisItem, "qty" : res})
        // success!
      }
    })
  },[])

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
            <h2 className="qtyNum">
            {thisItem.qty}
            </h2>
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
          content="Add to order"
          positive
          icon='checkmark'
          labelPosition='right'
          onClick={()=>{
            addItemToOrder()
            modalOpen()
          }
        }
        />
      </Modal.Actions>
    </Fragment>
  )
}

//withTracker tacks changes in database
export default withTracker(() => {
  //subscribe the 'globalOrders' collection from mongodb
  Meteor.subscribe('globalOrders')
  const globalOrders = GlobalOrders.find().fetch()
  return { //return an object
    globalOrders
  }
})(ItemOrderForm) //send the object to MenuConatiner as props