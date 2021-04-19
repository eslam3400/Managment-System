//add product to the inventory
new Inventory().addProduct({
  id: 1,
  name: "pro1",
  description: "pro1",
  category: "pro1",
  barcode: "pro1",
  buying_price: 1,
  selling_price: 1,
  taxes: 1,
  amount: 1,
  min_amount: 1,
  provider: "pro1",
})

new Inventory().getProduct(1, product => console.log(product))
new Inventory().getProducts(product => console.log(product))