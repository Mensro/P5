function main() {
  var form = document.getElementById("form");
  form.addEventListener("submit", onSubmit);
}
main();

async function onSubmit(e) {
  let cart = getProduct();
  let productsIds = [];
  localStorage.removeItem("order");
  console.log(cart);
  for (let index = 0; index < cart.length; index++) {
    const product = cart[index];
    productsIds.push(product.id);
  }
  e.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var city = document.getElementById("city").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;

  const rawResponse = await fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contact: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        email: email,
      },
      products: productsIds, //il faut juste les id  boucle avec un tableau vide au debut, et pour chaque bouche extract et push l id
    }),
  })
    .then((res) => {
      res.json().then((rez) => {
        console.log(rez.orderId);
        localStorage.setItem("order", rez.orderId);
        localStorage.removeItem("cart");
        window.location.href = "confirmation.html";
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // const content = await rawResponse.json();
}
