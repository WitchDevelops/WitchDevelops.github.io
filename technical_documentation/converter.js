function wrongPx() {
    document.getElementById("inputEm").disabled = true;
    document.getElementById("inputEm").value = "";
}
   
function wrongEm() {
    document.getElementById("inputPx").disabled = true;
    document.getElementById("inputPx").value = "";
}
   
function worksPx() {
    document.getElementById("inputEm").disabled = false;
    document.getElementById("inputEm").value = "";
}
   
function worksEm() {
    document.getElementById("inputPx").disabled = false;
    document.getElementById("inputPx").value = "";
}
   
function convertUnits() {
    var x = document.getElementById("inputPx").value;
    var z = document.getElementById("inputEm").value;
    var y = document.getElementById("pix1").value;
    var res = document.getElementById("result1");
   
    if (x) {
        res.innerHTML = x/y + " em"; 
       } 
    
    else {
        res.innerHTML = z*y + " px";
       }
   
    if (isNaN (x) || isNaN (z) || isNaN (y)) {
        res.innerHTML = "Wrong input! Use numbers";
        res.style.color = "var(--contrast)";
        res.style.fontWeight = "bold";
       } 
    
       else {
        res.style.color = "";
       }
}   