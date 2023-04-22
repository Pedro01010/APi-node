require('dotenv').config()
require('module-alias/register')
const mongoose = require('mongoose')
const boot = require('@service/boot')
const config = require('@config')

mongoose.connect(config.db.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
    boot()
  })
  .catch((error) => console.log('Error connecting to MongoDB', error));