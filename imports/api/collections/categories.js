import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'categories.queryAll': function(){
    return Categories.find().fetch()
  }
})

Meteor.methods({
  'Categories.AddCat': function(newCategory){
    return Categories.insert(newCategory)
  }
})

export const Categories =  new Mongo.Collection('categories')
