const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id)

fetch(`http://localhost:3000/api/cameras/${id}`)

.then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    console.log(value);
    makeCard(value, 'contentList')

  })
  .catch(function (err) {
    // Une erreur est survenue
  });



  function makeCard(card, elementId){
    let listElement = document.getElementById(elementId);
    const price = card.price / 100;
    listElement.innerHTML += `
    <div class="card h-100">
    <img class="card-img-center" src="${card.imageUrl}" alt="..." />
    <!-- Product details-->
    <div class="card-body p-6">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${card.name}</h5>
            <h6 class="fw-bolder">${card.description}</h6>
            ${price}€
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a>
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
        </div>
    </div>
  </div>
    
    `;
  }

