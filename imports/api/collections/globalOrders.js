import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

//this method save new items into an order from ItemOrderForm.js
//the order id is given after customer has logged in from the Welcome page
Meteor.methods({
  'globalOrders.insertItem': function(item, orderId) {
    console.log(orderId)
    console.log('globalOrders.insertItem' + JSON.stringify(orderId))
    GlobalOrders.update(
      {"orderId" : orderId}, 
      { $push: {items: item} }
      )
  }
})

export const GlobalOrders =  new Mongo.Collection('globalOrders');