function drawCircle() {
    let canvasElem = document.querySelector("canvas");
    canvasElem.addEventListener("click", function (e) {
        getMousePosition(canvasElem, e);
    });
}


function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let message = document.createElement('div');
    
    message.style.cssText = "color: red";
    message.style.width = "200"
    message.style.height = "200"
    message.innerHTML = "teste"
    document.body.append(message);

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log(x, y)
}
