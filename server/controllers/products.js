const express = require('express');
const router = express.Router();

const Product = require('../models/products');

router.get('/', (req, res) => {
    const productsData = Product.all;
    res.send(productsData);
});

router.get('/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const selectedProduct = Product.findById(productId);
        res.send(selectedProduct);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productToDestroy = Product.findById(productId);
    productToDestroy.destroy();
    res.status(204).send();
})


module.exports = router;
