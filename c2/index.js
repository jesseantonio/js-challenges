let arr;

function createGame() {
    for (i = 0; i < 10; i++) {
        let card = document.createElement('div');
        createMap()
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
    let arr = [
        { key: "", value: "banana" },
        { key: "", value: "banana" },
        { key: "", value: "apple" },
        { key: "", value: "apple" },
        { key: "", value: "pear" }, 
        { key: "", value: "pear" }, 
        { key: "", value: "watermelon" }, 
        { key: "", value: "watermelon" }, 
        { key: "", value: "grape" }, 
        { key: "", value: "grape" }
    ]      
    randomizeMap(arr);
    let map = new Map();
    arr.forEach(obj => {
        map.set(obj.key, obj.value)
    })
    console.log(map)
    debugger
    return map;
}

function randomizeMap(arr) {
    debugger
    arr.sort(() => Math.random() - 0.5)

    return arr;
}