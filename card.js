function main() {
  let cart = getProduct();
  console.log(cart);
  const elem = document.getElementById("showProduct");
  console.log(elem);
  if (localStorage === null) {
    const panierVide = `
    <div>
    <div>Le panier est vide</div>
    </div>
    `;
    elem.innerHTML = panierVide;
  } else {
    let panierHtml = "";

    for (i = 0; i < cart.length; i++) {
      const product = cart[i];
      panierHtml += `
        <div class="container">
        <div>Quantité 1 - ${product.name}</div>
        <div>${product.price} € - supp article</div> 
        </div>
      `;
    }
    elem.innerHTML = panierHtml;
  }
}
main();
//
