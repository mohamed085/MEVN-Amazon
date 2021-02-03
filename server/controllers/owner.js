const Owner = require('../models/owner');
const upload = require('../middlewares/upload-photo.js');

/** Create New Owner */
exports.postAddNewOwner = async (req, res) => {
    try{
        let owner = new Owner();
        owner.name = req.body.name;
        owner.about = req.body.about;
        owner.avatar = req.file.filename;

        await owner.save();
        res.json({
            status: true,
            message: "Successfully add owner"
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

/** Display All Owners */
exports.getAllOwners = async (req, res) => {
    try{
        let owners = await Owner.find();

        res.json({
            status: true,
            owners: owners,
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}