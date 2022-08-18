let libraryData = [
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

function nambahCart(input, library) {
    let result = []

    for(let i = 0; i < library.length; i++) {
        if(input === library[i].id) {
            result.push({
                id: library[i].id,
                nama: library[i].namaGame,
                harga: library[i].harga
            })
        }
    }

    return result
}

// console.log(nambahCart(3, libraryData))


let cart1 = [
    { id: 3, nama: 'volaran', harga: 40000 },
    { id: 5, nama: 'hancurpermen', harga: 100000 },
    { id: 1, nama: 'hallo', harga: 10000 },
    { id: 3, nama: 'volaran', harga: 40000 },
]


function deleteItemCart(input, cart) {

    for(let i = 0; i < cart.length; i++) {
        if(input === cart[i].id) {
            cart.splice(i, 1)
        }
    }
    
    return cart 
}

// console.log(deleteItemCart(3, cart1))
