const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.url)
.then(console.log('you are connected'))
.catch(e=>console.log(e.message))


module.exports = mongoose;