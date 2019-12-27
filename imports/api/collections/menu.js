import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'menu.insert': (item) => {
    console.log('saving item:', item)
    Menu.insert(item)
  }
})

Meteor.methods({
  'menu.deleteItem': (item, itemTotal) => {
    console.log('Delete item:', item._id)
    for (let i = item.sortingIndex ; i < itemTotal; i++){
      console.log('currnet' + i)
      Menu.update({"sortingIndex" : i + 1}, {$set: {"sortingIndex" : i}})
    }
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

Meteor.methods({
  'menu.itemGoUp': (item) => {
    if (item.sortingIndex > 1){
      const currentIndex = item.sortingIndex
      Menu.update({"sortingIndex" : currentIndex - 1 }, {$set: {"sortingIndex" : currentIndex}})
      Menu.update({"_id" : item._id }, {$set: {"sortingIndex" : currentIndex - 1}})
    }
  }
})

Meteor.methods({
  'menu.itemGoDown': (item , itemTotal) => {
    if (item.sortingIndex < itemTotal){
      console.log('itemGoDown' + item.sortingIndex)
      const currentIndex = item.sortingIndex
      Menu.update({"sortingIndex" : currentIndex + 1 }, {$set: {"sortingIndex" : currentIndex}})
      Menu.update({"_id" : item._id }, {$set: {"sortingIndex" : currentIndex + 1}})
    }
  }
})

export const Menu =  new Mongo.Collection('menu')