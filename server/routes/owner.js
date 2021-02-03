const router = require('express').Router();

const upload = require('../middlewares/upload-photo.js');
const productController = require('../controllers/owner');

/** Post request --> Create New Owner */
router.post('/owners', productController.postAddNewOwner);

/** Get request --> Return All Owners */
router.get('/owners',  productController.getAllOwners);


module.exports = router;