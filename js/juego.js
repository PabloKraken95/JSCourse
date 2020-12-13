const skyBlue = document.getElementById('skyBlue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('btnStart')
const GAME_LEVELS = 5

class Game {
    constructor() {
        this.initialize = this.initialize.bind(this)
        this.initialize()
        this.generateSecuence()
        setTimeout(this.nextLevel, 500)
    }

    initialize() {
        this.nextLevel = this.nextLevel.bind(this)
        this.pickColor = this.pickColor.bind(this)
        this.toggleBtnStart()
        this.level = 1
        this.colors = {skyBlue, violet, orange, green}
    }

    toggleBtnStart() {
        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide')
        } else {
            btnStart.classList.add('hide')
        }
    }

    generateSecuence() {
        this.secuence = new Array(GAME_LEVELS).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        // debugger
        this.blinkSecuence()
        this.addClickEvent()
    }

    toColor(num) {
        switch (num) {
            case 0:
                return 'skyBlue'
            
            case 1:
                return 'violet'
            
            case 2:
                return 'orange'
                            
            case 3:
                return 'green'

            default:
                break;
        }
    }

    toNum(color) {
        switch (color) {
            case 'skyBlue':
                return 0
            
            case 'violet':
                return 1
            
            case 'orange':
                return 2
                            
            case 'green':
                return 3

            default:
                break;
        }
    }

    blinkSecuence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.toColor(this.secuence[i])
            setTimeout(() => this.lightColor(color), 1000 * i)
        }
    }

    lightColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => this.turnOffColor(color), 350)
    }

    turnOffColor(color) {
        this.colors[color].classList.remove('light')
    }

    addClickEvent() {
        this.colors.skyBlue.addEventListener('click', this.pickColor)
        this.colors.violet.addEventListener('click', this.pickColor)
        this.colors.orange.addEventListener('click', this.pickColor)
        this.colors.green.addEventListener('click', this.pickColor)
    }

    removeClickEvent() {
        this.colors.skyBlue.removeEventListener('click', this.pickColor)
        this.colors.violet.removeEventListener('click', this.pickColor)
        this.colors.orange.removeEventListener('click', this.pickColor)
        this.colors.green.removeEventListener('click', this.pickColor)
    }

    pickColor(ev) {
        const colorName = ev.target.dataset.color
        const numColor = this.toNum(colorName)
        this.lightColor(colorName)
        if (numColor === this.secuence[this.level - 1]) {
            if (this.level === GAME_LEVELS) {
                this.winner()
            } else {
                this.level++
                this.removeClickEvent()
                setTimeout(this.nextLevel, 1500)
            }
        } else {
            this.removeClickEvent()
            this.looser()
        }
    }

    winner() {
        swal('Platzi', 'Congrats! You just won the game!', 'success').then(this.initialize)
    }

    looser() {
        swal('Platzi', 'Sorry... you lost the game :(', 'error').then(this.initialize)
    }
}

function startGame() {
    window.game = new Game()
}