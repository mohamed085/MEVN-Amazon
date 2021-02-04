const Product = require('../models/product.js');
/** Product Elements
 * title: String, description: String, photo: String, price: Number,
 * stockQuantity: Number, rating: [Number]
 */

/** Create New Product */
exports.postAddNewProduct = async (req, res) => {
    console.log('req.file')
    try{
        let product = new Product();
        product.ownerID = req.body.ownerID;
        product.categoryID = req.body.categoryID;
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = '/_nuxt/_/server/uploads/'+req.file.filename;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();
        res.json({
            status: true,
            message: "Successfully add product",
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

/** Display All Products */
exports.getAllProduct = async (req, res) => {
    try{
        let products = await Product.find();
        res.json({
            status: true,
            products: products,
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

/** Display Single Product by ProductId */
exports.getProduct = async (req, res) => {
    try{
        let product = await Product.findOne({
            _id: req.params.id
        });
        res.json({
            status: true,
            product: product,
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

/** Update Product */
exports.putProduct = async (req, res) => {
    const productId = req.params.id;
    try{
        let product = await Product.findOneAndUpdate({
            _id: productId
        },{
            $set: {
                title: req.body.title,
                category: req.body.category,
                description: req.body.description,
                photo: req.file.filename,
                price: req.body.price,
                stockQuantity: req.body.stockQuantity,
                owner: req.body.ownerID
            }
        },{
            upsert: true
        });

        res.json({
            status: true,
            product: product
        });

    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

/** Delete Product */
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try{
        let product = await Product.findOneAndDelete({
            _id: productId
        });
        if (product){
            res.json({
                status: true,
                message: "Successfully delete product"
            });
        }
    }catch (err){
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}
