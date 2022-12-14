function drawCircle() {
    let canvasElem = document.querySelector("canvas");
    canvasElem.addEventListener("click", (e) => {
        getMousePosition(canvasElem, e);
    });
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let ball = document.createElement('div');
    styleCircle(ball, event, rect)
    
    var count = document.getElementById("holder").childElementCount;
    console.log(count);
    
    document.getElementById("holder").appendChild(ball);
}

function styleCircle(ball, event, rect) {
    ball.style.position = "absolute"
    ball.style.width = "30px"
    ball.style.height = "30px"
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red";
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    ball.style.left = x + "px";
    ball.style.top = y + "px";

    return ball;
}