/*jslint es6 */
const emails = ['hello@gmail.com', 'hola@gmail.com'];
// cant change the const ;
// emails = []; read only;
emails.push('hallo2gmail.com');//push another email to our const variable ;
console.log(emails);

let limit = 100;
limit += 100;
console.log(limit);
// =========Control with Block Scoping
// {
//     let limit = 10; if declare with var the over all limit became 10;
//     console.log('Backstage limit ' , limit); value = 10 ;
// }
// console.log('Over all venue limit ', limit ); with var value = 10;
function hello() {
    'use strict';
    let message = 'hello';
    console.log(message);
  }
function greeting() {
    "use strict";
    let message = "How are you?";
    console.log(message);
}

hello();
// greeting();
// =======   Template Literals    ====================

let a = `Good`;
let morning = `${a} morning`;
// console.log(a);
console.log(morning);
// example 2
const b = `Happy `;
const c = `${b} Birthday`;
console.log(c);

// ==========Operation and de structuring Assignment==========
const one = [20, 30, 40];
const two = [10,...one, 50];
console.log(two);
// example two;
const nameOne = ['Dana', 'ismael', 'Elias'];
const nameTwo = ['Vanessa', 'Bob', 'carl',...nameOne];
console.log(nameTwo);
// example 3
function collect (...z) {
    console.log(z);
}

collect(1,2,3,4,5);
collect(12,32,43,54,67);
// ================ DE structuring Assignment on Arras ================ 
let numbers = [4,5,6,7];
// const five = numbers[1];
// const four = numbers[0];
const [four, five] = numbers;
console.log(four, five);
// example two 
const animals = ['Simba', 'Zazen', 'Ed'];
const [simba, ,ed] = animals;
console.log(simba, ed);

const king ={
    name:'Mufasa',
    kids:1
};
const {name, kids}=king;
console.log(name, kids);
// example 3
const son = {nameS:'Simba', parents:2};
let nameS , parents ;
({nameS, parents} = son)
console.log(nameS, parents);
// ************************METHODS AND MODULES************************ 
const cheer = function () {
    console.log('Whoop!');
}

cheer();

const cheerTwo = () => console.log('Whoop!!!!');
cheerTwo();
setTimeout(() => {
    console.log('Whoooooop!!!!!!!');
}, 4000);


// *******************Map and Filter Method*******************
const values = [20,30,40,50,10];
// const double = (n) => n*2;

// let newValues = values.map(double);
let newValues = values.map((n) => n*2);
console.log(newValues);


// filter ;
const points =[3,4,5,7,10,22,55,63,45,21,34];
const highScores = points.filter((n) => n > 50 );

console.log(highScores);

// **************ES6 Built-in Helper Methods**************
    // string.repeat() returns a new string of concatenates copies;
    const stringOne = `Whoo${'ea'.repeat(10)}`;//'wooh'+'oo'.repeat(50);
    console.log(stringOne);
    // searching whit startsWith ,endWith , includes and more ...
    const butterFly = 'butterFly';
    const starWith = butterFly.startsWith('but');
    const end =  butterFly.endsWith('ly');
    const include =  butterFly.includes('tt');
    console.log(starWith,end,include);
    // Number Checking for type and safety.
    const addToCart = (item,number) => {
        //return Number.isFinite(number);//validate the number ;
        return Number.isSafeInteger(number);//is a safe integer ;
    }
    console.log(addToCart('shirt',Math.pow(2,54)));



// ********************* MODULES ********************* 
import {secondFile, total} from './secondFile';
console.log(secondFile , total);

// import {add, multiply} from './math';
import multiply from './math';


console.log( multiply(5, 5));

// Overview
    // Arrow function work just like a normal function expressions , but with reduce syntax ()=>{...};
    //By default the arrow functions are anonymous because we declare them with an operator rather than the 'function' keyword;
    //The map() helper method creates arrays by calling function on each individual elements of an initial array;
    //The filter() helper method creates arrays based on the sane elements of an original array depending on a certain test;
    //String.repeat() create large strings by concatenating a string a certain number of times;
    //The search methods for a string include .startWith(),endWith() , include() ,and more .
    //Number type checking can occur through the Number.isFinite()methods;
    //Number safety checking can occur through the Number.isSafeInteger();
// Modules
    //The export keyword send primitive values ,objects ,or functions from one module to another;
    //The import keyword receives primitive values ,objects or functions from another modules;
    //Using the default keyword give a module a fallback function when exporting multiples values and methods;


// ***************** CLASSES *******************
import animal from './animal';

const firstAnimal = new animal('Simba', 4.5);


console.log(firstAnimal);
firstAnimal.hello();
//inheriting classes;
class animalTwo extends animal{
    constructor(name, height , color){
        super(name, height);
        this.color = color;
    }
    hello(){
        console.log(`Hello I'm ${this.name} from Pride Rock`);
    }
}

const secondAnimal = new animalTwo('Mufasa', 2, 'red');
console.log(secondAnimal);
secondAnimal.hello();