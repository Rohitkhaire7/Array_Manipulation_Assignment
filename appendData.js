import {createTableView} from "./createTableView.js"
export let array= [];
export function getInput(){
    let nameInput= document.getElementById("name").value;
    let emailInput= document.getElementById("email").value;
    let mobileNumberInput= document.getElementById("mobile").value;

    console.log(nameInput);
             array.push({name: nameInput, email: emailInput, mobile: mobileNumberInput});
        console.log(array);
   let result= createTableView(array);
   console.log(result);

}


