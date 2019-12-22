import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { GlobalOrders } from './globalOrders'


Meteor.methods({
  'activeTables.insert': function(tableNumber) {
//find if the tableNumber is inside the activeTables
  const tables = ActiveTables.find({"tableNumber" : tableNumber}).fetch()
    if (tables === undefined || tables.length == 0){
      console.log('table not found!!!'+JSON.stringify(tables))
      //if table number is not found, insert a new order number.
      //Get the length of the globalorder then + 1 = newOrderId 
      let newOrderId = GlobalOrders.find({}).fetch().length + 1
      GlobalOrders.insert({"OrderId" : newOrderId, tableNumber})
      ActiveTables.insert({"OrderId" : newOrderId, tableNumber})
      console.log("new orderId" + newOrderId)
    }
    else {
      console.log("table " + tableNumber + ' found!!!')
      console.log("tablddb " + JSON.stringify(tables[0].OrderId))
      const orderId = tables[0].OrderId
      return orderId
    }
  }
})

export const ActiveTables =  new Mongo.Collection('activeTables')