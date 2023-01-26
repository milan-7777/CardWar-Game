let deck = []

for (let sign = 0; sign < 4; sign++) {
    for (let value = 0; value < 13; value++) {
        let card = {
            value,
            sign
        }
        deck.push(card)
    }
}

let mixdeck = []
for ( let mix = 0; mix < 52; mix++) {
    let random = Math.floor(Math.random() * deck.length)
    mixdeck.push(deck.splice(random, 1)[0])
}

let player = document.querySelector('.player')
let cards = document.querySelectorAll('.card')
let points = document.querySelectorAll('.points')

let signs = ['&#9824;','&hearts;','&#9670;','&#9827;']
let letters = ['A',2,3,4,5,6,7,8,9,10,'J', 'Q', 'K']
let finalPoints = {
    user: 0,
    computer: 0
}

player.addEventListener('click', () => {
    let playerCard = mixdeck[0]
    let computerCard = mixdeck[1]
    cards[0].innerHTML = letters[playerCard.value] + '(' + signs[playerCard.sign] + ')'
    cards[1].innerHTML = letters[computerCard.value] + '(' + signs[computerCard.sign] + ')'
    mixdeck.splice(0,2)
    if(playerCard.value > computerCard.value) {
        finalPoints.user++
    }
    else if(playerCard.value < computerCard.value) {
        finalPoints.computer++
    }

    points[0].textContent = finalPoints.user
    points[1].textContent = finalPoints.computer
})

let resbtn = document.querySelector('#btn')
resbtn.addEventListener('click', () => {
    location.reload()
})
