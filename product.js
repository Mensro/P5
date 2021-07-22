async function main() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  console.log(id);

  const res = await fetch(`http://localhost:3000/api/cameras/${id}`);
  if (res.ok) {
    const product = await res.json();
    displayProduct(product);
  }
}

main();

function displayProduct(product) {
  let lensesHtml = "";
  for (let index = 0; index < product.lenses.length; index++) {
    const lense = product.lenses[index];
    lensesHtml += `<option value="${lense}">${lense}</option>`;
  }
  console.log(product);
  let listElement = document.getElementById("contentList");
  const price = product.price / 100;
  listElement.innerHTML += `
    <div class="card h-100">
    <img class="card-img-center" src="${product.imageUrl}" alt="..." />
    <!-- Product details-->
    <div class="card-body p-6">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${product.name}</h5>
            <h6 class="fw-bolder">${product.description}</h6>
            ${price}€
        </div>
    </div>
    <!-- Product actions-->
    
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a  id="addToCart" class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
    </div>
    <label for="pet-select">Choose option:</label>

<select name="color" id="select">
    ${lensesHtml}

  </div>
  
    
    `;
  let addToCartButton = document.getElementById("addToCart");
  addToCartButton.addEventListener("click", function () {
    addProduct(product);
  });
}
