const express = require('express');
const morgan = require('morgan');

const app = express();

if (process.env.DEV_MODE == 'dev')
    app.use(morgan('dev'))

app.use(express.json({limit: '10kb'}));

module.exports = app;