const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const OPTS = { crossDomain: true }

var randPok = Math.floor(Math.random() * 898) + 1

const reRandPok = () => randPok = Math.floor(Math.random() * 898) + 1

// const findPok = (pokemon) => {
//     console.log(`You found a ${pokemon.name}!`)
// }

// function getPok(id, callback) {
//     const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`
//     $
//         .get(url , OPTS , callback)
//         .fail(() => console.log(`An error happened, this pokemon is Unkown!`))
// }

function getPok(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`
        
        $.get(url , OPTS , function (data) {
            resolve(data)
        }).fail(() => reject(id))

    })
}

// getPok(1, function (pokemon) {
//     console.log(`You found a ${pokemon.name}!`)
// })

const onError = id => console.log(`Oh no! team Rocket just stole ${id}, try again later!`)

// getPok(6)
//     .then(pokemon => {
//         console.log(`You found a ${pokemon.name}!`)
//         return getPok(9)
//     }).then(pokemon => {
//         console.log(`You found a ${pokemon.name}!`)
//         return getPok(3)
//     }).then(pokemon => {
//         console.log(`You found a ${pokemon.name}!`)
//     })
//     .catch(onError)

// function obtainStarters() {
//     var starters = [1, 4, 7, 25, 133, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816]
//     var promises = starters.map(id => getPok(id))
//     Promise.all(promises).then(pokemon => {
//         for(var i = 0; i < pokemon.length; i++) {
//             console.log(pokemon[i].name)
//         }
//     }).catch(onError)
// }

async function obtainStarters() {
    var startersNum = [1, 4, 7, 25, 133, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816]
    var promises = startersNum.map(id => getPok(id))
    try {
        var starters = await Promise.all(promises)
        for(var i = 0; i < starters.length; i++) {
            console.log(`You found a ${starters[i].name}!`)
        }
    } catch (id) {
        onError(id)
    }
}

obtainStarters()
