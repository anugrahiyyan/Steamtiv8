let storeData = [
    {
        id: 1,
        namaGame: 'hallo',
        harga: 10000,
        genre: 'fps',
    },
    {   
        id: 2,
        namaGame: 'doto',
        harga: 20000,
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

