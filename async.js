const libreria = function (){
    fetch('https://striveschool-api.herokuapp.com/books')
//1
.then((res) => {
    console.log('Fetch')
    console.log(res)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('ERROR!')
    }
})

//2
.then((data) => {
    console.log(data)
    let cardsGroup = document.getElementById('card-group')
    data.forEach((item) => {
        let cards = document.createElement('div')
        cards.classList.add('col')
        cards.innerHTML = `

        <div class="card h-100">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.price}</p>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
<button class="btn btn-primary" type="button"> Scarta </button>
 </div>
      </div>

        `
        cardsGroup.appendChild(cards)
    })
  
})




//3
.catch((err) => {
    console.log('Error!!!, err')
})

}



libreria()





//         <div class="card">
//          <img src="${item.img}" class="card-img-top">
//          <div class="card-body">
// <h3 class="card-title">${item.title}</h3>
// <h5 class="card-text">${item.price}</h5>
// </div>

// <div class="d-grid gap-2 col-6 mx-auto">
// <button class="btn btn-primary" type="button"> Scarta </button>
// </div>
