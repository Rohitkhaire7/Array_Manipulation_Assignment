

let table = '<table>';  
table += '<tr><th>Name</th><th>Age</th><th>Email</th></tr>';  

export function createTableView(data) {

 
  let table = '<table>';  
  table += '<tr><th>Name</th><th>Email</th><th>Mobile</th></tr>';  
  data.forEach(item => {  
  table += `<tr><td>${item.name}</td><td>${item.email}</td><td>${item.mobile}</td></tr>`;  
  });  
  table += '</table>';  
  document.getElementById("dataView").innerHTML = table; 
  return table;
 
}

 