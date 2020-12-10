// strings //

var name = 'Pablo', lastname = 'Garcia'

var upperCaseName = name.toUpperCase()
var lowerCaseLastName = lastname.toLowerCase()

var firstLetterName = name.charAt(0)
var lenghtName = name.length

var fullname = `${name} ${lastname.toUpperCase()}`

var str = name.substr(1, 2)

var lastLetterName = name.charAt(name.length-1)

// numbers //

var age = 25

// age = age + 1
// age += 1

var weight = 75

// weight = weight - 2
weight -= 2

var priceWine = 200.3

var total = Math.round(priceWine * 10 * 3) / 10
var totalStr = total.toFixed(2)
var totalNum = parseFloat(totalStr)

// functions //

function printAge(n, a) {
    console.log(`${n} is ${a} years old`)
}

printAge(name, age)
printAge('Miguel', 20)

// function printUpperCaseName(n) {
//     n = n.toUpperCase()
//     console.log(n)
// }

// function printUpperCaseName() {
//     console.log(name.toUpperCase())
// }

// printUpperCaseName()
// printUpperCaseName(name)

// objects //

var pablo = {
    name: 'Pablo',
    lastName: 'Garcia',
    age: 25
}

var miguel = {
    name: 'Miguel',
    lastName: 'Jimenez',
    age: 20
}

// function printUpperCaseName(person) {
//     console.log(person.name.toUpperCase())
// }
// function printUpperCaseName({ name }) {
//     console.log(name.toUpperCase())
// }
function printUpperCaseName(person) {
    //name = person.name
    var { name } = person
    console.log(name.toUpperCase())
}

printUpperCaseName(pablo)
printUpperCaseName(miguel)
printUpperCaseName({ name: 'Rebekah'})

function printNameAge(person) {
    //hi my name is pable and y am 25 years old
    console.log(`Hi my name is ${person.name} and I am ${person.age} years old`)
}

printNameAge(pablo)
printNameAge({ name: 'pablo', age: 25})

// Parameters //
