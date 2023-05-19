//To check if the data is from the right source
const {createSign,createVerify}=require('crypto')
const {publicKey,privateKey}=require('./key-pair');

const message= 'This data must be signed';
const signer= createSign('rsa-sha256');
signer.update(message);

const signature= signer.sign({key:privateKey,passphrase:'top-secret'},'hex');

//Verify

const verifier=createVerify('rsa-sha256');
verifier.update(message);
const isVerified= verifier.verify(publicKey,signature,'hex');
console.log(isVerified);
