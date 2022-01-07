var work = new Work();
var workBLO = new WorkBLO();




document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    readwork()
    insertNewRow(work);
    workBLO.addWork(work);
})


function readwork() {
    work.id = workBLO.counter++;
    work.title = document.getElementById("inputTitle").value;
    
}



function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.title;
 


}