function appendvalue(value) {
    document.getElementById("inp").value += value;
}

function result() {
    let result = eval(document.getElementById("inp").value);
    document.getElementById("inp").value = result;
}


function clearScreen() {
    console.log("it was calling...")
    document.getElementById("inp").value = "0";
}
function deleteLastChar() {
    const display = document.getElementById("inp");
    display.value = display.value.slice(0, -1);
}
