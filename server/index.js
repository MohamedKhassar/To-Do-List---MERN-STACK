const express = require("express");
const app = express();
const port = 3000;
require("./Connection");
app.listen(port, () => {
  console.log(`app listining at : http://localhost:${port}/`);
});
