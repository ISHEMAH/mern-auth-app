import { Router } from "express";
const router = Router()
import * as controller from '../controllers/appController.js';

// post methods
router.route('/register').post(controller.register); 
router.route('/registerMail').post()
router.route('/authenticate').post()
router.route('/login').post(controller.verifyUser,controller.login);


// get methods
router.route('/user/:username').get(controller.getUser)
router.route('/generateOTP').get(controller.generateOTP)
router.route('/verifyOTP').get(controller.verifyOTP)
router.route('/createResetSession').get(controller.createResetSession)


// put methods
router.route('/updateuser').put()
router.route('/resetPassword').put()


export default router