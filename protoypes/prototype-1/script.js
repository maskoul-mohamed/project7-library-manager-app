
function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);

}

function readFormData() {
    
    var formData = {};
    formData["title"] = document.getElementById("inputTitle").value;
    formData["author"] = document.getElementById("inputAuthor").value;
    formData["price"] = document.getElementById("inputPrix").value;
    formData["date"] = document.getElementById("inputDate").value;
    console.log(formData.date)
    formData["language"] = document.getElementById("inputLanguage").value;
    var cheackVal = document.getElementsByName("type");
    for(var i = 0; i<cheackVal.length; i++){
        if(cheackVal[i].checked){
            formData["type"] = cheackVal[i].value
        }
    }
    return formData;
}



function insertNewRecord(data) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.language
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = data.type

}


