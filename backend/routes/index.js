const router = require('express').Router();
const passport = require('passport')
const { sendOTPController, registerController,deleteGroupController, setGroupController, sendMailController, verifyOTPController, loginController, refreshTokenController, getGroupController } = require('../controllers')
const { tokenGenerate } = require('../utils');
const { verifyToken } = require('../middlewares');

require('../passport/google')

router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'], session: false }));

router.get('/auth/google/callback',
  passport.authenticate('google'),
  function (req, res) {
    tokenGenerate(req.user).then(({ accessToken, refreshToken }) => {
      res.send({                                                        //Might have to send this through query params
          accessToken,
          refreshToken,
          found: true,
      })
    });
  }
);

router.post('/sendOTP', sendOTPController);                                   //This route is used for send otp

router.get('/verifyOTP', verifyOTPController);                              //This route is used for verifying otp

router.post('/register', registerController);      //Save users in database logging them with phone number

router.post('/sendmail', sendMailController);                             //Activation of email through mail

router.post('/login', loginController);                                      //Logging in user through phone number

router.get('/refreshTokenGenerate', refreshTokenController);

router.post('/setgroup', setGroupController);

router.get('/getgroup', getGroupController);

router.delete('/deletegroup', deleteGroupController);


module.exports = router;
