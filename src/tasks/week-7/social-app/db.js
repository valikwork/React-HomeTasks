const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'social-network'

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
let connectionInstance = null;

module.exports = async function getDb () {
    if(!connectionInstance){
        await client.connect();
        connectionInstance = client.db(dbName);
    }
    return connectionInstance;
}