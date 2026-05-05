// user auth db queries

const { getDB } = require('./mongo');

async function getUserByEmail(email) {
    const db = getDB();
    return db.collection('userCollection').findOne({email: email});
}

async function createUser(user) {
    const db = getDB();
    return db.collection('userCollection').insertOne(user);
}

module.exports = { getUserByEmail, createUser };