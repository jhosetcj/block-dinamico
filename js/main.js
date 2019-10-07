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

const handlerResponse = (response) => {
  card = 
  `<div class="card atrib-flex s-evenly" style="width: 36rem;" >
    <img class="card-img-top" src=${response.img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${response.title}</h5>
    <p class="card-text">${response.description}</p>
  </div>
  </div>`
  return card;
}
