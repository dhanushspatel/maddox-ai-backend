const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const youtubeRoute = require("./routes/youtube");
const instagramRoute = require("./routes/instagram");

app.use("/api/youtube", youtubeRoute);
app.use("/api/instagram", instagramRoute);

app.get("/", (req, res) => {
  res.send("Maddox AI Downloader Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
