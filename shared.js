var save_button = document.getElementById("addToCart");

function addProduct(prod) {
  let cart = getProduct();
  if (cart && cart.length > 0) {
    console.log(cart);
    let found = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === prod._id) {
        cart[i].quantity += 1;
        found = true;
      }
      if (cart.length === i + 1 && !found) {
        console.log("2eme", cart);
        let product = {
          name: prod.name,
          price: prod.price / 100,
          quantity: 1,
          id: prod._id,
        };
        cart.push(product);
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    console.log("3eme", cart);
    cart = [];
    let product = {
      name: prod.name,
      price: prod.price / 100,
      quantity: 1,
      id: prod._id,
    };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function getProduct() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart; //retourne une valeur dans le cart.js//
}
