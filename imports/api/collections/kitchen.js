import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { GlobalOrders } from '/imports/api/collections/globalOrders';
import { ActiveTables } from '/imports/api/collections/activeTables';


export const Kitchen =  new Mongo.Collection('kitchen')