// community db queries

const { getDB } = require('./mongo');

// TODO: create/find communities and other communityCollection mongo queries
async function getAllCommunities() {
    const db = getDB();
    return db.collection('communityCollection').find().toArray();
}

module.exports = { getAllCommunities };