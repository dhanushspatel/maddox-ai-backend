const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    const { url } = req.body;
    // This is mock data for demonstration.
    // Replace this with real API call if needed.
    res.json({
        title: "Instagram Video",
        thumbnail: "https://via.placeholder.com/300x200.png?text=Instagram+Preview",
        download: url
    });
});

module.exports = router;