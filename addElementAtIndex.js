import { createTableView } from "./createTableView.js";
import { array } from "./appendData.js";

export function addElementAtIndex(){

let arrayLength = array.length;

let index = prompt(`Enter index number in between 0 to ${arrayLength} `, );

index = Number(index);

let element = prompt ("enter Data to add seprated by comma");

element =element.split(",");

element ={
    name: element[0],
    email: element[1],
    mobile: element[2]
}

 array.splice(index, 0, element);

createTableView(array);

}