let storeData = [
    {
        id: 1,
        namaGame: 'Pole Climbing',
        harga: 120000,
        genre: 'fps',
        img: `https://img.freepik.com/premium-vector/indonesia-traditional-games-during-independence-day-panjat-pinang-pole-climbing_75776-171.jpg?w=2000`
    },
    {   
        id: 2,
        namaGame: 'Tug Of War',
        harga: 720000,
        genre: 'rts',
        img: `https://png.pngtree.com/png-vector/20210731/ourlarge/pngtree-indonesia-independence-day-tarik-tambang-competition-png-image_3751292.jpg`
    },
    {
        id: 3,
        namaGame: 'Baloon Breaker',
        harga: 40000,
        genre: 'fps',
        img: `https://asset.kompas.com/data/photo/2015/02/23/2236400bom-3780x390.jpg`
    }
]

let storeData2 = [
    {
        id: 4,
        namaGame: 'Chips Eater',
        harga: 50000,
        genre: 'sim',
        img: `https://png.pngtree.com/png-clipart/20210801/original/pngtree-makan-kerupuk-competition-illustration-png-image_6591488.jpg`
    },
    {
        id: 5,
        namaGame: 'Candy Breaker',
        harga: 100000,
        genre: 'casual',
        img: `https://media.istockphoto.com/vectors/pinata-vector-id1181852999?b=1&k=20&m=1181852999&s=612x612&w=0&h=J4RQknbWWiPYtaNk_JxXzW5K3feqri6fjXC-_lg_vDs=`
    },
    {
        id: 6,
        namaGame: 'Coins Finder',
        harga: 600000,
        genre: 'fps',
        img: `https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-coin-icon-png-image_924873.jpg`
    },
]

let storeData3 = [
    {
        id: 7,
        namaGame: 'Marbels Racing',
        harga: 800000,
        genre: 'rts',
        img: `https://i.pinimg.com/originals/24/1b/70/241b709701e39c7f753fdc01935f0252.jpg`
    },
    {
        id: 8,
        namaGame: 'Clogs Racing',
        harga: 520000,
        genre: 'rts',
        img: `https://cdn-2.tstatic.net/pontianak/foto/bank/images2/Tema-1-Kelas-4-Subtema-2-Pembelajaran-3.jpg`
    },
    {
        id: 9,
        namaGame: 'Shack Runner',
        harga: 900000,
        genre: 'rts',
        img: `https://png.pngtree.com/png-vector/20210727/ourlarge/pngtree-balap-karung-vector-illustration-png-image_3730672.jpg`
    },
]
let cart = []

//input = id data game di storeData yang ingin ditambahkan ke cart

function nambahCart(input) {
    for(let i = 0; i < storeData.length; i++) {
        if(input === storeData[i].id) {
            cart.push({
                id: storeData[i].id,
                nama: storeData[i].namaGame,
                harga: storeData[i].harga
            })
        }
    }
}

// console.log(nambahCart(3))


let cart1 = [
    { id: 3, nama: 'volaran', harga: 40000 },
    { id: 5, nama: 'hancurpermen', harga: 100000 },
    { id: 1, nama: 'hallo', harga: 10000 },
    { id: 3, nama: 'volaran', harga: 40000 },
]


//input = data id game dari cart yang ingin dihapus
function deleteItemCart(input, cart) {

    for(let i = 0; i < cart.length; i++) {
        if(input === cart[i].id) {
            cart.splice(i, 1)
            break
        }
    }
    
    return cart 
}

// console.log(deleteItemCart(3, cart1))


function hitungHarga(cart) {
    let result = 0

    for(let i = 0; i < cart.length; i++) {
        result += cart[i].harga
    }

    return result
    
}

// console.log(hitungHarga(cart1))


function checkout(cart) { 
    if(!cart) {
        return "invalid data"
    }

    if(cart.length === 0) {
        return 'silahkan masukan game ke keranjang terlebih dahulu'
    }


    let result = {
        games: {},
        tagihan: 0
    }

    let tagihan = hitungHarga(cart)

    for(let i = 0; i < cart.length; i++) {
        if(!result.games[cart[i].nama]) {
            result.games[cart[i].nama] = []
        }
        result.games[cart[i].nama].push(generateResi())

    }

    result.tagihan = tagihan
    result.resi = generateResi()

    return result
}

// console.log(checkout(cart1))


// input = nama game yang di cari
function searchGame(input) {
    let result = []

    for(let i = 0; i < storeData.length; i++) {
        if(input === storeData[i].namaGame) {
            result.push(storeData[i])
        }
    }

    if(result.length <= 0) {
        return 'not found'
    }

    return result
}

// console.log(searchGame('volaran'))


// filter = key yang ingin di filter 
// input = apa yang ingin di filter
function filterGame(filter, input) {
    let result = []

    for(let i = 0; i < storeData.length; i++) {
        if(input === storeData[i][filter]) {
            result.push(storeData[i])
        }
    }

    return result
    
}


console.log(filterGame("genre", "fps"))


// sortType = key data store yang ingin di sort (harga, namaGame, id, etc)
// from = dari low atau high mulaonya
function sortGame(sortType, from) {
    let temp = []

    if(from === 'low') {
        for(let i = 1; i < storeData.length; i++) {
            for(let j = 0; j < i ; j++) {
                if(storeData[j][sortType] > storeData[i][sortType]) {
                    temp = storeData[j]
                    storeData[j] = storeData[i]
                    storeData[i] = temp
                }
            }
        }
    } else if(from === 'high') {
        for(let i = 1; i < storeData.length; i++) {
            for(let j = 0; j < i ; j++) {
                if(storeData[j][sortType] < storeData[i][sortType]) {
                    temp = storeData[j]
                    storeData[j] = storeData[i]
                    storeData[i] = temp
                }
            }
        }
    }

    return storeData
}

// console.log(sortGame('harga', 'low'))


function generateResi() {
    let result = ""
    let karakter = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let panjangResi = 10

    for (let i = 0; i < panjangResi; i++) {
        result += karakter[(Math.floor(Math.random() * karakter.length))];
    }

    return result

}

// console.log(generateResi())

function filterGenre() {
    let filteredGenre = {}
    for(let i = 0; i < storeData.length; i++) {
        if(!filteredGenre[storeData[i].genre]) {
            filteredGenre[storeData[i].genre] = []
        }
        filteredGenre[storeData[i].genre].push(storeData[i])
        
    }

    return filteredGenre

}

console.log(filterGenre())


let filtered = []

let filter = () => {
   let input = document.getElementById('input').value;
   filtered = storeData.filter(item => item.namaGame.toLowerCase().includes(input.toLowerCase()))
   render()
};

let render = () => {
      let list = document.getElementById('list')
      if (filtered.length > 0) {
        list.innerHTML = ''
        filtered.forEach(el => {
          list.innerHTML += `
            <div class="card" style="width: 18rem;">
              <img src="${el.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${el.namaGame}</h5>
                <p class="card-text">${el.harga}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${el.id}">Buy</button>
              </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${el.namaGame}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          `
        })
      } else {
        storeData.forEach(el => {
          list.innerHTML += `
            <div class="card" style="width: 18rem;">
              <img src="${el.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${el.namaGame}</h5>
                <p class="card-text">${el.harga}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${el.id}">Buy</button>
              </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${el.namaGame}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          `
        })
      }
    }
render()

let filtered2 = []

let filter2 = () => {
   let input = document.getElementById('input').value;
   filtered = storeData2.filter2(item => item.namaGame.toLowerCase().includes(input.toLowerCase()))
   render2()
};

let render2 = () => {
    let list = document.getElementById('list2')
    if (filtered2.length > 0) {
      list.innerHTML = ''
      filtered2.forEach(el => {
        list.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${el.namaGame}</h5>
              <p class="card-text">${el.harga}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${el.id}">Buy</button>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${el.namaGame}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        `
      })
    } else {
      storeData2.forEach(el => {
        list.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${el.namaGame}</h5>
              <p class="card-text">${el.harga}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${el.id}">Buy</button>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${el.namaGame}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        `
      })
    }
  }
render2()


let filtered3 = []

let filter3 = () => {
   let input = document.getElementById('input').value;
   filtered = storeData3.filter3(item => item.namaGame.toLowerCase().includes(input.toLowerCase()))
   render3()
};

let render3 = () => {
    let list = document.getElementById('list3')
    if (filtered3.length > 0) {
      list.innerHTML = ''
      filtered3.forEach(el => {
        list.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${el.namaGame}</h5>
              <p class="card-text">${el.harga}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${el.id}">Buy</button>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${el.namaGame}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        `
      })
    } else {
      storeData3.forEach(el => {
        list.innerHTML += `
          <div class="card" style="width: 18rem;">
            <img src="${el.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${el.namaGame}</h5>
              <p class="card-text">${el.harga}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${el.id}">Buy</button>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${el.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${el.namaGame}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        `
      })
    }
  }
render3()