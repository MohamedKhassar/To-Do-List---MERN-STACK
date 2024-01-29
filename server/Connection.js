const mongoose = require('mongoose');
require('dotenv').config();
URI = process.env.URI;

mongoose.connect(URI)
.then(console.log('you are connected'))
.catch(e=>console.log(e.message))



module.exports = mongoose;