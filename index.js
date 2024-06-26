const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')
// .env configuration
require('dotenv').config();
const port = process.env.PORT || 3001

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Connect to DATABASE
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
