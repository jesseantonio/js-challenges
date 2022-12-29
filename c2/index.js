let map;
let shuffledMap;
let chosenCards = [];
let chosenDivs = [];


function createGame() {
    createMap();
    shuffleMap(map);
    let ul = document.createElement('ul');
    document.getElementById('holder').appendChild(ul);
    shuffledMap.forEach(renderCard);
    function renderCard(element) {
        let card = document.createElement('li');
        card.setAttribute('class', 'flip');
        card.setAttribute('id', 'card');
        let front = document.createElement('div')
        let back = document.createElement('div')
        back.innerHTML = card.innerHTML + element;
        back.setAttribute('class', 'face')
        front.setAttribute('class', 'face')
        front.setAttribute('id', 'front')
        back.setAttribute('id', 'back')
        //card.setAttribute('id', `${element}`);
        ul.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
        card.onclick = function (item) {
            console.log(item)
            card.classList.toggle("flip");
            let value = item.currentTarget.innerText;
            if (chosenCards.length > 1) {
                chosenCards = []
                chosenDivs = []
            }
            chosenCards.push(value);
            chosenDivs.push(item.target);
            if (chosenCards[0] === chosenCards[1]) {
                debugger
                chosenDivs[0].remove();
                chosenDivs[1].remove();
            }
            if (ul.childNodes.length === 0) {
            alert("Parabéns você ganhou!")
            }
            console.log(ul)
            debugger
            console.log(chosenCards)
        };
    }
}

function styleCard(card) {
    card.style.width = "30px"
    card.style.height = "30px"
    card.style.backgroundColor = "red"
    card.style.marginBottom = "10px"
    card.style.backgroundImage = "url('https://minhasaude.proteste.org.br/wp-content/uploads/2022/07/bananas.jpg')"
    return card
}

function createMap() {
    map = new Map();
    map.set(1, "banana")
    map.set(2, "banana")
    map.set(3, "apple")
    map.set(4, "apple")
    map.set(5, "pear")
    map.set(6, "pear")
    map.set(7, "watermelon")
    map.set(8, "watermelon")
    map.set(9, "grape")
    map.set(10, "grape")

    return map;
}

function shuffleMap(map) {
    let clonedMap = [...map]
    let randomNumber;
    let tmp;
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        list[randomNumber] = list[i];
        list[i] = tmp;
    }

    for (let [index, value] of clonedMap.entries()) {
        value[0] = list[index++]
    }

    shuffledMap = new Map(Object.entries(Object.fromEntries(clonedMap)));
}