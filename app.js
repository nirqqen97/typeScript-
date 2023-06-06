// const button = document.querySelector("button")!;
// const input1 = document.getElementById('num1')! as HTMLInputElement;               //* Add ! означает то что мы уверены что прийдет что-то
// const input2 = document.getElementById('num2')! as HTMLInputElement;
// function add(num1:number, num2 : number) {
//     return num1 + num2    
// }
// button.addEventListener("click", () => {
//         console.log(add( +input1.value, +input2.value));            //* + before mean convert string to num
// })
// //* for starting server first command "npm init -y" second "npm i --sev-dev lite-server" ready to go
// ---------------------------------------------------------------basics-types---------------------------------------------------------------------------------------------------
//? basic types: number, string, boolean, null, undefined 
// let num : number;
// num = 123
// let string : string
// string = "asdas"
// const person = "Max"    //! you dont need to specify type bcs of constant
// let person1 = "Max" 
// person1 = 13     //! error because firsfull it was string
// ---------------------------------------------------------------Advanced-types---------------------------------------------------------------------------------------------------
//? advanced types : string[], number[], any[], {name : string}[] arrays of objects, {} or object
// let arr : string[] = []
// arr = [1,'sd']   //! error
// arr = ['asd']   //*
// let arrObject : {name :string}
// arrObject = {name : "valodya"} //*
// arrObject = {num : 'ads'} //! error
// let obj : {sick : string}
// obj = {sick : 'corona'}
// obj.sick ; 
var db;
//* question mark makes it optional 
db = {
    id: 1,
    title: 'beber',
};
// ---------------------------------------------------------------non-js-types---------------------------------------------------------------------------------------------------
//* any, Unknown, tuple, Enum, Union Type, literal type
//? diff beetween Unknown and any, unknowk must be checked 
//? example of tuple : fixed = [123,'asd'];
//? example of UNion ttpe : let union : number | string;
//*                                                                 ANY
// let some: any    //! no check buy ts 
// some = 'asd';
// some = {a: 'asd'}
//*                                                                 UNKNOWN
// let somethink : unknown
// somethink = 'sad';
// let srt : string ; 
// if (typeof somethink  === "string") {   //! Lifeguard to check type of element 
//     srt = somethink
// }
//*                                                                 TUPLE
// let fixed: [string, number];
// fixed = [123,'asd'];
// fixed = ['asd', 123];
// fixed.push('asd') //! you can add by push
// //*                                                                 ENUM
// enum Toggle {ENABLE,DISABLE}
// const service = {
//     status : Toggle.ENABLE
// } 
// //*                                                                 UNION TYPE
// let union : number | string;
// union = 213
// union = '213215'
// let active : 'start' | 'end'
// active = '2'
var fruit = [];
var workWithArr = function (arr, val, action) {
    if (action === 'add') {
        arr.push(val);
    }
    else {
        var int = arr.indexOf(val);
        arr.slice(int, 1);
    }
    return arr;
};
workWithArr(fruit, 'banana', 'add');
workWithArr(fruit, 'mango', 'add');
workWithArr(fruit, 'apple', 'add');
console.log('fruit: ', fruit);
