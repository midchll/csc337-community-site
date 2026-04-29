// post db queries

const { getDB } = require('./mongo');

async function getPostsByCommunity(communityId) {
    const db = getDB();
    return db.collection('postsCollection').find({ communityId }).toArray();
}

async function createPost(post) {
    const db = getDB();
    return db.collection('postsCollection').insertOne(post);
}

module.exports = { getPostsByCommunity, createPost };