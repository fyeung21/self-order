import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'menu.insert': function(item) {
    console.log('saving item:', item)
    Menu.insert(item)
  }
})

export const Menu =  new Mongo.Collection('menu')