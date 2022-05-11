const { groupModel } = require("../models");

const deleteGroupController = () => {
    const { groupID , deletedByEmail } = req.body;
    groupModel.findByID(groupID).then((ans) => {
        if(ans) {
            ans.deleted = true;
            ans.deletedBy = deletedByEmail;
            ans.save().then(()=>{
                return res.send({
                    deleted: true
                })
            });
            
        }
        else
            res.send({
                deleted: false,
            })
    }).catch((err) => {
        console.log(err);
        res.send({
            err: err
        })
    })
}

module.exports = deleteGroupController;