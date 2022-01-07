// let fName = 'Nizam';
// let lName = 'khan';
// let age = 29;

// let val1 = 29;
// console.log(fName.length);
// fName = fName.trim();

// fName = fName.toUpperCase();
// fName = fName.toLowerCase();
// fName = fName.slice(0,3);

// let aboutMe = 'Hello, My name is ' + fName + " " + lName + ', and my age is ' + age + ".";
// let aboutMe = `Hello, My name is ${fName} ${lName} and my age is ${age}.`;
// let typeOff = typeof(fName);

// let guestNo = 20;
// if (guestNo === 21) {
//     console.log('your guested a correct numbers 21');
// }else {
//     if (guestNo < 21){
//     console.log('your guested number is less then guested number');
//     } else {
//     console.log('your guested numbers is highter then guested number.');
//     }
// }

/* ***********   if statement  *************** */
// let temp = 45;
// if (temp <= 0) {
//     console.log('It is too cool outsite.')
// } else if (temp > 0 && temp <= 7) {
//     console.log('It is cool outsite.')
// } else if (temp >7 && temp <= 18) {
//     console.log('It is Normal outsite.')
// } else if (temp > 18 && temp <= 28) {
//     console.log('It is a litte hot outsite.')
// } else if (temp > 28 && temp <= 35) {
//     console.log('It is hot outsite.')
// } else {
//     console.log('It is too hot outsite.')
// }
// let num1 = 4;
// let num2 = 7;
// let num3 = num1 >= num2 ? 'greater' : 'less then';

/* **************  Using switch  ************** */
// let day = 0;
// switch (day) {
//     case 0:
//         console.log('Saturday');
//         break;
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     default:
//     console.log('Invalid day')
// }

/*      While Loop      */
// let i = 0;
// while(i <= 5) {
//     // console.log(i);
//     console.log(i);
//     i++;
// }
// console.log(`the value of i is ${i} now`);

/*      For Loop        */
// for (let i = 0; i<= 9; i++) {
//     if (i===5){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

/* ************   Array   ************** */
// let myArr = ['Hey', 'I am', 'Nizam', 'khan'];
// console.log(myArr);
// myArr.pop() // Delete at end/last item/element in Array
// myArr.push('is the great') // Add at end/last item/element in Array.
// myArr.shift(); // Delete at start/begining item/element in Array
// myArr.unshift('hello'); // Add at start/begining an item/element in Array
// let myArr2 = ['I am', 'graduate', 'of', 'computer', 'science.'];
/*      Array Spread operator        */
// const myArry = [...'123456789'];
// console.log(myArry);
// let myArr3 = [];
// myArr3.push(...myArr,...myArr2);  // Push to arrays value into one by using Spread Array operator
// console.log(myArr3.join().toUpperCase());
// for (i = 0; i<= myArr3.length;i++){
//     console.log(myArr3[i]);
// }
// for (let myArr4 of myArr){       //give the value of array
//     console.log(myArr4);
// }
// for (let index in myArr){        //give the index of array
//     // console.log(index);
//     console.log(myArr[index]);
// }
/*      array distructring      */
// let [val1, val2] = myArr;
// let [val1,  ,val2] = myArr;     // Use for scaping the value
// let [val1, val2, ...myArr5] = myArr;     // creating new Array for reminig values
// console.log(val1);
// console.log(val2);
// console.log(myArr5);

/* *************    Objects    ************ */
// const myObj = {
//   name: 'Nizam',
//   age: '29',
//   hobbies: ['swimming', 'cricket', 'Tinnes'],
//   'education degrees': 'BSCS (Hons)', // for space between property of object use single quate
// };
// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj['education degrees']);
// myObj.gender = 'Male'; // Add new value in object

// const key = 'email';
// myObj[key] = 'nizamuddin4493@gmial.com'; // to add the value of key as object property
// console.log(myObj);

/*      object iterate      */
// for (const i of myObj) {
//   // console.log(i); //show the properties
//   console.log(myObj[i]); //shows the value of property
//   console.log(`${i} : ${myObj[i]}`); //shows properties and value of an object
// }

/*      computed Properties   */
// const key1 = 'value1';
// const val1 = 'abc';
// const key2 = 'value2';
// const val2 = 'xyz';
// const myObj2 = {
//   [key1]: val1,
//   [key2]: val2,
// };
// console.log(myObj2);

/*      Spread operator in object        */
// const myobj1 = {
//   key1: 'value1',
//   key2: 'value2',
// };
// const myObj2 = {
//   key3: 'value3',
//   key4: 'value4',
// };
// // const myObj3 = { ...myobj1, ...myObj2 };
// const myObj3 = { ...myobj1, ...myObj2, key5: 'value5' };
// console.log(myObj3);

/*      Object Destructuring          */
// const myObject = {
//   firstName: 'Nizam',
//   lastName: 'Khan',
//   age: 29,
//   degree: 'BSCS Hons',
// };
// // const { firstName, lastName} = myObject;
// const { firstName, lastName, ...reminObjects } = myObject;
// console.log(firstName, lastName);
// console.log(reminObjects);

/*      Object inside Array          */
// const users = [
//   { userId: 1, name: 'Nizam', gender: 'male' },
//   { userId: 2, name: 'Khan', gender: 'male' },
//   { userId: 3, name: 'Ahmadzai', gender: 'male' },
// ];
// // console.log(users);
// // console.log(users[0].name);
// // eslint-disable-next-line no-restricted-syntax
// for (const userInfo of users) {
//   // console.log(userInfo);
//   console.log(userInfo.name);
// }

/*      Nested destructuring        */
// const users = [
//   { userId: 1, fname: 'Nizam', gender: 'male' },
//   { userId: 2, fname: 'Khan', gender: 'male' },
//   { userId: 3, fname: 'Tabish', gender: 'female' },
// ];
// // const [val1, val2] = users;
// // console.log(val1, val2);
// const [{ fname }, , { userId }] = users;
// console.log(fname, userId);

/* ***********  Functions  *********** */
// function fun1() {
//   console.log('Hello Function!');
// }
// fun1();
// function fun2(parameter1, parameter2) {
//   return `${parameter1} ${parameter2}`;
// }
// console.log(fun2('Hello', 'Arugument!'));

// function isEven(num1) {
//   if (num1 % 2 === 0) {
//     return 'the number is even';
//   }
//   return 'the number is odd';
// }
// console.log(isEven(3));

/*        Function Experition          */
// const fun1 = function () {
//   console.log('Hello Function!');
// };
// fun1();

/*        Arrow Function          */
// const fun1 = () => {
//   console.log('Hello Function!');
// };
// fun1();
// const fun2 = (parameter1, parameter2) => `${parameter1} ${parameter2}`;
// console.log(fun2('Hello', 'Arugument!'));

// const isEven = (number) => number % 2 === 0; // OR
// // const isEven = (number) => (number % 2 === 0 ? 'even' : 'odd');
// console.log(isEven(3));

/*        Hoisting in Function         */
// eslint-disable-next-line no-use-before-define
// hello();
// function hello() {
//   console.log('hello World!');
// }
/*        Function inside function      */
// function parentFun() {
//   function childFun1() {
//     console.log('Hello, I am child function no 1!');
//   }
//   // eslint-disable-next-line func-names
//   const childFun2 = function () {
//     console.log('Hello, I am child function no 2!');
//   };
//   const childFun3 = (num1, num2) => num1 * num2;

//   console.log('Hello, I am Parent Fuction!');
//   childFun1();
//   childFun2();
//   console.log(childFun3(2, 3));
// }
// parentFun();
/*         Lexical Scope          */
// const lexVal1 = 'lexical variable example.';
// const lexical1 = () => {
//   const Lexical2 = () => {
//     console.log(lexVal1);
//   };

//   console.log(lexVal1);
//   Lexical2();
// };
// lexical1();

/*        Default Parameters       */
// function defParam(a, b) {
//   if (typeof b === 'undefined') {
//     b = 1;
//   }
//   return a * b;
// }
// console.log(defParam(2));
// console.log(defParam(2, 5));
// /*        OR        */ // used in ES6
// function defParam2(a, b = 1) {
//   return a * b;
// }
// console.log(defParam2(5));
// console.log(defParam2(5, 4));

/*        Rest Parameter          */
// function restPara(a, b, ...c) {
//   console.log(`The value of a is ${a}`);
//   console.log(`The value of b is ${b}`);
//   console.log(`The value of c is ${c}`);
// }
// restPara(1, 2, 3, 4, 5, 6);

/*        Adding all numbers of Array       */
// function restPara(...abc) {
//   let total = 0;
//   // eslint-disable-next-line no-restricted-syntax
//   for (const number of abc) {
//     total += number;
//   }
//   return total;
// }
// console.log(restPara(1, 2, 3, 4, 5, 6));

/*        Parameter destructring        */
// const myobj = {
//   firstName: 'Nizam',
//   lastName: 'Khan',
// };
// function paraDestr({ firstName, lastName }) {
//   console.log(firstName);
//   console.log(lastName);
// }
// paraDestr(myobj);

/*      Call Back Function        */
// function myFun(name) {
//   console.log(`Hello, my name is ${name}`);
// }
// function myFun2(callback) {
//   console.log('Hello, I am is Callback Function.');
//   callback('Nizam uddin');
// }
// myFun2(myFun);

/*      Function returning Function        */
// function returFun() {
//   function reFun(name) {
//     return `Hello, ${name}`;
//   }
//   return reFun;
// }
// const refn = returFun();
// console.log(refn('Nizam'));

/* *********** Array Methods ************* */

/* *********** ForEach Loop *********** */
// const myArr = [1, 2, 3, 4];
// function arrMultp(number, index) {
//   console.log(`The value of array is ${number} and index is  ${index}`);
// }
// arrMultp(myArr[2]);

// for (let i = 0; i < myArr.length; i += 1) {
//   arrMultp(myArr[i], i);
// }

// myArr.forEach(arrMultp); // OR
// myArr.forEach((number, index) => {
//   console.log(`The value of array is ${number} and index is  ${index}`);
// });
// const myDataArr = [
//   { firstName: 'Nizam', lastName: 'khan' },
//   { firstName: 'Ali', lastName: 'Nangarhari' },
//   { firstName: 'Mahmood', lastName: 'shah' },
// ];
// myDataArr.forEach((fname) => {
//   console.log(fname.firstName);
// });

/* *********** Map Method ************* */

// const arry = ['Hello', 'I am', 'Nizam', 'khan'];

// function mapM(element, index) {
//   return `element is: ${element}, index is: ${index}`;
// }
// const arrMap = arry.map(mapM); // OR
// const arrMap = arry.map((element, index) => `element is: ${element}, index is: ${index}`);
// console.log(arrMap);

// const myDataArr = [
//   { firstName: 'Nizam', lastName: 'khan' },
//   { firstName: 'Ali', lastName: 'Nangarhari' },
//   { firstName: 'Mahmood', lastName: 'shah' },
// ];

// const arrData = myDataArr.map((elemt) => elemt.firstName);
// console.log(arrData);

/* *********** Filter Method ************* */
// const filtM = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // function filtNum(number) {
// //   return number % 2 === 0;
// // }
// // const filterNumber = filtM.filter(filtNum);
// const filterNumber = filtM.filter((elemnt) => elemnt % 2 === 0);
// console.log(filterNumber);

/* *********** Reduce Method ************* */
// const myArr = [1, 2, 3, 4, 5, 60];

// const sumOfAllArry = myArr.reduce((val1, val2) => val1 + val2);
// console.log(sumOfAllArry);

// const itemArr = [
//   { pName: 'Mobile', Model: 'i12', price: 12000 },
//   { pName: 'Laptop', Model: '3420', price: 32000 },
//   { pName: 'Tv', Model: '210', price: 8000 },
// ];

// const itemArrTotalPrice = itemArr.reduce((tPrice, pPrice) => tPrice + pPrice.price, 0);
// console.log(itemArrTotalPrice);

/* *********** Sort Method ************* */
// const sortArr = [2, 101, 5, 400, 31];
// // const soort = sortArr.sort((a, b) => a - b);
// const soort = sortArr.slice(0).sort((a, b) => a - b);
// console.log(soort);
// // console.log(sortArr);

/* *********** Sort Method ************* */
// const findArr = ['Nizam', 'khan', 'is', 'the great'];
// function findCall(lenth) {
//   return lenth.length === 5;
// }
// const ans = findArr.find(findCall);
// console.log(ans);

// const users = [
//   { userId: 1, name: 'Nizam' },
//   { userId: 2, name: 'Khan' },
//   { userId: 3, name: 'Ali' },
// ];

// const userFind = users.find((id) => id.userId === 1);
// console.log(userFind);

/* *********** Every Method ************* */
// const numbers = [2, 4, 6, 10];
// function isEven(evn) {
// return evn % 2 === 0;
// }
// const ans = numbers.every(isEven);
// console.log(ans); // OR
// const ans = numbers.every((evn) => evn % 2 === 0);
// console.log(ans);

// const products = [
//   { pId: 1, Name: 'mobile-1', price: 3000 },
//   { pId: 2, Name: 'mobile-2', price: 5000 },
//   { pId: 3, Name: 'mobile-3', price: 12000 },
// ];
// console.log(products.every((ppp) => ppp.price < 13000));

/* *********** Some Method ************* */
// const number = [1, 2, 3, 5, 7];
// const ans = number.some((valu) => valu % 2 === 0);
// console.log(ans); // answer shoulb be true, b/c there is an even number

// const products = [
//   { pId: 1, Name: 'mobile-1', price: 3000 },
//   { pId: 2, Name: 'mobile-2', price: 5000 },
//   { pId: 3, Name: 'mobile-3', price: 12000 },
// ];
// const ans = products.some((val) => val.price > 10000);
// console.log(ans);

/* *********** Fill Method ************* */
// fill(value, start, end)
// const myArr = new Array(10).fill(-1);
// console.log(myArr);

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArr.fill('Nizam', 2, 5));

/* *********** splice Method ************* */
// splice(start, delete, insert)
const myArr = ['item1', 'item2', 'item3'];
// const deletedVal = myArr.splice(1, 1);
// console.log(deletedVal);
// console.log(myArr);

myArr.splice(1, 0, 'Insert New Item', 'Insert New Item');
console.log(myArr);
