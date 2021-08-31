async function main() {
  const res = await fetch("http://localhost:3000/api/cameras");
  if (res.ok) {
    const products = await res.json();
    displayProducts(products);
  }
}
main();

function displayProducts(products) {
  let listElement = document.getElementById("contentList");
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    console.log(product);
    listElement.innerHTML += `
    <div class="col-md-4 d-flex cardProd">
    <a class="" href="product.html?id=${product._id}">
    <div class="card">
    <img class="card-img-center img-thumbnail" src="${product.imageUrl}" alt="..." />
    <div class="card-body">
        <div class="text-center ">
            <h5 class="fw-bolder text-center text-dark">${product.name}</h5>
        </div>
    </div>
        <a class="btn btn-outline-dark mt-auto"  href="product.html?id=${product._id}">voir</a>
        
    </div>
  </div>
          
      </a>
      </div>
    `;
  }
}
