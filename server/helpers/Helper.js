import bcrpt from 'bcrypt';
import dotenv from 'dotenv';
class Helper {
   constructor(){
       dotenv.config();
       this.bcrpt = bcrpt;
   }

async hashPassword(password){
   return  bcrpt.hash(password, bcrpt.genSaltSync(6));
}
async isCorrestPassword(pass_req,pass_res){
    return bcrpt.compare(pass_req, pass_res);
}
isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }  
}
export default new Helper();