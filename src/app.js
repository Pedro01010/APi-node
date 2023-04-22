
const express = require('express');
const sendError = require('@helper/sendError')
const routes = require('./routes')
const rateLimit = require('@middleware/rateLimit');

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(sendError)
app.use(...rateLimit)
app.use ('/', routes);

module.exports = app;