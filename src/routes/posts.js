var express = require('express');
var router = express.Router();
const communityQs = require('../db/communityQueries');

//Gets all communities
router.get("/", async (req, res) => {
    try {
        const communities = await communityQs.getAllCommunities();
        res.json(communities);
    } catch (err) {
        console.error("Error getting communities:", err);
        res.json({error: "failed to get communities"});
    }
});

//Appends a community and returns it
// FIXME: db functionality
let communities = []; // TEMP
router.post("/create", (req, res) => {
    communities.push({
        name: req.body.name,
        description: req.body.description,
        id: id++
    });
    res.json({ community: communities[communities.length - 1] });
});

module.exports = router;