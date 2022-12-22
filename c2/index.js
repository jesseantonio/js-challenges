let map;

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

function randomizeMap(arr) {
    debugger
    arr.sort(() => Math.random() - 0.5)

    return arr;
}

function onSubmit() {
    let val1 = parseInt(document.getElementById("value1").value);
    let val2 = parseInt(document.getElementById("value2").value);
    randomizeMap(map)
    if (map.get(val1) === map.get(val2)) { 
        map.delete(val1)
        map.delete(val2)
    }
    if (map.size === 0) {
        alert("Congrats!!!")
    }

    return map;
}