
// let and const variables in js

let Myname = "rayyan";
console.log(Myname);

const name1 = "rayyan shaikh";
name1 = 'data';

console.log(name1);

// arow functions diffrent writing types
console.log('rayyan shaikh');

function print1(){
  console.log("rayyan");
}

print1();

// arow functions

const print2 = ()=>{
  console.log('rayyan2');
}

print2();
  
  const print3 = number =>{
    console.log(number);
  }
    
    print3(25);
   
const print4 = number => number*10;

console.log(print4(25));

// classes in js and inheritance
class Parent{
 
    constructor(){
     this.gender = 'male';
   }
   
    printGender(){
     
     console.log(this.gender);
    }
   
   
   }
   
   
   class Person extends Parent{
     constructor(){
     super();
     this.name = 'rayyan shaikh ';
     }
    
    printName(){
     console.log(this.name);
   }
   
   }
    
   const p1 = new  Person();
   p1.printName();
   p1.printGender();

      
  //ES6 features classes without constructor

// classes in js and inheritance
class Parent1{
 

    gender = 'male';
  
  
   printGender=()=>{
    
    console.log(this.gender);
   }
  
  
  }
  
  
  class Person2 extends Parent1{
    
   
    name = 'rayyan shaikh2 ';
   
   
   printName = ()=>{
    console.log(this.name);
  }
  
  }
   
  const p2 = new  Person2();
  p2.printName();
  p2.printGender();
  
  const numbers = [1,2,3,4,5];
  const newNumber = [...numbers,25];
  console.log(newNumber);
  const person = {
  name:'rayyan',
  roll:25,
  };
  const person2  ={
  ...person,
  gender:'Male'
  };

  console.log(person2);

  // rest operators

  const filter = (...args)=>{
   return args.filter(el => el ===3);
  }

  console.log(filter(1,2,3,4,5));

  //destructuring of array
console.log('rayyan');

[num1, , num2] = [1, 2, 3];
console.log(num1, num2);


const person4 = {
  name: 'rayyan',
  roll: 25,
};

//it does not copy one object into another object  its only pointing
const person5 = person4;

person4.name = 'faizan';

console.log(person5);

// copy one object into another object

const person6 = { ...person4 };
person6.name = 'rayyan';
console.log(person6.name);

// array refresher
const arr1 = [1,2,3,4,5];

 const arr2 = arr1;

 const arr3 = arr2.map(number => number*2);
 console.log(arr2);
 console.log(arr3);