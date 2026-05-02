// post db queries

const { getDB } = require('./mongo');
const { ObjectId } = require('mongodb')

async function getPostsByCommunity(communityId) {
    const db = getDB();
    return db.collection('postsCollection').find({ communityId }).toArray();
}

async function createPost(post) {
    const db = getDB();
    return db.collection('postsCollection').insertOne(post);
}

async function createReply(reply, postId) {
    const db = getDB();
    return db.collection('postsCollection').updateOne(
        {_id: new ObjectId(postId) },
        { $push: {replies: reply} }
    )
}

module.exports = { getPostsByCommunity, createPost, createReply };