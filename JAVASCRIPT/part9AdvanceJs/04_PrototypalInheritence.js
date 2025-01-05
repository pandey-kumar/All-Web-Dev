function Wish(name){
    this.name=name;
}

// protoTypal Inheritence:-

Wish.prototype.greet=function(){
    console.log(`Hello ${this.name} Good morning`);
}

let person=new Wish("Shubham");
person.greet();
