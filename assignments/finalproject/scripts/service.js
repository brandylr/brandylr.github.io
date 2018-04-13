 var showData = document.querySelector('table.showData');
 var requestURL = 'data/service.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var information = request.response;
        serviceTable(information);
        
function serviceTable(jsonObj) {
        var srv = jsonObj['services'];
    
   // Extract value for HTML header
    var col = [];
    for (var i = 0; i < srv.length; i++) {
        for (var key in srv[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    
    // Create Table
    var table = document.createElement("table");
    
    // Create HTML Table Header row using extracted headers 
    var tr = table.insertRow(-1);
    
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    
    // Add JSON data to the table as rows
    for (var i = 0; i <srv.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = srv[i][col[j]];
        }
    }
    
    // Add the created table with JSON data to a container
    //var divContainer = document.getElementById("showData");
    //divContainer.innerHTML = "";
    //divContainer.appendChild(table);
}
}