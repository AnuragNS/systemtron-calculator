
function dis(value) {
    document.getElementById("result").value += value;
}


function clr() {
    document.getElementById("result").value = "";
}

function solve() {
    try {
        let expression = document.getElementById("result").value;
        let result = eval(expression); 
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}


function myFunction(event) {
    let key = event.key;
    let allowedKeys = "0123456789/*-+.";
    
    if (allowedKeys.includes(key)) {
        dis(key); 
    } else if (key === "Enter") {
        solve(); 
        clr();
    }
}
