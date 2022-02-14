/*prompt('Enter Something', '');
alert('It is an alert')
console.log('First JS');*/
const x = 15;
let y = 18;
y = 20;
/*let str = 'First javascript string';
console.log('Hardcoded: ', str);
//String Interpolation
let str2 = 'We are learning ' + str + ' today.';
let interpolated = `We are learning ${str} today.`
console.log(interpolated);
console.log(interpolated + x + y);*/

/*if (x > y) {
    console.log('X is bigger');
} else {
    console.log('Y is bigger');
}*/
//console.log((x > y) ? 'X is bigger' : 'Y is bigger');


//use Prompt to take user input and if it is not empty print 'Thank you' else print 'Can't even enter things?'

//Functions
/*function capitalMaker(lowerString)
{
    console.log(lowerString.toUpperCase());
}*/

/*const str = 'testing functions';
//capitalMaker(str);
console.log(str);
let uppercased = str.toUpperCase();
console.log(str);
console.log(uppercased);*/

/*const capitalMaker = function (lowerString)
{
    console.log(lowerString.toUpperCase());
}*/

//Arrow functions
//const capitalMaker = lowerString => lowerString.toUpperCase();

/*for (let i = 0; i < 10; i++){
    console.log(i);
}
let j = 0;
while (j < 10) {
    console.log('J: ', j);
    j++;
}*/
/*let myVar = 15;
const myFunc = () =>
{
    myVar = 25;
    let funcVar = 10;
    console.log(funcVar);
}
myFunc();
//console.log(funcVar);
console.log(myVar);*/
/*const str = 15;
console.log(typeof str);*/

const myArray = [15, 20, 25, 30];
/*for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}*/

/*for (let el of myArray) {
    console.log(el);
}*/

myArray.push(35);
console.log('Updated after Push:: ', myArray);

myArray.unshift(5);
console.log('Updated after Unshift:: ', myArray);

myArray.pop();
console.log('Updated after Pop:: ', myArray);

myArray.shift();
console.log('Updated after shift:: ', myArray);

/*myArray.splice(1,0);
console.log('Updated after Splice:: ', myArray);*/

/*
myArray.push(50);
const copiedArray = myArray.slice(2,4);
console.log(myArray);
console.log(copiedArray);

const concatenated = myArray.concat(copiedArray);
console.log('Concatenated:: ', concatenated);

/*Map*/
/*
const technologies = ['LWC', 'Apex', 'JS', 'CSS'];
const mappedTechnologies = technologies.map((technology, index) =>
{
    return 'learning ' + technology;
})

const capitalMapped = technologies.map((technology, index) =>
{
    return technology.toUpperCase();
})

console.log('Mapped Array:: ', mappedTechnologies);
console.log('Mapped Array:: ', capitalMapped);
console.log('Mapped Array:: ', technologies);

const filteredArray = technologies.filter((technology, index) =>
{
    return technology.length === 3;
});
console.log('Filtered Array:: ', filteredArray);
*/
/*const traineeObj = {
    name: "Avay",
    age: 31,
    skills: ['Java','LWC']
}

console.log('Name: ', traineeObj['name']);
for (let key in traineeObj) {
    console.log(traineeObj[key]);
}

traineeObj.year = 2021;
console.log(traineeObj);

let key = 'domain';
const deptObj = {
    id: 1,
    [key]: 'salesforce'
}

console.log(deptObj);
*/
const objectMaker = (id, name, age) =>
{
    return {
        id, //id: id
        name,
        age,
    }
}

const returnedObj = objectMaker(1, 'Rahul', 30);
console.log(returnedObj);

//Array Destructuring
const copiedArray = [...myArray, 50];
console.log('Spreaded Array: ', copiedArray);
console.log(myArray);

//Object destructuring
const copiedObject = { ...returnedObj, dept: 'salesforce' };
console.log(copiedObject);
console.log(returnedObj);