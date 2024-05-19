const express = require('express');

const { createProduct, getProducts, getProduct } = require('../../controllers/productController');
const { createProductValidator } = require('../../middlewares/productMiddleware');

const productRouter = express.Router();


productRouter.post('/', createProductValidator, createProduct); 
productRouter.get('/', getProducts); 
productRouter.get('/:id', getProduct);

module.exports = productRouter;