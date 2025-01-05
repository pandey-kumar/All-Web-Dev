const person={
    name:"Shubham",
    greet(){
        console.log(`Hello ${this.name}`);
    },
}

person.greet();

// suppose i transfer this function as a refrence to another varaible

let Person2=person.greet;

Person2(); // it will give undefined , because this has been lost for this new variable

// I can bind this using bind

let BindGreet=person.greet.bind({name:"Pandey"});
BindGreet();


// Lets UnderStand Call , apply and bind


//1. call()-->  The call() method invokes a function with a specified this value and arguments provided individually.

const person3 = {
    firstName: "John",
    lastName: "Doe",
};

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

greet.call(person3, "Hello", "!"); // Output: Hello, John Doe!



//2. apply()--> same concept only argument provided in the form of array

const person4 = {
    firstName: "John",
    lastName: "Doe",
};

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

greet.apply(person4, ["Hi", "!"]); // Output: Hi, John Doe!

//3. bind()--> 

const person5= {
    firstName: "John",
    lastName: "Doe",
};

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

const greetJohn = greet.bind(person5, "Hello");
greetJohn("!");