// community db queries

const { getDB } = require('./mongo');

// TODO: create/find communities and other communityCollection mongo queries
async function getAllCommunities() {
    const db = getDB();
    return db.collection('communityCollection').find().toArray();
}

async function createCommunity(community) {
    const db = getDB();
    return db.collection('communityCollection').insertOne(community)
}

module.exports = { getAllCommunities, createCommunity };