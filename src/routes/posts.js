var express = require('express');
var router = express.Router();
const postQs = require('../db/postQueries');

// Gets all posts for a community
router.get("/:communityName", async (req, res) => {
    try {
        const posts = await postQs.getPostsByCommunity(req.params.communityName);
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
            communityId: req.body.communityId,
            user: req.session.user.name,
            replies: []
        };
        const response = await postQs.createPost(post);
        res.json(response);
    } catch (err) {
        console.error("Error creating post:", err);
        res.json({ error: "failed to create post" });
    }
});


router.post('/createReply', async (req, res) => {
    try {
        const reply = {
            message: req.body.message,
            user: req.session.user.name
        }
        const response = await postQs.createReply(reply, req.body.postId)
        res.json(response)
    } catch (err) {
        console.error("Error creating reply:", err);
        res.json({ error: "failed to create reply" });
    }
})

module.exports = router;