/*
var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
 if (this.readyState === 4 && this.status === 200) {
   let response = JSON.parse(this.response)
   // handlerResponse(response)
}

xhttp.open('POST', "https://ajaxkode.firebaseio.com/posts.json")

var posts = {
    title: "Descubre la auroras boreales",
    description: "Los fenomenos naturales más impresionantes de la tierra. Es un lugar increible para conocer",
    img: "https://www.w3schools.com/w3css/img_lights.jpg",
    author: "Criss M."
}

xhttp.send(JSON.stringify(posts))
*/


// // xhttp.open("GET", "data/hello_world.json")
// // xhttp.send()
// var xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let response = JSON.parse(this.response)
//     // handlerResponse(response)
//   }
// }
// var koder = {
//   firstName: 'Cristina',
//   lastName: 'Bermudez',
//   generation: 5,
//   favoritePerson: 'me :)',
//   imaginationForThisExcercise:'none',
//   favoriteColor: 'black',
//   favoriteNumber: 5,
//   adress : {
//     street:'Corregidora',
//     houseNumber : '40',
//     city : 'CDMX',
//   }
// // }
// xhttp.open('POST', "https://ajaxkode.firebaseio.com/posts.json")
// xhttp.send(JSON.stringify(posts))
// // const handlerResponse = (response) => {
//   console.log(response)
//   var parent = document.getElementById('container')
//   response.forEach(({ element, text }) => {
//     let node = document.createElement(element)
//     node.innerText = text
//     parent.appendChild(node)
//   });
// }


/*
var posts = {
    title: "Conoce el lugar más frio del mundo",
    description: "Te vas a sorprender con las maravillosas vistas que hay en este lugar",
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    author: "Jhoset C."
}
var posts = {
    title: "Descubre la auroras boreales",
    description: "Los fenomenos naturales más impresionantes de la tierra. Es un lugar increible para conocer",
    img: "https://www.w3schools.com/w3css/img_lights.jpg",
    author: "Criss M."
}
*/


var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  console.log(this.readyState, xhttp.status);
  if (this.readyState === 4 && this.status === 200) {
    let objResponse = JSON.parse (this.response)
    for( i in objResponse){
        console.log(objResponse[i])
        handlerResponse(objResponse[i])
        console.log(card)
        document.getElementById("container").innerHTML += card

    }
  }
}
xhttp.open('GET', "https://ajaxkode.firebaseio.com/posts.json")

xhttp.send ()

/*
const handlerResponse = (response) => {

    console.log(response);
    document.getElementById('container').innerHTML = `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top"
    src="${response.img}"
    alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${response.title}</h5>
    <p class="card-text">${response.description}</p>
  </div>
  </div>
  `
  return card;
}
*/

xhttp.open("GET", "https://ajaxkode.firebaseio.com/posts.json");
xhttp.send();
const handlerResponse = (response) => {
  /*console.log(response)
  var parent = document.getElementById('container')
  response.forEach(({ element, text }) => {
    let node = document.createElement(element)
    node.innerText = text
    parent.appendChild(node)
  });*/
  //console.log(response);
  card = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${response.img} alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">${response.title}</h5>
  <p class="card-text">${response.description}</p>
  </div>
  </div>`
  return card;
}

/*
var posts = {
    title: "The final class",
    description: "The end of module 1",
    img: "https://kodemia.mx/static/img/galleries/home/5.jpg",
    author: "David M."
  }

  document.getElementById('container').innerHTML = `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top"
    src="${posts.img}"
    alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${posts.title}</h5>
    <p class="card-text">${posts.description}</p>
  </div>
  </div>
  
  <div class="card" style="width: 18rem;">
  <img class="card-img-top"
    src="${posts.img}"
    alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${posts.title}</h5>
    <p class="card-text">${posts.description}</p>
  </div>
  </div>
  `
*/
  





