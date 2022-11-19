// const res = require('../shared/res');
const Services = require('../Services/wallet_services');
const { createModulerLogger } = require('../Utillities/logger');
const logger = createModulerLogger('walletController')

class Wallet_Cli {
    //-----------------------------------------wallet--Cli--api --------------(req,res controller)-----------------------------------------------------------------------------
    async walletCli(req, res) {

        const data = req.body;
        console.log(req);
        const walletcli = await Services.WalleteCliservices(data)
        res.json(walletcli);
        logger.info(JSON.stringify('walletCli', walletcli));




    }
    //---------------------------------------------------wallet--Node--api--------(req,res controller)-------------------------------------------------------------------------------
    async walletNode(req, res) {

        const data = req.body;
        const walletnode = await Services.WalletNodeservices(data);

        res.json(walletnode);
        logger.info(JSON.stringify('nodeapi', walletnode));
    }
 

}

module.exports = new Wallet_Cli();

