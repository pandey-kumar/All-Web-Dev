// object Oriented Programming

const car={
    name:"bugati",
    model:"lxIV",
    year:2030,
    start: function(){
        return `${this.name} is the beautiful car of year ${this.year}`
    }
};

console.log(car.start());



// Lets do it using the function

function Person(name,age){
    this.name=name;
    this.age=age;
}

let john =new Person("John Doe",20);
console.log(john.name);



// ProtoType and ProtoTypal chain :-

// Lets add prototype to Array 


Array.prototype.shubham=function(){
    return `This value of array ac to shubham is :-  ${this}`;
}

let arr1=[1,2,3,4,5];

console.log(arr1);

console.log(arr1.shubham());



//  CLASSES AND OBJECTS 


class Vehicle{

    //Constructor Function (When used inside the class it becomes method)

    // These all functionalities become method when used inside the class

    constructor(name,model){
        this.name=name;
        this.model=model;
    }


    start(){
        return `${this.model} is of the car ${this.name}`
    }

}


// 1. INHERITENCE

// LETS MAKE A NEW CLASS CAR WHICH WILL INHERIT ALL PROPERTIES OF VEHICLE CLASS


class Car extends Vehicle{
    drive(){
        return `${this.name} is driven by Shubham`;
    }
}


const car1=new Car("Tata","Cidan");
console.log(car1.drive());
console.log(car1.start());


const vehcleOne=new Vehicle("Mercedez","benz300");
console.log(vehcleOne.name);
console.log(vehcleOne.model);
console.log(vehcleOne.start());


//  2.  ENCAPSULATION

// Encapsulation Restrict the direct access to the data object , it is encapsulated as a bundle .   we use # symbol to hide any data to show


class BankAccount{

    // we would have access to this balance inside the class only we have made it private

    #balance=0;

    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }

    // custom method for getting the balance

    getBalance(){
        return `$ ${this.#balance}`
    }
}


// lets make an instance of it.....

let bankac1=new BankAccount();

// you can get direct access to #balance 

console.log(bankac1.getBalance());


// 3. Abstraction (Data Hiding) -> hide everything behind the Scene



class CoffeMachine{

    start(){
        // db calls....
        // complex works....
        return `The machine is just started`;
    }

    brewCoffe(){
        // make any call
        // doing some complex work

        return  `The coffe is being made`;
    }


    pressButton(){
        const btn1=this.start();
        const btn2=this.brewCoffe();
        return `${btn1} + ${btn2}`
    }
}


const machine1=new CoffeMachine();

// console.log(machine1.start());
// console.log(machine1.brewCoffe());


// instead of above two function directly use the third one both above functionality behind the scene is hidden

console.log(machine1.pressButton());


// 4. PolyMorphism------>  one thing and having (many forms)


class Birds{
    fly(){
        return `Flying.......`;
    }
}

class Penguin extends Birds{
    fly(){
        return `Penguin can not fly `;
    }
}

// same fly method but performing diffrent functions 


const bird1=new Birds();
console.log(bird1.fly());


const penguin1=new Penguin();
console.log(penguin1.fly());



// 5. STATIC METHOD

// static method with its name suggest that it will be static with the class means it cant be accesed by any instace of class but would be accessed directly with the class only.



class Calculator{

    static add(a,b){
        return a+b;
    }
}


// now if we create instace we cant access add method

const calc1=new Calculator();

// console.log(calc1.add());  // error

// But we can directly access it with the class name

// console.log(Calculator.add(2,3)); // 5


// 6. GETTERS AND SETTERS

// gpt example


class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height; // Calculate area
    }

    set width(value) {
        if (value <= 0) {
            throw new Error('Width must be positive');
        }
        this._width = value;
    }

    set height(value) {
        if (value <= 0) {
            throw new Error('Height must be positive');
        }
        this._height = value;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Outputs: 50
rect.width = 20;        // Updates the width
console.log(rect.area); // Outputs: 100



// sirs example

class Employee{
    #salary

    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary cant be negative");
        }
        this.name=name;
        this.#salary=salary;
    }


    get salary(){
        return `You are not allowed to see salary`;
    }
    set salary(value){
        if(value<0){
            console.error(`Invalid salary`);
        }else{
            this._salary=value;
        }
    }
}

let emp=new Employee("shubham",5000);

console.log(emp.salary);
// console.log(emp._salary);
emp.salary=4000;
console.log(emp._salary);