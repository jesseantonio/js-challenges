function createGame() {
    for (i = 0; i < 10; i++) {
        let card = document.createElement('div');
        debugger
        card.onclick= () => {
            console.log(i + 1)
        }
        styleCard(card)
        document.getElementById("holder").appendChild(card);
    }
}

function styleCard(card) {
    card.style.width = "30px"
    card.style.height = "30px"
    card.style.backgroundColor = "red"
    card.style.marginBottom = "10px"

    return card
}