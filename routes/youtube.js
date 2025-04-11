const express = require("express");
const ytdl = require("ytdl-core");
const router = express.Router();

router.post("/", async (req, res) => {
    const { url } = req.body;
    try {
        const info = await ytdl.getInfo(url);
        const title = info.videoDetails.title;
        const thumbnail = info.videoDetails.thumbnails.pop().url;
        const format = ytdl.chooseFormat(info.formats, { quality: "18" });
        res.json({ title, thumbnail, download: format.url });
    } catch (err) {
        res.json({ error: "Invalid YouTube URL" });
    }
});

module.exports = router;