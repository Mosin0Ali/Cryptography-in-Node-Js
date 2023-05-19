const {scryptSync, randomBytes, timingSafeEqual}=require('crypto');

let users=[];
function signup(email,password){
    const salt = randomBytes(16).toString('hex');
    const hashedPassword=scryptSync(password,salt,64).toString('hex');
    const user ={email,password:`${salt}:${hashedPassword}`};
    users.push(user);
    return user;
}

function login(email,password){
    const user=users.find(d=>d.email===email);
    const [salt,key]=user.password.split(':');
    const hashedBuffer= scryptSync(password,salt,64);
    const keyBuffer= Buffer.from(key,'hex');
    const match = timingSafeEqual(hashedBuffer,keyBuffer); //Prevent Timing Attacks
    if(match){
        return 'Login Successfull';
    }
    return 'Login Failed';
}

signup('alimosinali007@gmail.com','hello@123');
const is_login=login('alimosinali007@gmail.com','hello@123');
console.log(is_login)

