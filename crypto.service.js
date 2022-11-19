const CryptoJS = require('crypto-js');

let pandoSecret = '';
let nonce = '';

const CryptoService = {
    encryptHmacSHA256,
    nonce
}



function encryptHmacSHA256(text) {
    let hash = CryptoJS.HmacSHA512(text, pandoSecret);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    return hashInBase64
}
module.exports = CryptoService