import { Router } from "express";
const router = Router()
import * as controller from '../controllers/appController.js';


// post methods
router.route('/register').post(controller.register); 
router.route('/registerMail').post()
router.route('/authenticate').post()
router.route('/login').post()


// get methods
router.route('/user/:useername').get()
router.route('/generateOTP').get()
router.route('/verifyOTP').get()
router.route('/createResetSession').get()


// put methods
router.route('/updateuser').put()
router.route('/resetPassword').put()


export default router