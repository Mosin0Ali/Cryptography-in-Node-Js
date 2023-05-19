const {createHmac}= require('crypto');
const { create } = require('domain');
const key='Sup3rS3cr3T!';
const message ='They Are Coming !';
const hmac= createHmac('sha256',key).update(message).digest('hex');
console.log(hmac);