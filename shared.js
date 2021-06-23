var save_button = document.getElementById("addToCart");

function addProduct(prod) {
  console.log(prod);
  let product = {
    name: prod.name,
    price: prod.price / 100,
    quantity: 1,
  };
  let cart = JSON.parse(localStorage.getItem("cart")); // pour passé du string au parse pour un tableau //
  if (!cart) cart = []; //si pas de cart alors make cart vide //
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart)); // pour passé en string//
}

function removeProduct(product) {}

function getProduct() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart; //retourne une valeur dans le cart.js//
}

function sendData(data) {
  var XHR = new XMLHttpRequest();
  var urlEncodeData = "";
  var name;
  for (name in data) {
    urlEncodeDataPairs.push(
      encodeURIComponent(name) + "=" + encodeURIcomponent(data[name])
    );
  }
  urlEncodeData = urlEncodeDataPairs.join("&").replace(/%20/g, "+"); //pascompris//
  XHR.addEventListener("load", function (event) {
    alert("merci de nous faire confiance, achat confirmé");
  });
  XHR.addEventListener("error", function (event) {
    alert("oups ! un problème est survenue");
  });
  XHR.open("POST", "http://mettre un lien ici.php"); //demandé a hugo config requete//
  XHR.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  XHR.send(urlEncodeData);
}
