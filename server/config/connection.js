const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cardshop", {
    useNewUrlParser: true,
});

module.exports = mongoose.connection;