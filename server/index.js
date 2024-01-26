const express = require('express');
const app = express()
const port = 2000;
require('./Connection');
app.listen(port, ()=>{
    console.log(`app listining at : http://localhost:${port}/`)
}) 