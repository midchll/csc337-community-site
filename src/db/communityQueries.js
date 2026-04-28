// community db queries

const { getDB } = require('./mongo');

// TODO: create/find communities and other communityCollection mongo queries
async function getAllCommunities() {
    const db = getDB();
    return db.collection('communityCollection').find().toArray();
}

async function createCommunity(community) {
    const db = getDB();

    const existing = await db.collection('communityCollection').findOne({ name: community.name });
    if (existing) {
        return { error: 'Community name already taken' };
    }
    return await db.collection('communityCollection').insertOne(community);
}

module.exports = { getAllCommunities, createCommunity };