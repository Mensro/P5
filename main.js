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
    const element = list[index];
    console.log(element);
    listElement.innerHTML += `
    <a class="container-fluid row justify-content-around" href="#">
          <div class="card col-8">
              <img class="" src="${element.imageUrl}" alt="">
              <p>${element.name}</p>
              <p>${element.price}</p>
            </div> 
      </a>
  }
}
 



