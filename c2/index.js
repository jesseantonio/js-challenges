let map;
let shuffledMap;

function createGame() {
    createMap()
    for (i = 0; i < 10; i++) {
        let card = document.createElement('div');
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

function randomizeMap(map) {
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
    randomizeMap(map)
    debugger
    if (shuffledMap.get(val1) === map.get(val2)) {
        shuffledMap.delete(val1)
        shuffledMap.delete(val2)
    }
    if (shuffledMap.size === 0) {
        alert("Congrats!!!")
    }

    return map;
}