const { userModel } = require('../models');
const { tokenGenerate } = require('../utils');

const register = (req, res) => {
    const { phoneNumber, name, email, password } = req.body;
    const user = new userModel({ phoneNumber, name, email, password });
    user.createUser().then((ans) => {
        tokenGenerate(ans).then(({ accessToken, refreshToken }) => {
            res.send({
                accessToken,
                refreshToken,
                found: true,
            })
        });
    }).catch((err) => {
        res.send({
            success: false,
            message: err
        });
    });
}
module.exports = register;