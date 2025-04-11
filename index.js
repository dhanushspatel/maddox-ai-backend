const express = require("express");
const cors = require("cors");
const youtubeRoute = require("./routes/youtube");
const instagramRoute = require("./routes/instagram");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/youtube", youtubeRoute);
app.use("/api/instagram", instagramRoute);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));