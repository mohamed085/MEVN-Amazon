const router = require('express').Router();


const productController = require('../controllers/category');

/** Post request --> Create New Category */
router.post('/categories', productController.postAddNewCategory);

/** Get request --> Return All Categories */
router.get('/categories', productController.grtAllCategories);


module.exports = router;