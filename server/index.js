const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

//import routes
const markets = require("./routes/api/markets");
const trendingCoin = require("./routes/api/trendingCoin");
const topGainerCoin = require("./routes/api/topGainerCoins");
const coinDetails = require("./routes/api/coinDetails");

//middlewares
app.use(cors());

//define routes
app.get("/api/coins/markets", markets);
app.get("/api/search/trending", trendingCoin);
app.get("/api/coins/markets/topgainer", topGainerCoin);
app.get(`/api/coins/${id}`, coinDetails);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/dist"));
  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/index.html"));
  });
}
app.listen(port, console.log(`application is live on port ${port}`));
