var express = require('express');
var router = express.Router();

var communities = [];
var id = 0;

//Gets all communities
router.get("/", (req, res) => {
    res.json(communities);
});

//Appends a community and returns it
router.post("/", (req, res) => {
    communities.push({
        name: req.body.name,
        description: req.body.description,
        id: id++
    });
    res.json({ community: communities[communities.length - 1] });
});

module.exports = router;