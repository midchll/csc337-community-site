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
router.post("/create", async (req, res) => {
    try {
        const community = {
            name: req.body.name,
            description: req.body.description,
        }



        const response = await communityQs.createCommunity(community);
        if (response.error) {
            return res.status(409).json(response);
        }

        res.json(response);
    } catch (err) {
        console.error("Error creating community:", err);
        res.json({error: "Failed to create community"});
    }
});

module.exports = router;