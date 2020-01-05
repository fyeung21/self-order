import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

//this method save new items into an order from ItemOrderForm.js
//the order id is given after customer has logged in from the Welcome page

Meteor.methods({
  'globalOrders.insertTimestamps': (orderId) => {
    let timestamp = new Date()
    timestamp = timestamp.toLocaleString()
    orderId = parseInt(orderId)
    const currentItems = GlobalOrders.find({"orderId": orderId}).fetch()
    const items = currentItems[0].items
    items.map(item => {
        if (!item.orderTime) {
        item.orderTime = timestamp
        item.sentToKitchen = true
      }
    })
    GlobalOrders.update(
      {"orderId" : orderId},
      {$set:{
        "items" : items
      }}
    )
  }
})

Meteor.methods({
    'globalOrders.deleteItems': function(item_id, orderId){
      orderId = parseInt(orderId)
      GlobalOrders.update(
        {'orderId': orderId}, 
        { $pull: { "items" : { "item_id": item_id } } },
    false,
    true 
    );
    }
  }
)

Meteor.methods({
  'globalOrders.insertItem': function(item, orderId) {
    orderId = parseInt(orderId) //dunno why orderId became a string. make it back to an integer
    const item_id = Math.floor(Math.random() * 10000000)//random number as item_id
    item.item_id = item_id //insert item_id to all new items
        GlobalOrders.update(
          {"orderId" : orderId}, 
          { $push: {items: item} }
      )
    }
})

Meteor.methods({
  'globalOrders.checkCart' : function(item, orderId){
    orderId = parseInt(orderId)
    const checkItem = GlobalOrders.find({
      "orderId": orderId, items: { $elemMatch: {"_id": item._id } } 
    }).fetch()
    return checkItem
    console.log('xxx' + JSON.stringify(checkItem))
  }})

  Meteor.methods({
    'globalOrders.editItem' : function(item, orderId){
      orderId = parseInt(orderId)
      console.log('edit?')
      GlobalOrders.update(
        {"orderId" : orderId, "items.item_id" : item.item_id}, 
        { $set: {"items.$.qty" : item.qty} }
      )
    }})
    
Meteor.methods({
  'globalOrders.getQty' : function(item, orderId){
    orderId = parseInt(orderId)
    const checkItem = GlobalOrders.find({
      "orderId": orderId, items: { $elemMatch: {"_id": item._id } } 
    }).fetch()
    //qty is 1 when there is no item
    if (checkItem.length == 0){ 
      return 1
    }
    if (checkItem){
      for (let i in checkItem[0].items) {
        if (checkItem[0].items[i]._id == item._id) {
          return checkItem[0].items[i].qty
        }
      }
    }
    //update qty number for each item when the edit modal is opened
    if (checkItem){
      for (let i in checkItem[0].items) {
        if (checkItem[0].items[i].item_id == item.item_id) {
          return checkItem[0].items[i].qty
        }
      }
    }
  }
})

Meteor.methods({
  'globalOrders.getCurrentOrder' : function(orderId){
    orderId = parseInt(orderId)
    const CurrentOrder = GlobalOrders.find(
      {"orderId": orderId}).fetch()
    if (CurrentOrder.length == 0){
    }
    if (CurrentOrder){
      for (let i in CurrentOrder[0].items) {
        if (CurrentOrder[0].orderId == orderId) {
          return CurrentOrder[0]
        }
      }
    }
  }
})

export const GlobalOrders =  new Mongo.Collection('globalOrders');

