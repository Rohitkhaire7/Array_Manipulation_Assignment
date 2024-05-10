import { createTableView } from "./createTableView.js";
import { array } from "./appendData.js";


export function parseCSVString(){

    let parseString = 'Vilas Shetkar,vilasshetkar@gmail,9049508514\nRohit Khaire,RohitKhaire@gmail.com,738784878574';

    parseString = parseString.split("\n");

    
    let data;
    let array1=[];
    
   for(let i=0; i<=parseString.length-1; i++){
    
        data= parseString[i].split(",");
       
        for(let j=0; j<= data.length-1;j++){
          data = {
          name: data[j],
          email: data[j],
          mobile: data[j]

        }
      }
      
        
        array1.push(data);

     
   }
    
  createTableView(array1);

}