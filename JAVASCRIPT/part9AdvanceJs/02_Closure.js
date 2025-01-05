
function outer(){
    let count=5;
    return function(){
        count++;
        return count;
    }
}


let increment= outer();
console.log(increment());
console.log(increment());
console.log(increment());

// even outer is finished executing it still holds the value of counter variable;

