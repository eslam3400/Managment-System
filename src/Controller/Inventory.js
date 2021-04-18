const Model = require('../Model/Model')

class Product{

    add($product){
        new Model("inventory").add($product)
    }

    get($productId,callBack = ()=>{}){
        new Model("inventory").get({where:`id = ${$productId}`},product=>callBack(product))
    }
}

class Inventory{
    addProduct($product){
        new Product().add($product)
    }

    getProduct($productId,callBack=()=>{}){
        new Product().get($productId,product=>callBack(product))
    }

    getProducts(callBack=()=>{}){
        new Model("inventory").get({},products=>callBack(products))
    }
}

// new Inventory().addProduct({
//     id:1,
//     name:"pro1",
//     description:"pro1",
//     category:"pro1",
//     barcode:"pro1",
//     buying_price:1,
//     selling_price:1,
//     taxes:1,
//     amount:1,
//     min_amount:1,
//     provider:"pro1",
// })

// new Inventory().getProduct(1,product => console.log(product))
// new Inventory().getProducts(product => console.log(product))

let addProduct = (req,res)=>
    new Inventory().addProduct(req.body)

let getProduct = (req,res)=>
    new Inventory().getProduct(req.body.id,product=>res.render("productDetails",{product}))

let getProducts = (req,res)=>
    new Inventory().getProducts(products=> res.render("inventory",{products}))