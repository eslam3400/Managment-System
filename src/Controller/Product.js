const Model = require('../Model/Model')

class Product {

  add($product) {
    new Model("inventory").add($product)
  }

  get($productId, callBack = () => { }) {
    new Model("inventory").get({ where: `id = ${$productId}` }, product => callBack(product))
  }

  sell($productId, $amount) {
    get($productId, product => new Model("inventory").update({ amount: product.amount - $amount }, `id = ${$productId}`))
  }

  update($productId, $product) {
    new Model("inventory").update($product, `id = ${$productId}`)
  }
}

module.exports = Product