const express = require('express');

const router = express.Router();
const wallet_controller = require('../Controller/wallet_controller');



//----------------------this two api user to get a data---------------------
router.post('/cli', wallet_controller.walletCli);
router.post('/node', wallet_controller.walletNode);



module.exports = router;


