const { groupModel } = require("../models");

const getGroupController = (req,res) => {
    const { adminEmail } = req.params;
    groupModel.find(adminEmail).then((ans) => {
        console.log(ans);
        if(ans) {
            return res.send({
                Object: ans,
                found: true
            })
        }
        else
            res.send({
                found: false,
            })
    }).catch((err) => {
        console.log(err);
        res.send({
            err: err
        })
    })
}

module.exports = getGroupController;