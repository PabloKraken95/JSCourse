// function inheritsFrom(child, parent) {
//     var noop = function () {}
//     noop.prototype = parent.prototype
//     child.prototype = new noop
//     child.prototype.constructor = child
// }

// function Person(name, lastName, height) {
//     this.name = name
//     this.lastName = lastName
//     this.height = height
// }

// Person.prototype.sayHi = function () { console.log(`Hi, my name is ${this.name} ${this.lastName}`) }

// Person.prototype.isTall = function () {
//     this.height > 1.80 ? console.log(`I'm ${this.name}, and I'm tall`) : console.log(`I'm ${this.name}, and I'm not tall`)
// }

// function Developer (name, lastName, height) { 
//     this.name = name
//     this.lastName = lastName
//     this.height = height
// }

// inheritsFrom(Developer, Person)

// Developer.prototype.sayHi = function () { console.log(`Hi, my name is ${this.name} ${this.lastName} and I'm a developer`) }

class Person{
    constructor(name, lastName, height) {
        this.name = name
        this.lastName = lastName
        this.height = height
    }

    sayHi(fn) {
        var { name, lastName } = this
        console.log(`Hi, my name is ${name} ${lastName}`)
        if (fn) {
            fn(name, lastName)
        }
    }

    isTall() {
        this.height > 1.80 ? console.log(`I'm ${this.name}, and I'm tall`) : console.log(`I'm ${this.name}, and I'm not tall`)
    }
}

class Developer extends Person{
    constructor(name, lastName, height) {
        super(name, lastName, height)
    }

    sayHi(fn) {
        var { name, lastName } = this
        console.log(`Hi, my name is ${name} ${lastName} and I'm a developer`)
        if (fn) {
            fn(name, lastName, true)
        }
    }
}

var pablo = new Person('Pablo', 'Garcia', 1.72)
var miguel = new Developer('Miguel', 'Jimenez', 1.75)
var rebekah = new Person('Rebekah', 'Gwynn', 1.81)

function greetingBack(name, lastName, isDev) {
    console.log(`Good afternoon ${name} ${lastName}`)
    if (isDev) {
        console.log(`I didn't know you were a developer`)
    }
}

pablo.sayHi()
miguel.sayHi(greetingBack)
rebekah.sayHi(greetingBack)
