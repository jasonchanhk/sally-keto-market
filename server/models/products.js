const productsData = require('../data')

class Product {
    constructor(data){
        this.id = data.id;
        this.productName = data.productName;
        this.image = data.image;
        this.from = data.from;
        this.nutrients = data.nutrients;
        this.quantity = data.quantity;
        this.price = data.price;
        this.organic = data.organic;
        this.description = data.description;
    }

    static get all(){
        const products = productsData.map((product) => new Product(product))
        return products
    }

    static findById(id) {
        try {
            const productData = productsData.filter((product) => product.id === id)[0];
            const product = new Product(productData);
            return product;
        } catch (err) {
            throw new Error('That cat does not exist!');
        }
    }

    destroy() {
        const product = productsData.filter((product) => product.id === this.id)[0];
        productsData.splice(productsData.indexOf(product), 1);
    }
}

module.exports = Product
