const express = require("express");
const router = express.Router();
const ytdl = require("ytdl-core");

router.post("/", async (req, res) => {
  const { url } = req.body;

  try {
    // Simple URL check to allow multiple formats
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      return res.status(400).json({ error: "Invalid YouTube URL format" });
    }

    // Validate using ytdl-core
    if (!ytdl.validateURL(url)) {
      return res.status(400).json({ error: "Not a valid YouTube video link" });
    }

    const info = await ytdl.getInfo(url);

    const title = info.videoDetails.title;
    const thumbnail = info.videoDetails.thumbnails.pop().url;
    const download = ytdl.chooseFormat(info.formats, {
      quality: "18", // MP4 360p
    }).url;

    res.json({ title, thumbnail, download });
  } catch (err) {
    console.error("YouTube error:", err.message);
    res.status(500).json({ error: "Failed to fetch YouTube video" });
  }
});

module.exports = router;
