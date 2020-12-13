const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const OPTS = { crossDomain: true }
const TABLE = document.getElementById('pokDexEntries')

const reRandPok = () => randPok = Math.floor(Math.random() * 898) + 1
const onError = id => console.log(`Oh no! team Rocket just stole all the pokemon you wanted, try again later! and this is why ${id}`)
var randPok = Math.floor(Math.random() * 898) + 1

function getPok(pokemon) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${POKEMON_URL.replace(':id', pokemon)}`
        
        $.get(URL , OPTS , function (data) {
            resolve(data)
        }).fail(() => reject(pokemon))
    })
}

function showRandPok() {
    // debugger
    $("#pokDexEntries").find("tr:gt(0)").remove()
    getPok(randPok).then(pokemon => {
        var entry = document.createElement('tr')
        var dexNum = document.createElement('td')
        var name = document.createElement('td')
        var type = document.createElement('td')
        var sprite = document.createElement('td')
        var shinySprite = document.createElement('td')
        var img = document.createElement('img')
        var shinyImg = document.createElement('img')
        TABLE.appendChild(entry)
        dexNum.innerHTML = `${pokemon.id}`
        entry.appendChild(dexNum)
        name.innerHTML = `${pokemon.name}`
        entry.appendChild(name)
        pokemon.types[1] ? type.innerHTML = `${pokemon.types[0].type.name} ${pokemon.types[1].type.name}` :  type.innerHTML = `${pokemon.types[0].type.name}`
        entry.appendChild(type)
        img.src = `${pokemon.sprites['front_default']}`
        sprite.appendChild(img)
        entry.appendChild(sprite)
        shinyImg.src = `${pokemon.sprites['front_shiny']}`
        shinySprite.appendChild(shinyImg)
        entry.appendChild(shinySprite)
        reRandPok()
    }).catch(onError)
}

async function getPokemon(pokList) {
    // var startersNum = [1, 4, 7, 25, 133, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816]
    // var starters2Num = startersNum.map(id => id += 2)
    var promises = pokList.map(id => getPok(id))
    try {
        $("#pokDexEntries").find("tr:gt(0)").remove()
        var starters = await Promise.all(promises)
        for(var i = 0; i < starters.length; i++) {
            var entry = document.createElement('tr')
            var dexNum = document.createElement('td')
            var name = document.createElement('td')
            var type = document.createElement('td')
            var sprite = document.createElement('td')
            var shinySprite = document.createElement('td')
            var img = document.createElement('img')
            var shinyImg = document.createElement('img')
            TABLE.appendChild(entry)
            dexNum.innerHTML = `${starters[i].id}`
            entry.appendChild(dexNum)
            name.innerHTML = `${starters[i].name}`
            entry.appendChild(name)
            starters[i].types[1] ? type.innerHTML = `${starters[i].types[0].type.name} ${starters[i].types[1].type.name}` :  type.innerHTML = `${starters[i].types[0].type.name}`
            entry.appendChild(type)
            img.src = `${starters[i].sprites['front_default']}`
            sprite.appendChild(img)
            entry.appendChild(sprite)
            shinyImg.src = `${starters[i].sprites['front_shiny']}`
            shinySprite.appendChild(shinyImg)
            entry.appendChild(shinySprite)
        }
    } catch (id) {
        onError(id)
    }
}

function getStarters() {
    var startersNum = [1, 4, 7, 25, 133, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816]
    getPokemon(startersNum)
}

function getGen(gen) {
    const pokList = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
    switch (gen) {
        case 1:
            getPokemon(pokList(1, 151, 1))
            break;
    
        case 2:
            getPokemon(pokList(152, 251, 1))
            break;
                
        case 3:
            getPokemon(pokList(252, 386, 1))
            break;
                
        case 4:
            getPokemon(pokList(387, 493, 1))
            break;
                
        case 5:
            getPokemon(pokList(494, 649, 1))
            break;
                
        case 6:
            getPokemon(pokList(650, 721, 1))
            break;
                
        case 7:
            getPokemon(pokList(722, 809, 1))
            break;
                
        case 8:
            getPokemon(pokList(810, 898, 1))
            break;
        
        default:
            break;
    }
}