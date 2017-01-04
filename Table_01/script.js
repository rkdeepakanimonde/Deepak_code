function addRow(){
    var myName= document.getElementById('input_name').value;
    var salary=  parseInt(document.getElementById('input_salary').value);
    var increment = parseFloat(document.getElementById('increment').value);
    var table = document.getElementById('tableData');
    
    var total = document.getElementById('total').innerHTML;
     total=salary*(increment/100)+salary;
    
    var rowCount =table.rows.length;
    var row =table.insertRow(rowCount);
    
    
    row.insertCell(0).innerHTML= myName;
    row.insertCell(1).innerHTML =salary;
    row.insertCell(2).innerHTML= increment;
    row.insertCell(3).innerHTML=total;
    
    document.getElementById('input_name').value='';
    document.getElementById('input_salary').value='';
    document.getElementById('increment').value='';
    
  
}

function deleteRow() {
  
    document.getElementById("tableData").deleteRow(1);
   
}