function main() {
  var form = document.getElementById("form");
  form.addEventListener("submit", onSubmit);
}
main();

async function onSubmit(e) {
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
      products: [""], //il faut juste les id  boucle avec un tableau vide au debut, et pour chaque bouche extract et push l id
    }),
  });
  const content = await rawResponse.json();
}
