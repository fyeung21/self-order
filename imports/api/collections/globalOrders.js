import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'globalOrders.count': function() {
    return GlobalOrders.count()
  }
})

export const GlobalOrders =  new Mongo.Collection('globalOrders');