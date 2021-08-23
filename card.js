function main() {
  let cart = getProduct();
  console.log(cart);
  const elem = document.getElementById("showProduct");

  console.log(elem);
  if (cart === null) {
    const panierVide = `
    <div>
    <div>Le panier est vide</div>
    </div>
    `;
    elem.innerHTML = panierVide;
  } else {
    let panierHtml = "";

    let grandTotal = 0;
    for (i = 0; i < cart.length; i++) {
      const product = cart[i];
      var totalPrice = product.price * product.quantity;
      grandTotal += totalPrice;
      panierHtml += `
      <div id="${product.id}" class="container-fluid justify-content-center">
      <div>Quantité ${product.quantity} - ${product.name}</div>
      <div class="d-flex p-1">
      <div>${product.price} € - <button  onclick="deleteProduct('${product.id}')" class="btn_suppr btn btn-outline-secondary">-</button></div> 
      <button  onclick="addProduct('${product.id}')" class="btn_suppr btn btn-outline-secondary">+</button></div> 
      </div>
      <div class="text-right sous_total">${totalPrice} €</div>
        </div>
      </div>
      `;
      if (i + 1 === cart.length) {
        let total = document.getElementById("totalPrice");
        total.innerHTML = grandTotal + "€";
      }
    }
    elem.innerHTML = panierHtml;
  }
}

main();
function deleteProduct(item) {
  let cart = getProduct();
  console.log("celui la", cart);
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === item) {
      cart[i].quantity -= 1;
      if (cart[i].quantity < 1) {
        cart.splice(i, 1);
        let target = document.getElementById("" + item);
        target.remove();
      }
      //i--;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("celui apres ", cart);
  main();
}

function addProduct(item) {
  let cart = getProduct();
  console.log("celui la", cart);
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === item) {
      cart[i].quantity += 1;
      if (cart[i].quantity < 1) {
        cart.splice(i, 1);
        let target = document.getElementById("" + item);
        target.remove();
      }
      //i--;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("celui apres ", cart);
  main();
}
