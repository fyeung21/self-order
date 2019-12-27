import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { Menu } from '/imports/api/collections/menu';
import { GlobalOrders } from '/imports/api/collections/globalOrders';
import { ActiveTables } from '/imports/api/collections/activeTables';




// function insertLink(title, url) {
//   Links.insert({ title, url, createdAt: new Date() });
// }
const items = [
  {
    "name": "Shrimp Dumplings",
    "price" : 7,
    "pcs" : 4,
    "description" : "Whole shrimp in a translucent wrapper.",
    "cataglory" : " Steamed",
    "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
    "featured" : false,
    "activation" : true,
    "sortingIndex" : 1
},
{
    "name": "Steamed Soup Dumplings",
    "price" : 10,
    "pcs" : 8,
    "description" : "Dumplings filled with pork, crab meat and broth.",
    "cataglory" : " Steamed",
    "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-steamed-pork-dumplings-thumb.jpg",
    "featured" : false,
    "activation" : true,
    "sortingIndex" : 2

},
{
    "name": "Pork Siu Mai",
    "price" : 7,
    "pcs" : 4,
    "description" : "Open-topped dumplings filled with ground pork and shrimp.",
    "cataglory" : " Steamed",
    "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-pork-siu-mai-thumb.jpg",
    "featured" : false,
    "activation" : true,
    "sortingIndex" : 3
}, 
{
    "name": "Steamed Pork Ribs",
    "price" : 7,
    "pcs" : 4,
    "description" : "Pork rib tips steamed with whole black beans and oil.",
    "cataglory" : " Steamed",
    "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-steamed-pork-ribs-thumb.jpg",
    "featured" : false,
    "activation" : true,
    "sortingIndex" : 4
},   
{
    "name": "Steamed Chicken Feet",
    "price" : 7,
    "pcs" : 4,
    "description" : "Chewy chicken feet that are fried, marinated and steamed.",
    "cataglory" : " Steamed",
    "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-steamed-chicken-feet-thumb.jpg",
    "featured" : false,
    "activation" : true,
    "sortingIndex" : 5
},   
{
    "name": "Sticky Rice in Lotus Leaf",
    "price" : 7,
    "pcs" : 1,
    "description" : "Pork, chicken, sausage and mushrooms wrapped in a lotus leaf.",
    "cataglory" : " Steamed",
    "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-sticky-rice-in-lotus-leaf-thumb.jpg",
    "featured" : false,
    "activation" : true,
    "sortingIndex" : 6
},     
{
    "name": "Steamed Pork Buns",
    "price" : 7,
    "pcs" : 3,
    "description" : "BBQ pork wrapped in sweet dough and steamed.",
    "cataglory" : " Steamed",
    "imgurl" : "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-steamed-pork-buns-thumb.jpg",
    "featured" : false,
    "activation" : true,
    "sortingIndex" : 7
}
]
Meteor.startup(() => {
  // add items from my menu.json when there is db is emtpy
  const menuItems = Menu.find({}).count()
    if (!menuItems) {
      //make some data
      for (let i in items){
        console.log(i)
        Menu.insert(
          items[i]
      )
    }
  }

  //publish collection
  Meteor.publish('menu', function() {
    return Menu.find({})
  })

  Meteor.publish('activeTables', function() {
    return ActiveTables.find({})
  })

  Meteor.publish('globalOrders', function() {
    return GlobalOrders.find({})
  })
});
