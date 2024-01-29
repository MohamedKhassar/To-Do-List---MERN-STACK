const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
require("./Connection");
app.listen(PORT, () => {
  console.log(`app listening at : http://localhost:${PORT}/`);
});
