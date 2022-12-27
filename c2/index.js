let map;
let shuffledMap;

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
        let val
        let val2
        card.onclick = function (item) {
            console.log(item)
            card.classList.toggle("flip");
            let tempVal1;
            let tempVal2;
            ul.childNodes.forEach((item) => {
                tempVal1 = item.childNodes[1].innerText;
            });
            debugger
            val = tempVal1;
            val2 = tempVal1;
            console.log(val, val2)
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

function onSubmit() {
    let val1 = parseInt(document.getElementById("value1").value);
    let val2 = parseInt(document.getElementById("value2").value);
    shuffleMap(map)
    if (shuffledMap.get(val1) === map.get(val2)) {
        shuffledMap.delete(val1)
        shuffledMap.delete(val2)
    }
    if (shuffledMap.size === 0) {
        alert("Congrats!!!")
    }
    return map;
}

