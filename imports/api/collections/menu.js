import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'menu.insert': (item) => {
    console.log('saving item:', item)
    Menu.insert(item)
  }
})

Meteor.methods({
  'menu.deleteItem': (item) => {
    console.log('Delete item:', item._id)
    Menu.remove({"_id" : item._id})
  }
})

export const Menu =  new Mongo.Collection('menu')