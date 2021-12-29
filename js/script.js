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
// let myArr3 = [];
// myArr3.push(...myArr,...myArr2);
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
// let [val1, val2, ...myArr5] = myArr;     // creating new Arry for reminig values
// console.log(val1);
// console.log(val2);
// console.log(myArr5);

/*          Objects         */
const myObj = {
  name: 'Nizam',
  age: '29',
  hobbies: ['playing', 'cricket', 'like Tinnes'],
};
// console.log(myObj);
// console.log(myObj.name);
myObj.gender = 'Male'; // Add new value in object
console.log(myObj);