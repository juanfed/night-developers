
function myFunction(){
    let tbl = document.getElementById("miTabla");
    let row = tbl.insertRow();
    let cell1= row.insertCell();
    let cell2= row.insertCell();
    let cell3= row.insertCell();
    let cell4= row.insertCell();
    let cell5= row.insertCell(); 
    cell1.innerHTML = document.getElementById("pID").value;
    cell2.innerHTML = document.getElementById("pNombre").value;
    cell3.innerHTML = document.getElementById("pDes").value;
    cell4.innerHTML = document.getElementById("pValor").value;
    cell5.innerHTML = document.getElementById("pEstado").value;

}
export default myFunction;
