var tb = document.getElementById("info")
function agregar(){

var prod = document.getElementById("productos").value;
var precio= document.getElementById("precio").value;
var cantidad = document.getElementById("cantidad").value;



    var n= tb.row.length;
    var row = tb.insertRow(n);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById(prod).value;
    cell2.innerHTML = document.getElementById(precio).value;
    cell3.innerHTML = document.getElementById(cantidad).value;
    cell4.innerHTML = document.getElementById("pValor").value;
    
    
    
    alert("Producto agregado con exito!!!!")
 }






export default agregar;



