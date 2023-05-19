const {createHash}= require('crypto');

function hash(input){
    return createHash('sha256').update(input).digest('hex');
}

password ='Hi There';
const hash1= hash(password);
password='Hi There ';
const hash2=hash(password);
const match=hash1===hash2;

console.log(match?'Matched':'Not a Match');