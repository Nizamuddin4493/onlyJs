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

/*      if statement          */
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

/*      Using switch          */
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

/*      Array           */
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

/*          Objects         */
// const myObj = {
//   name: 'Nizam',
//   age: '29',
//   hobbies: ['swimming', 'cricket', 'Tinnes'],
//   'education degrees': 'BSCS (Hons)', // for space between property of object use single quate
// };
// console.log(myObj);
// console.log(myObj.name);
// myObj.gender = 'Male'; // Add new value in object
// console.log(myObj['education degrees']);

// const key = 'email';
// myObj[key] = 'nizamuddin4493@gmial.com'; // to add the value of key as object property
// console.log(myObj);

/*      object iterate      */
// for (const i of myObj) {
//   // console.log(i); //show the properties
//   console.log(myObj[i]); //shows the value of property
//   console.log(`${i} : ${myObj[i]}`); //shows properties and value
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
// // console.log(user);
// for (let userInfo of users) {
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
// const [{ fname }, , { gender }] = users;
// console.log(fname, gender);