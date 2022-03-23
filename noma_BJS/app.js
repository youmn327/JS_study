// alert("hi"); //경고창 기능부분
console.log('lalala');

console.log("non variable")
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

console.log("non change variable")
const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);


console.log("change variabele")
let c = 5;
let d = 2;

console.log(c + d);
console.log(c * d);
console.log(c / d);
c = 10;
d = 20;
console.log(c + d);
console.log(c * d);
console.log(c / d);

console.log("attach int str")
console.log("hello" + c / d);
console.log("항상 const 가끔 let 절대 사용 금지 var")


console.log("boolean")
console.log("True or False")

console.log("null is null VS undefind memory use")
const amIFat = null;
let noting;
console.log(amIFat, noting)


console.log("array")
const week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(week);
console.log(week[1]);
week.push("weeks")
console.log(week)


console.log("object or function(contact)")
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],

  bio: function () {
    console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },

  greeting: function () {
    console.log('Hi! I\'m ' + this.name[0] + '.');
  }
};

console.log(person.name);
console.log(person.age);
console.log(person.interests[1]);
person.bio();
person.greeting();


console.log("function")
function sayHello() {
  console.log("hello");

}
sayHello();
sayHello();
sayHello();
sayHello();


function sayHelloname(name) {
  console.log("hello " + name);

}
sayHelloname("nico"); // send string
sayHelloname(10); // send intenger


console.log("calculator")
const calculator = {
  plus: function (a, b) {
    console.log(parseInt(a) + parseInt(b)); // parseInt : string => intenger
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  muti: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  }

}
console.log(calculator.plus(2, 3));
const result = calculator.plus(2, 3)


console.log("input")
const ina = prompt("입력");
const inb = prompt("입력");
calculator.plus(ina, inb)

const inc = parseInt(prompt("입력"));
const ind = parseInt(prompt("입력"));
calculator.muti(inc, ind)


console.log("conditionals if")
const age = parseInt(prompt("나이 입력")) //입력 안하면 age = null
console.log(typeof age) // => INT

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}


console.log("Document Object");

const hello = document.title;
console.log(hello) // HTML에서 title 태그를 가져온것

const transformtitle = document.title = "transform";
console.log(transformtitle)// HTML에서 title 내용 변경하고 가져온것

console.log("HTML in JS");
const title = document.getElementById("title"); // getElementById 
title.innerText = "very good"; // 내용 바꾸기
console.log(title.id)
console.log(title.className)

console.log("Searching for elem");
const his = document.getElementsByClassName("good");
console.log(his)
const class_hi = document.querySelector(".good h1");
print(class_hi)
const titleIDsel = document.querySelector("#hello") // 따로 붙여야 한다.
const titleBYID = document.getElementById("hello") // 안붙여도 된다.
// querySelector >>>>>> getElementBy ---  
// 자동 정렬 ctrl + k +F

console.log("event");

const click_func = document.querySelector(".blue");
function handleTitleClick(){
  click_func.style.color = "blue";
  console.log("click was clicked!")
}
click_func.addEventListener("click",handleTitleClick);

