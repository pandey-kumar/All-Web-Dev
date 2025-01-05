// Iterator and Generator


function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen1=numberGenerator();
const gen2=numberGenerator();

console.log(gen1.next().value); // 1
console.log(gen1.next().value);// 2
console.log(gen1.next().value);// 3
console.log(gen1.next().value);// undefined

// will work in sequence and remmeber that which sequence has been called

console.log(gen2.next().value);// 1
console.log(gen2.next().value);// 2