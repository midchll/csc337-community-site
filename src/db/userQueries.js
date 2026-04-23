// user auth db queries

const { getDB } = require('./mongo');

// TODO: create/find users and other userCollection mongo queries

async function getUserByEmail(email) {
    const db = getDB();
    return db.collection('userCollection').findOne({email: email});
}

async function createUser(user) {
    const db = getDB();
    return db.collection('userCollection').insertOne(user);
}

module.exports = { getUserByEmail, createUser };