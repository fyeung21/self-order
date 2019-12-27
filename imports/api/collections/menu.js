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

Meteor.methods({
  'menu.updateItem': (item) => {
    console.log('Update item:', item)
    Menu.update({"_id" : item._id}, {$set: item})
  }
})

Meteor.methods({
  'menu.activation': (_id, activation) => {
    Menu.update({"_id" : _id}, {$set: {activation}}, (err, doc) => {
      const item = Menu.find({"_id" : _id}).fetch()
      console.log('doc.activation update: ' + item[0].activation)
      return item[0].activation
    })
  }
})

export const Menu =  new Mongo.Collection('menu')