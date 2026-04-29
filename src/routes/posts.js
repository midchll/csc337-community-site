var express = require('express');
var router = express.Router();
const postQs = require('../db/postQueries');

// Gets all posts for a community
router.get("/:communityId", async (req, res) => {
    try {
        const posts = await postQs.getPostsByCommunity(req.params.communityId);
        res.json(posts);
    } catch (err) {
        console.error("Error getting posts:", err);
        res.json({ error: "failed to get posts" });
    }
});

// Creates a post in a community
router.post("/create", async (req, res) => {
    try {
        const post = {
            title: req.body.title,
            content: req.body.content,
            communityId: req.body.communityId
        };
        const response = await postQs.createPost(post);
        res.json(response);
    } catch (err) {
        console.error("Error creating post:", err);
        res.json({ error: "failed to create post" });
    }
});

module.exports = router;