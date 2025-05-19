const express = require('express');
const chatRoute = require('./routes/chat');

const app = express();
app.use(express.json());

app.use('/api/chat', chatRoute);

module.exports = app;