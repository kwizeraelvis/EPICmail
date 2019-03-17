import express from 'express';
import user from '../controllers/User';
import dbUser from '../db/controllers/User';
import verfic from '../db/helpers/emailVerfication';
import {apiUrlv1authLogin, apiUrlv1authSignup ,apiUrlv2authSignup, apiUrlv2authLogin} from '../helpers/const'
const router = express.Router();
router.get('/api/v1/users', user.getAllUser);
//API version1
router.post(`${apiUrlv1authSignup}`, user.createUser);
router.post(`${apiUrlv1authLogin}`, user.login);
router.get('/testCon', verfic.sendVerification);
//API version2
router.post(`${apiUrlv2authSignup}`, dbUser.signup,verfic.sendVerification);
// router.post(`${apiUrlv2authLogin}`, userdb.login);
export default router;