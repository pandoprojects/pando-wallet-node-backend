
require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 4011;
const bodyParser = require('body-parser');
const router = require('./Router/router');
const { createModulerLogger } = require('./Utillities/logger');

const logger = createModulerLogger('app.js');
//--------------------------------------------router---------------------------------
app.use(bodyParser.json());
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Headers', '*');
    }
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});



//--------------------------------------
app.use('/apis', router);
process.on('uncaughtException', err => { })
//-------------Testing ----------------------------------------
app.get('', (req, res) => {
   logger.info("app is run successfully ");
});


//port listen---------------------------------------------
app.listen(port, function () {
    logger.info(`Server is Running on Port  http://localhost:${port}/`);
});