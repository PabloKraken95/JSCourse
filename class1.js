// strings //

// var name = 'Pablo', lastname = 'Garcia'

// var upperCaseName = name.toUpperCase()
// var lowerCaseLastName = lastname.toLowerCase()

// var firstLetterName = name.charAt(0)
// var lenghtName = name.length

// var fullname = `${name} ${lastname.toUpperCase()}`

// var str = name.substr(1, 2)

// var lastLetterName = name.charAt(name.length-1)

// numbers //

// var age = 25

// age = age + 1
// age += 1

// var weight = 75

// weight = weight - 2
// weight -= 2

// var priceWine = 200.3

// var total = Math.round(priceWine * 10 * 3) / 10
// var totalStr = total.toFixed(2)
// var totalNum = parseFloat(totalStr)

// functions //

// function printAge(n, a) {
//     console.log(`${n} is ${a} years old`)
// }

// printAge(name, age)
// printAge('Miguel', 20)

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
    // age: 25,
    // weight: 75,
    // engineer: true,
    // chef: false,
    // singer: false,
    // guitarrist: true
    height: 1.72,
    amountOfBooks: 300
}

var miguel = {
    name: 'Miguel',
    lastName: 'Jimenez',
    // age: 20,
    // weight: 80
    height: 1.74,
    amountOfBooks: 180
}

// function printUpperCaseName(person) {
//     console.log(person.name.toUpperCase())
// }
// function printUpperCaseName({ name }) {
//     console.log(name.toUpperCase())
// }
// function printUpperCaseName(person) {
//     //name = person.name
//     var { name } = person
//     console.log(name.toUpperCase())
// }

// printUpperCaseName(pablo)
// printUpperCaseName(miguel)
// printUpperCaseName({ name: 'Rebekah'})

// function printNameAge(person) {
//     //hi my name is pable and y am 25 years old
//     console.log(`Hi my name is ${person.name} and I am ${person.age} years old`)
// }

// printNameAge(pablo)
// printNameAge({ name: 'pablo', age: 25})

// Parameters //

// function birthday(person) {
//     // console.log(person.age + 1)
//     return {
//         ...person,
//         age: person.age + 1
//     }
// }

// comparisons //

// var x = 4, y = '4'

// var doppelganger = {
//     ...pablo
// }

// control structures //

// function printOccupation(person) {
//     console.log(`${person.name} is:`)
//     if(person.engineer) {
//         console.log('an Engineer')
//     } else {
//         console.log('not an Engineer')

//     }
//     if(person.chef) {
//         console.log('a Chef')
//     } else {
//         console.log('not a Chef')
//     }
//     if(person.singer) {
//         console.log('a Singer')
//     } else {
//         console.log('not a Singer')
//     }
//     if(person.guitarrist) {
//         console.log('a Guitarrist')
//     } else {
//         console.log('not a Guitarrist')
//     }
// }

// const LEGAL_AGE = 18

// const isOverAge = function (person) {
//     return person.age >= LEGAL_AGE
// }
// const isOverAge = ({ age }) => age >= LEGAL_AGE

// function printAgeTest(person) {
//     if(isOverAge(person)) {
//         console.log(`${person.name} can legaly drink`)
//     } else{
//         console.log(`${person.name} can't legaly drink`)
//     }
// }

// const orderADrink = (person) => !isOverAge(person.age) ? console.log(`${person.name} can order a drink`) : console.log(`${person.name} can't order a drink`)

// const isUnderAge = ({ age }) => !isOverAge(age)

// console.log(`At the begining of the year ${pablo.name} weights ${pablo.weight}`)

// const WEIGHT_INCREMENT = 0.3
// const DAYS_OF_THE_YEAR = 365

// const gainsWeight = person => person.weight += WEIGHT_INCREMENT
// const looseWeight = person => person.weight -= WEIGHT_INCREMENT
// const eats = () => Math.random() < 0.3
// const doesSports = () => Math.random() < 0.4

// for(var i = 1; i <= DAYS_OF_THE_YEAR; i++) {
//     var random = Math.random()

//     if(random < 0.25) {
//         gainsWeight(pablo)
//     } else if(random < 0.5) {
//         looseWeight(pablo)
//     }
// }

// const asingGoal = ({ weight }, mod, goal) => {
//     if (mod === "gain") {
//         return weight + goal
//     } else if (mod === "loose") {
//         return weight - goal
//     } else {
//         console.log('Error')
//     }
// }

// const GOAL = pablo.weight - 3
// var days = 0

// while (pablo.weight > GOAL) {
//     if (eats()) {
//         gainsWeight(pablo)
//     }
//     if (doesSports()) {
//         looseWeight(pablo)
//     }
//     days++
// }

// console.log(`At the end of the year ${pablo.name} weights ${pablo.weight.toFixed(1)}`)
// console.log(`${days} passed until ${pablo.name} lost 3kg`)

// var counter = 0;

// const rains = () => Math.random() < 0.25

// do {
//     counter++
// } while (!rains())

// counter === 1 ? console.log(`I went outside to see if it was raining ${counter} time`) : console.log(`I went outside to see if it was raining ${counter} times`)

// var zodiacSign = prompt("What's your zodiac sign?")

// switch (zodiacSign) {
//     case 'Aries':
//         console.log('Love')
//         break
    
//     case 'Taurus':
//         console.log('Money')
//         break

//     case 'Gemini':
//         console.log('Friendship')
//         break
    
//     case 'Cancer':
//         console.log('Luck')
//         break

//     case 'Leo':
//         console.log('Death')
//         break
    
//     case 'Virgo':
//         console.log('Grief')
//         break

//     case 'Libra':
//         console.log('Studies')
//         break
    
//     case 'Scorpio':
//         console.log('Goals')
//         break

//     case 'Sagittarius':
//         console.log('Freedom')
//         break
    
//     case 'Capricorn':
//         console.log('Sadness')
//         break

//     case 'Aquarius':
//         console.log('Pain')
//         break
    
//     case 'Pisces':
//         console.log('Marriage')
//         break

//     default:
//         console.log('Error')
//         break
// }

var rebekah = {
    name: 'Rebekah',
    lastName: 'Gwynn',
    height: 1.81,
    amountOfBooks: 100
}

var paul = {
    name: 'Paul',
    lastName: 'Moran',
    height: 1.85,
    amountOfBooks: 30
}

const isTall = ({ height }) => height > 1.8
const isShort = ({ height }) => height < 1.8

var people = [pablo, miguel, rebekah, paul]

// for (var i = 0; i < people.length; i++) {
//     console.log(`${people[i].name} is ${people[i].height} meters tall`)
// }

var tallPeople = people.filter(isTall)
var shortPeople = people.filter(isShort)
// var tallPeople = people.filter(function ({ height }) {
//     return height > 1.8
// })

// const heightToCm = person => {
//     // person.height *= 100
//     return {
//         ...person,
//         height: person.height * 100
//     }
// }
const heightToCm = person => ({
    ...person,
    height: person.height * 100
})

var peopleCms = people.map(heightToCm)

const countBooks = (counter, { amountOfBooks }) => 
    counter + amountOfBooks

var booksTotal = people.reduce(countBooks, 0)