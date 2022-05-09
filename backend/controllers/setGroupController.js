const { groupModel } = require("../models");

const setGroupController = (req,res) => {
    const { adminEmail, memberEmails } = req.body;
    const group = new groupModel({adminEmail, memberEmails});
    group.save((error, obj) => {
        if (error) {
            return res.send({
                message: error,
                result: false
            })
        } 
        return res.send({
            message: 'Group Created',
            result: true,
            obj
        })
    })
}

module.exports = setGroupController;