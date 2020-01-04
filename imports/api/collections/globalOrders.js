import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

//this method save new items into an order from ItemOrderForm.js
//the order id is given after customer has logged in from the Welcome page
Meteor.methods({
    'globalOrders.deleteItems': function(_id, orderId){
      orderId = parseInt(orderId)
      console.log("##"+ _id +'&& ' + orderId)
      // GlobalOrders.remove({"orderId": orderId}, {"_id" : _id})
      GlobalOrders.update(
        {'orderId': orderId}, 
        { $pull: { "items" : { "_id": _id } } },
    false,
    true 
    );
    }
  }
)

Meteor.methods({
  'globalOrders.insertItem': function(item, orderId) {
    orderId = parseInt(orderId) //dunno why orderId became a string. make it back to an integer
    console.log('globalOrders.insertItem' + JSON.stringify(orderId))
    const checkItem = GlobalOrders.find({
      "orderId": orderId, items: { $elemMatch: {"_id": item._id } } 
    }).fetch()
    console.log('!checkItem ' + JSON.stringify(checkItem))
    if (checkItem.length == 0){
    //push the item into the array
        GlobalOrders.update(
          {"orderId" : orderId}, 
          { $push: {items: item} }
          )
    }
    if (checkItem.length > 0){
      //if item has already inserted, update the item qty 
          GlobalOrders.update(
            {"orderId" : orderId, "items._id" : item._id}, 
            { $set: {"items.$.qty" : item.qty} }
            )
      }
  }
})

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
    //update qty number for each item when the edit modal is opened
    if (checkItem){
      for (let i in checkItem[0].items) {
        if (checkItem[0].items[i]._id == item._id) {
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

