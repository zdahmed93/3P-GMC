function changeRed() {
    document.getElementById("text").style.color = "red";
}

function changeBlue() {
    document.getElementById("text").style.color = "blue";
}

function makeBold() {
    document.getElementById("text").style.fontWeight = "bold";
}

function makeItalic() {
    document.getElementById("text").style.fontStyle = "italic";
}

function makeUnderline() {
    document.getElementById("text").style.textDecoration = "underline";
}

function addItem(event) {
    event.preventDefault();
    var input = document.getElementById("item").value;
    if (input.length === 0) {return;}
    console.log(input);
    var node = document.createElement("LI");
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("items").appendChild(node);
    document.getElementById("item").value = "";
}

