import {createTableView} from "./createTableView.js"
//import { getInput } from "./appendData.js";

import { array } from "./appendData.js";

 export function addElementToTop(){
    
    let nameInput= document.getElementById("name").value;
    let emailInput= document.getElementById("email").value;
    let mobileNumberInput= document.getElementById("mobile").value;

    let person = {
        name: nameInput,
        email: emailInput,
        mobile: mobileNumberInput
    }
   
   console.log(person);

 array.unshift(person);
   

    createTableView(array);

}

