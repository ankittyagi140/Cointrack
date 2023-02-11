const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

//import routes
const markets = require("./routes/api/markets");

//middlewares
app.use(cors());

//define routes
app.get("/api/markets", markets);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/dist"));
  app.get("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/index.html"));
  });
}
app.listen(port, console.log(`application is live on port ${port}`));
