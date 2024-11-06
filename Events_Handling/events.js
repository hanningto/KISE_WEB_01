const button = document.getElementById("btn")
const mouseDiv = document.getElementById("mouseDiv")

button.addEventListener("click", buttonClick)
mouseDiv.addEventListener("mouseover", mouseOver)
mouseDiv.addEventListener("mouseout", mouseOut)
mouseDiv.addEventListener("mousedown", mouseDown)
mouseDiv.addEventListener("mouseup", mouseUp)


function buttonClick(){
    alert("Button was clicked")
}

function mouseOver(){
    mouseDiv.style.backgroundColor = "pink"
}
function mouseOut(){
    mouseDiv.style.backgroundColor = "yellow"
}
function mouseDown(){
    mouseDiv.style.backgroundColor = "black"
}
function mouseUp(){
    mouseDiv.style.backgroundColor = "red"
}

document.addEventListener("keydown", handleKey);

function handleKey(event) {
    switch (event.key) {
        case "r":
            mouseDiv.style.backgroundColor = "red";
            break;
        case "g":
            mouseDiv.style.backgroundColor = "green";
            break;
        case "b":
            mouseDiv.style.backgroundColor = "blue";
            break;
        default:
            break;
    }
}
