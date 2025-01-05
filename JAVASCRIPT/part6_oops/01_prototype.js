// ProtoType   .__proto__

// when You will run this on the browser you will find much more

const computer = { cpu: 12 };
const lenovo = { screen: "24px" };

// console.log(` computer `, computer.__proto__);

// if i want to show these or use this in another object i can use __proto__: and give required value

const allComputers = {
  screen: "65px",
  __proto__: computer,
};

// console.log(allComputers.__proto__); // it will also show proprty of computer as well  // like a chaining

// __proto__  is read as dunder (double underscore)

// Modern Way to give This is using setPrototypeOF and getProtoTypeof

const genericCar = { tyres: 23 };

const tesla = {
  driver: "AI",
}

// lets add prototype of genericCar to tesla

Object.setPrototypeOf(tesla,genericCar);


// to Know the prototypes of tesla assosiated with it 

console.log('Tesla' ,Object.getPrototypeOf(tesla)); 

