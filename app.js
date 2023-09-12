const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
app.get("/", (req, res, next) => {
  res.send("<h1>SUP!!!</h1>");
});
app.listen(port, () => {
  console.log("====================================");
  console.log(`listening on port ${port}`);
  console.log("====================================");
});
