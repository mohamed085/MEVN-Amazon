const router = require('express').Router();

const productController = require('../controllers/product');
const upload = require('../middlewares/upload-photo.js');

/** Post request --> Create New Product */
router.post('/products', upload.single('photo'), productController.postAddNewProduct);

/** Get request --> Return All Products */
router.get('/products', productController.getAllProduct);

/** Get request --> Return Single Product */
router.get('/products/:id', productController.getProduct);

/** Put request --> Update Product */
router.put('/products/:id', productController.putProduct);

/** Delete request --> Delete Product */
router.delete('/products/:id', productController.deleteProduct);


module.exports = router;