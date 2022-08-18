let storeData = [
    {
        id: 1,
        namaGame: 'hallo',
        harga: 120000,
        genre: 'fps',
    },
    {   
        id: 2,
        namaGame: 'doto',
        harga: 720000,
        genre: 'rts',
    },
    {
        id: 3,
        namaGame: 'volaran',
        harga: 40000,
        genre: 'fps',
    },
    {
        id: 4,
        namaGame: 'simkota',
        harga: 50000,
        genre: 'sim',
    },
    {
        id: 5,
        namaGame: 'hancurpermen',
        harga: 100000,
        genre: 'casual'
    },
]

let cart = []

//input = id data game di storeData yang ingin ditambahkan ke cart
function nambahCart(input, store) {
    let result = []

    for(let i = 0; i < store.length; i++) {
        if(input === store[i].id) {
            result.push({
                id: store[i].id,
                nama: store[i].namaGame,
                harga: store[i].harga
            })
        }
    }

    return result
}

// console.log(nambahCart(3, storeData))


// let cart1 = [
//     { id: 3, nama: 'volaran', harga: 40000 },
//     { id: 5, nama: 'hancurpermen', harga: 100000 },
//     { id: 1, nama: 'hallo', harga: 10000 },
//     { id: 3, nama: 'volaran', harga: 40000 },
// ]


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
    let result = {
        games: {},
        tagihan: 0
    }

    let tagihan = hitungHarga(cart)

    for(let i = 0; i < cart.length; i++) {
        if(!result.games[cart[i].nama]) {
            result.games[cart[i].nama] = 0
        }
        result.games[cart[i].nama]++
    }

    result.tagihan = tagihan


    return result
}

// console.log(checkout(cart1))


// input = nama game yang di cari
function searchGame(input ,store) {
    let result = []

    for(let i = 0; i < store.length; i++) {
        if(input === store[i].namaGame) {
            result.push(store[i])
        }
    }

    if(result.length <= 0) {
        return 'not found'
    }

    return result
}

// console.log(searchGame('volaran', storeData))


// filter = key yang ingin di filter 
// input = apa yang ingin di filter
function filterGame(filter, input, store) {
    let result = []

    for(let i = 0; i < store.length; i++) {
        if(input === store[i][filter]) {
            result.push(store[i])
        }
    }

    return result
    
}


// console.log(filterGame("genre", "fps", storeData))


// sortType = key data store yang ingin di sort (harga, namaGame, id, etc)
// from = dari low atau high mulaonya
function sortGame(sortType, from, store) {
    let temp = []

    if(from === 'low') {
        for(let i = 1; i < store.length; i++) {
            for(let j = 0; j < i ; j++) {
                if(store[j][sortType] > store[i][sortType]) {
                    temp = store[j]
                    store[j] = store[i]
                    store[i] = temp
                }
            }
        }
    } else if(from === 'high') {
        for(let i = 1; i < store.length; i++) {
            for(let j = 0; j < i ; j++) {
                if(store[j][sortType] < store[i][sortType]) {
                    temp = store[j]
                    store[j] = store[i]
                    store[i] = temp
                }
            }
        }
    }

    return store
}

// console.log(sortGame('harga', 'low', storeData))


