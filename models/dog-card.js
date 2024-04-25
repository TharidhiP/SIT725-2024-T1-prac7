let client = require('../db-connection');
let collection = client.db('card').collection('card');

function insertCard(card, callback){
    collection.insertOne(card, callback);
 }
 
 function getAllCards(callback) {
    collection.find().toArray(callback);
 }
 
module.exports = {insertCard, getAllCards};