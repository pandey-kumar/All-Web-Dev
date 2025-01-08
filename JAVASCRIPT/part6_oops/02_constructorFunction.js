//      cONSTRUCTOR FUNCTION

// Lets Understand this and new Keyword


function Car(make,model){
    this.make=make;
    this.model=model;
};


// this.make and this.model attach properties to the newly created object.

/* 
The new keyword is crucial here. When you use new:

Step 1: It creates a new empty object.
Step 2: It sets the prototype of this new object to Car.prototype.
Step 3: It binds this inside the Car constructor function to the newly created object.
Step 4: It returns the new object from the constructor.
*/

// create car1

let car1=new Car("Tyota","cidan");
console.log(`car1:- `,car1);


// create car 2

let car2=new Car("Bugati","Suv");
console.log(`Car2 :- `,car2);


//2. You can also create function as well

function Tea(name){
    this.name=name;
    this.descibe=function(){
        return `This is a ${this.name} Tea`;
    }
}

const Tea1=new Tea("LemonTea");
console.log(Tea1);

console.log(Tea1.descibe());


//3. Constructor function and Protoype

function Animal(name){
    this.name=name;
}

// Lets add a new Prototype to the Animal

Animal.prototype.Sound=function(){
    return `${this.name} makes a sound`;
}


const dog= new Animal("Dog");

console.log(dog.Sound());

// similarly we can use another animal as well

const cat=new Animal("Cat");

console.log(cat.Sound());


// You can also add a checkmark for checking is the user providing the info with the new keyword or not ?


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new ");
    }
    this.name=name;
}

let tea=new Drink("Chai");
// let coffee=Drink("Coca Cola");


