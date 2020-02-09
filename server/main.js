import _ from 'lodash'
import { Meteor } from 'meteor/meteor';
import { Menu } from '/imports/api/collections/menu';
import { GlobalOrders } from '/imports/api/collections/globalOrders';
import { ActiveTables } from '/imports/api/collections/activeTables';
import { Categories } from '/imports/api/collections/categories';
import { menu } from './menu'

// function insertLink(title, url) {
//   Links.insert({ title, url, createdAt: new Date() });
// }
const items = menu

// [
//   {
//     "nameEng": "Shark’s Fin, Mix. Seafood & Meat Dumpling in Soup",
//     "nameChi": "頂魚翅灌湯餃", 
//     "price": 7,
//     "pcs": 4,
//     "description": "Whole shrimp in a translucent wrapper.",
//     "imgurl": "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
//     "featured": false,
//     "activation": true,
//     "sortingIndex": 1,
//     "qty": 1,
//     "sentToKitchen": false,
//     "status": "proccessing",
//     "addedToCart": false,
//   },{
//     "nameEng": "Shark’s Fin, Mix. Seafood & Meat Dumpling in Soup",
//     "nameChi": "頂魚翅灌湯餃", 
//     "price": 7,
//     "pcs": 4,
//     "description": "Whole shrimp in a translucent wrapper.",
//     "imgurl": "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
//     "featured": false,
//     "activation": true,
//     "sortingIndex": 2,
//     "qty": 1,
//     "sentToKitchen": false,
//     "status": "proccessing",
//     "addedToCart": false,
//   },{
//     "nameEng": "Shark’s Fin, Mix. Seafood & Meat Dumpling in Soup",
//     "nameChi": "頂魚翅灌湯餃", 
//     "price": 7,
//     "pcs": 4,
//     "description": "Whole shrimp in a translucent wrapper.",
//     "imgurl": "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
//     "featured": false,
//     "activation": true,
//     "sortingIndex": 3,
//     "qty": 1,
//     "sentToKitchen": false,
//     "status": "proccessing",
//     "addedToCart": false,
//   },{
//     "nameEng": "Shark’s Fin, Mix. Seafood & Meat Dumpling in Soup",
//     "nameChi": "頂魚翅灌湯餃", 
//     "price": 7,
//     "pcs": 4,
//     "description": "Whole shrimp in a translucent wrapper.",
//     "imgurl": "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
//     "featured": false,
//     "activation": true,
//     "sortingIndex": 4,
//     "qty": 1,
//     "sentToKitchen": false,
//     "status": "proccessing",
//     "addedToCart": false,
//   },{
//     "nameEng": "Shark’s Fin, Mix. Seafood & Meat Dumpling in Soup",
//     "nameChi": "頂魚翅灌湯餃", 
//     "price": 7,
//     "pcs": 4,
//     "description": "Whole shrimp in a translucent wrapper.",
//     "imgurl": "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
//     "featured": false,
//     "activation": true,
//     "sortingIndex": 5,
//     "qty": 1,
//     "sentToKitchen": false,
//     "status": "proccessing",
//     "addedToCart": false,
//   },{
//     "nameEng": "Shark’s Fin, Mix. Seafood & Meat Dumpling in Soup",
//     "nameChi": "頂魚翅灌湯餃", 
//     "price": 7,
//     "pcs": 4,
//     "description": "Whole shrimp in a translucent wrapper.",
//     "imgurl": "http://www.dimsumcentral.com/wp-content/uploads/2016/01/steamed-shrimp-dumplings-thumb.jpg",
//     "featured": false,
//     "activation": true,
//     "sortingIndex": 6,
//     "qty": 1,
//     "sentToKitchen": false,
//     "status": "proccessing",
//     "addedToCart": false,
//   }
// ]

const categories = [
  {"categoryChi" : "", "categoryEng":"Appetizer"},
  {"categoryChi" : "", "categoryEng":"Salad"},
  {"categoryChi" : "", "categoryEng":"Maki Roll"},
  {"categoryChi" : "", "categoryEng":"Cone"},
  {"categoryChi" : "", "categoryEng":"Maki Roll"},
  {"categoryChi" : "", "categoryEng":"Nigiri Sushi"},
  {"categoryChi" : "", "categoryEng":"Sashimi"},
  {"categoryChi" : "", "categoryEng":"Sushi Roll"},
  {"categoryChi" : "", "categoryEng":"Teppanyaki"},
  {"categoryChi" : "", "categoryEng":"Soup Noodle"},
  {"categoryChi" : "", "categoryEng":"Tempura"}
]

Meteor.startup(() => {
  // add items from my menu.json when there is db is emtpy
  const menuItems = Menu.find({}).count()
  if (!menuItems) {
    //make some data
    for (let i in items) {
      console.log(i)
      Menu.insert(
        items[i]
      )
    }
  }
  const cat = Categories.find({}).count()
  if (!cat) {
  for (let j in categories) {
    Categories.insert(
      categories[j]
    )
  }
  }
  //publish collection
  Meteor.publish('menu', function () {
    return Menu.find({})
  })

  Meteor.publish('activeTables', function () {
    return ActiveTables.find({})
  })

  Meteor.publish('globalOrders', function () {
    return GlobalOrders.find({})
  })

  Meteor.publish('categories', function () {
    return Categories.find({})
  })
});
