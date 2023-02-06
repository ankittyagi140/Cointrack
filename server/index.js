const methods = require("./services/services");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

//adding middlewares
app.use(cors());

app.get("/markets", async (req, res, next) => {
  const response = await methods.getMethod("/markets");
  res.send(response.data);
  res.end();
});

app.listen(port, console.log(`application is live on port ${port}`));
