fetch('http://localhost:3000/api/cameras')


  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    makeList(value)
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

  
function makeList(list){
  let listElement = document.getElementById('contentList');
  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    console.log(item);
    listElement.innerHTML += `
    <a class="d-flex flex-column" href="product.html?id=${item._id}">
    <div class="card h-100 ">
    <img class="card-img-center" src="${item.imageUrl}" alt="..." />
    <div class="card-body p-6">
        <div class="text-center">
            <h5 class="fw-bolder text-center">${item.name}</h5>
        </div>
    </div>
        <a class="btn btn-outline-dark mt-auto" href="#">View options</a>
        
    </div>
  </div>
          
      </a>
    `;
  }
}
 



