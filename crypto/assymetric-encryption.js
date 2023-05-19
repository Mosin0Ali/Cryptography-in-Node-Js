//SSL
const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./key-pair');

const message = 'They are coming !';
const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
)

console.log(encryptedData.toString('hex'));

const decryptedData=privateDecrypt(
    // privateKey,
   {
    key:privateKey,
    passphrase:'top-secret'
   },
   encryptedData
)


console.log(decryptedData.toString('utf-8'));