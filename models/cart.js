const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addToCart(id, price) {
    // Get the older cart items
    fs.readFile(p, (err, fileContent) => {
        let cartItems = { products : [], totalPrice : 0};
        if(!err){
            cartItems = JSON.parse(fileContent);
        }
        const existingItemIndex = cartItems.products.findIndex(item => item.id == id)
        let updatedCartItems = [...cartItems.products];
        if(existingItemIndex == -1){ // add new product of it doesn't exist
            updatedCartItems.push({id: id, qty: 1});
        } else { // OR increase qty if already exists
            updatedCartItems[existingItemIndex].qty++;
        }
        const updatedTotalPrice = parseInt(cartItems.totalPrice) + parseInt(price);
        fs.writeFile(p, JSON.stringify({ products: updatedCartItems, totalPrice : updatedTotalPrice }), (err) => console.error(err));
    });
  }

  static removeProduct() {

  }
};
