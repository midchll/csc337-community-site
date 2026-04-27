// post db queries

const { getDB } = require('./mongo');

// TODO: create/find posts and other postCollection mongo queries
async function getAllPosts() {
    const db = getDB();
    return db.collection('postsCollection').find().toArray();
}

module.exports = { getAllPosts };