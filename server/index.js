const express = require("express");
const app = express();
const PORT = process.env.PORT;
require("./Connection");
app.listen(PORT, () => {
  console.log(`app listining at : http://localhost:${PORT}/`);
});
