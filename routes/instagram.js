const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { url } = req.body;

  try {
    if (!url.includes("instagram.com")) {
      return res.status(400).json({ error: "Invalid Instagram URL" });
    }

    const apiUrl = `https://api.instagram.com/oembed/?url=${url}`;
    const response = await axios.get(apiUrl);

    const thumbnail = response.data.thumbnail_url;
    const title = response.data.title || "Instagram Video";
    const download = response.data.thumbnail_url; // fallback if no direct video URL

    res.json({ title, thumbnail, download });
  } catch (err) {
    console.error("Instagram error:", err.message);
    res.status(500).json({ error: "Failed to fetch Instagram video" });
  }
});

module.exports = router;
