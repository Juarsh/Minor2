const sendOTPController = require('./sendOTPController')
const registerController = require('./registerController')
const sendMailController = require('./sendMailController');
const verifyOTPController = require('./verifyOTPController')
const loginController = require('./loginController')
const refreshTokenController = require('./refreshTokenController')
const setGroupController = require('./setGroupController');
const deleteGroupController = require('./deleteGroupController.js');
const getGroupController = require('./getGroupController');

module.exports = {
    sendOTPController,
    registerController,
    sendMailController,
    verifyOTPController,
    loginController,
    refreshTokenController,
    setGroupController,
    getGroupController,
    deleteGroupController
}