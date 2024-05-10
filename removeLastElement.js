 import { createTableView } from "./createTableView.js";
 import { array } from "./appendData.js";
 export function removeLastElement(){
   

    console.log(array);
      array.pop();
        
        createTableView(array);
  
    
}

