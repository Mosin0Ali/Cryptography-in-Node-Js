const {generateKeyPairSync}= require('crypto');
const {privateKey, publicKey}=generateKeyPairSync('rsa',{
    modulusLength:2083,
    publicKeyEncoding:{
        type:'spki',
        format:'pem', //Privacy Enhanced Mail
    },
    privateKeyEncoding:{
        type:'pkcs8',
        format:'pem',
        cipher:'aes-256-cbc',
        passphrase:'top-secret'
    }
});

