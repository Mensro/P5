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

  // pour passé en string//
}

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
