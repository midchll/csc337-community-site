// MongoDB init

const { MongoClient } = require('mongodb');
const mongoUrl = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(mongoUrl);
let db = null;

// Connect client and init db, otherwise reuse db instance
// This is run once inside main.js, use getDB to use db instance elsewhere
async function connectDB() {
    if (db) {
        return db;
    } else {
        await client.connect();
        db = client.db('CommunitySiteDB');
        console.log('connected to mongodb');
        return db;
    }
}

// Get the db instance
function getDB() {
    return db;
}

module.exports = { connectDB, getDB };
