fetch("http://localhost:3000/api/cameras")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    addProduct(value);
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
function addProduct(prod) {
  let product = { name: "name", price: "prix", quantity: "quantité" };
  localStorage.setItem("myProduct", JSON.stringify(prod));
}
function removeProduct(product) {}

function getProduct() {
  let item = JSON.parse(localStorage.getItem("myProduct"));
}
