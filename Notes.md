# Javascript:-

![alt text](image.png)

>> Its v8 engine of chrome and Node.js which is a javascript runtime with the help of which you can run js inside your console . it helps you to provide a javascript runtime environment.

![alt text](image-1.png)


JIT --- just intime compiler (in built part of the node js)

![alt text](image-2.png)


> There are other executer of js also other than nodejs like bun , dino , etc

# OOPS in javascript:-

Everything in the javascript is an Object .

// diagram

![alt text](image-3.png)


// Javascript a protype based or object based ?

![alt text](image-4.png)


# ProtoType :-  Extra property oe functionality Given in any data Types

prop_name.__proto__  ![alt text](image-5.png)

// This image will shouw you how the real things are connected in chaining in the javascript via prototype{}

![alt text](image-6.png)


# OOPS (Object oriendted Programming)

![alt text](image-7.png)



## DOM and BOM  introduction diagram

![alt text](<image-10.png>)

# DOM Manipulation :-

we can do two things :- 

1. get The Element 
2. Event Listening

![alt text](image-8.png)


# Diffrence between HTML and DOM

![alt text](image-9.png)

# Event Listeners 

while using event listeners like click in the js if you provide call back function that it will give acess to window object while using the normal function will give acess to that particular element.

## There are many event Listeners you can use them as required


# ADVANCE JAVASCRIPT


## Aynchronous Nature of the javascript:-

![alt text](image-11.png)

## Event loop mechanism :-

![alt text](image-12.png)


# Closure 

> In JavaScript, a closure is a function that "remembers" the variables from its lexical scope even when it is executed outside that scope

# Promises 

>A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous tasks such as API calls, file reading, or setTimeout more cleanly compared to traditional callback functions.

> there are three states of it :- 1. pending 2. fullfiled 3. Rejected



#  Call(), apply (), Bind()

>In JavaScript, call(), apply(), and bind() are methods used to control the value of this when invoking a function. They allow you to explicitly set the context (this) for a function, which is particularly useful when working with objects.

![alt text](image-13.png)


# Async and Await

> these are another method to handle the promises like .then .catch if you are making a function async then await must be used inside.


## Promise.all([p1(),p2(),...]);


> this is used to call all the promises in a short syntax and can be destructured as array

## Iterator and Generator Functions:-

> use to execute in sequence and remebers how many times called
function* fun_name(){
    yeild 1;
    yeild 2;
    yeild 3;
}

> console.log(fun_name().next().value);

## Module and Common js

// Module:-  we use import export the things

// common js:- we use require to import and we export using module.exports={f1,f2,f3,......}

# note:-  for module we need to either save file as .mjs or change in package.json as type:module to run perfectly









