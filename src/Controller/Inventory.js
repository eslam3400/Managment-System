const Model = require('../Model/Model')
const Product = require('./Product')

class Inventory {
    addProduct($product) {
        new Product().add($product)
    }

    getProduct($productId, callBack = () => { }) {
        new Product().get($productId, product => callBack(product))
    }

    getProducts(callBack = () => { }) {
        new Model("inventory").get({}, products => callBack(products))
    }
}

let addProductPage = (req, res) => res.render('add-product')

let addProduct = (req, res) => new Inventory().addProduct(req.body)

let getProduct = (req, res) => new Inventory().getProduct(req.body.id, product => res.render("productDetails", { product }))

let getProducts = (req, res) => new Inventory().getProducts(products => res.render("inventory", { products }))

module.exports = { Inventory, addProduct, getProduct, getProducts, addProductPage }