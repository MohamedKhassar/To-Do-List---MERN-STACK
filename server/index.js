const express = require("express");
const router = require("./Routers/router");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

require("./Connection");
app.use(router);
app.listen(PORT, () => {
  console.log(`app listening at : http://localhost:${PORT}/`);
});
