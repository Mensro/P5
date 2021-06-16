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
    <a class="d-flex flex-column" href="product.html?id=${product._id}">
    <div class="card h-100 ">
    <img class="card-img-center" src="${product.imageUrl}" alt="..." />
    <div class="card-body p-6">
        <div class="text-center">
            <h5 class="fw-bolder text-center">${product.name}</h5>
        </div>
    </div>
        <a class="btn btn-outline-dark mt-auto" onclick="addProduct({$product})" href="">ADD TO CART</a>
        
    </div>
  </div>
          
      </a>
    `;
  }
}
