
const response = require('../shared/response');
const axios = require('axios');
const { createModulerLogger } = require('../Utillities/logger');



//-----------------------------------------services--------------------------------------------------------
const StakePurposes = {
    StakeForValidator: 0,
    StakeForGuardian: 1,
    StakeForRametronEnterprise: 2,
    StakeForRametronPro: 3,
    StakeForRametronLite: 4,
    StakeForRametronMobile: 5
};
const logger = createModulerLogger('walletServices');
class WalletServices {

    //---------------------------------------------------wallete-cli--services------------------------------------------------------
    async WalleteCliservices(data) {

        try {
            const resultcli = await axios.post(process.env.CLISERVICES, data);
            if (resultcli.data.result) {
                logger.info('cliservice', resultcli.data)
                return response.sendSuccess('data', resultcli.data)
            } else {
                logger.info('data is not found in WalleteCliservices api', resultcli.data.error.message)

                return response.sendError(resultcli.data.error.message, [])
            }

        } catch (err) {
            logger.error('WalleteCliservicesinvalid', err)
            return response.sendError(err, [])
        }

    }
    //---------------------------------------------------( Wallet--Node--services-) -----------------------------------------------------

    async WalletNodeservices(data) {
        try {

            const resultnode = await axios.post(process.env.NODESERVICES, data);
            console.log(resultnode);
            if (resultnode.data.result) {
                logger.info('WalletNodeservices', resultnode.data)
                return response.sendSuccess('data', resultnode.data)

            } else {
                logger.info('WalletNodeservices', resultnode.data)
                return response.sendError(resultnode.data.error.message, [])
            }



        } catch (err) {
            logger.error('WalletNodeservices', err)
            return response.status(500).json(response.sendError(err, []));

        }
    }





}
const wallet = new WalletServices();

module.exports = wallet;
