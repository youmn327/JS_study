// alert("hi"); //경고창 기능부분
console.log('lalala');

console.log("non variable")
console.log(5+2);
console.log(5*2);
console.log(5/2);

console.log("non change variable")
const a = 5;
const b = 2;

console.log(a+b);
console.log(a*b);
console.log(a/b);


console.log("change variabele")
let c = 5;
let d = 2;

console.log(c+d);
console.log(c*d);
console.log(c/d);
c = 10;
d = 20;
console.log(c+d);
console.log(c*d);
console.log(c/d);

console.log("attach int str")
console.log("hello" + c/d );
console.log("항상 const 가끔 let 절대 사용 금지 var")

console.log("boolean")
console.log("True or False")

console.log("null is null VS undefind memory use")
const amIFat = null;
let noting ;
console.log(amIFat,noting)


console.log("array")
const week = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(week);
console.log(week[1]);
week.push("weeks")
console.log(week)


console.log("object or function(contact)")
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music','skiing'],
    
      bio: function() {
      console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    }, 
  
    greeting: function() {
      console.log('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  
  console.log(person.name);
  console.log(person.age );
  console.log(person.interests[1]);
  person.bio();
  person.greeting();

  
console.log("function")
function sayHello(){
  console.log("hello");

}
 sayHello();
sayHello();
sayHello();
sayHello();


function sayHelloname(name){
  console.log("hello "+name);

}
sayHelloname("nico"); // send string
sayHelloname(10); // send intenger


console.log("calculator")
const calculator = {
  plus : function(a,b){
    console.log(parseInt(a)+parseInt(b)); // parseInt string => intenger
  },
  minus : function(a,b){
    console.log(a-b);
  },
  muti : function(a,b){
    console.log(a*b);
  },
  divide : function(a,b){
    console.log(a/b);
  },
  power : function(a,b){
    console.log(a**b);
  }
  
}
console.log(calculator.plus(2,3));
const result = calculator.plus(2,3)


console.log("input")
const ina = prompt("입력");
const inb = prompt("입력");
calculator.plus(ina,inb)

const inc = parseInt(prompt("입력"));
const ind = parseInt(prompt("입력"));
calculator.muti(inc,ind)