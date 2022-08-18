let libraryData = [
    {
        namaGame: 'hallo',
        harga: 10000,
        genre: 'fps'
    },
    {
        namaGame: 'doto',
        harga: 20000,
        genre: 'rts'
    },
    {
        namaGame: 'volaran',
        harga: 40000,
        genre: 'fps'
    },
    {
        namaGame: 'simkota',
        harga: 50000,
        genre: 'sim'
    },
    {
        namaGame: 'hancurpermen',
        harga: 100000,
        genre: 'casual'
    },
]

let userData = {
    nama: 'jeni',
    uang: 500000,
    cart: ['hancurpermen', 'simkota']
    
}

function Cart(user, library) {
    let result = []

    for(let i = 0; i < user.cart.length; i++) {
        for(let j = 0; j < library.length; j++) {
            if(user.cart[i] === library[j].namaGame) {
                result.push(library[j])
            }
        }
    }
    return result
}

function hitungHarga(cart) {
    let result = 0

    for(let i = 0; i < cart.length; i++) {
        result += cart[i].harga
    }

    return result
}

function checkout(user, library) {
    let result = {}

    let userCart = Cart(user, library)
    let tagihan = hitungHarga(userCart)
    let belanjaan = []

    for(let i = 0; i < userCart.length; i ++) {
        belanjaan.push(userCart[i].namaGame)
    }
    result = {
        nama: user.nama,
        tagihan: tagihan,
        games: belanjaan,
    }

    return result
}

console.log(checkout(userData,libraryData))