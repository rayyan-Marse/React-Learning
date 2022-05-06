
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
  
   