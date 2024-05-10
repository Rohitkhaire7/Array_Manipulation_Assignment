

import { array } from "./appendData.js";
import { createTableView } from "./createTableView.js";

export function removeElementAtIndex(){

    
    let lengthOFArray = array.length;

    let index = prompt("Enter index to which you want delete. we have total index is:", lengthOFArray);
    if(lengthOFArray >= index){
        delete array[index];
        console.log(array);

        createTableView(array);

    }else{
        console.log("index indefine");
    }

}

