const { userModel } = require('../models')
const { tokenGenerate } = require('../utils');

const login = async (req, res) => {
    const { email, password } = req.body
    userModel.findOne({ email, password }).then((ans) => {
        if (ans) {
            tokenGenerate(ans).then(({ accessToken, refreshToken }) => {
                res.send({
                    accessToken,
                    refreshToken,
                    found: true,
                    user: ans
                })
            });
        }
        else
            res.send({
                found: false,
                message: "User does not exist"
            })
    }).catch((err) => {
        console.log(err);
        res.send({
            err: err
        })
    })
}

module.exports = login;