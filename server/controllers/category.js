const Category = require('../models/category.js');

/** Create New Category */
exports.postAddNewCategory = async (req, res) => {
    try{
        let category = new Category();
        category.type = req.body.type;

        await category.save();
        res.json({
            status: true,
            message: "Successfully add category"
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

/** Display All Categories */
exports.grtAllCategories = async (req, res) => {
    try{
        let categories = await Category.find();

        res.json({
            status: true,
            categories: categories,
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}