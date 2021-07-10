for(let i=0;i<10;i++){
    let line = '' 
     for(let j=0;j<10;j++){
        line+='#'
      }
    console.log(line)
    }
var lines = 7;
var str = "";
var star = "*";
for(var i = 0; i < lines; i++){
    str += star;
    console.log(str);
}
var line= ['# # # #', ' # # # #']

 for (var i = 0; i < 7; i ++) {
    if ( i = (i-1)%2 == 0 )
       console.log(line[0]);
       else console.log(line[0]);
     
 };
for (var i=1; i <= 20; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}


цикл
console.log('mr.atick');
if (i % 15 == 0);

// функциональные выражения
function sayHi(){
    alert('hello');
}

alert(sayHi);

function sayHi() {   
    alert( "Привет" );
  }
  
  var func = sayHi;    
  func(); 
  
  sayHi = null;
  sayHi(какДела);        

// Function Declaration
function sum(a, b) {
    return a + b;
  }
  
  // Function Expression
  var sum = function(a, b) {
    return a + b;
  }
var age = +prompt(' сколько ввм лет', 16);
if (age >= 18){
function sayHi() {
alert(' прошу вас ');
}
} else {
function sayHi() {
alert(' отказано ');
}
}
sayHi();

var sayHi = function (age) {
if (age >= 18){
alert(' прошу вас');
} else {
alert(' в доступе отказано');
}
};
sayHi(prompt(' сколько вам лет? '));

countChar("abbccdddd", 'd'.match(/d/)||[].length) 
сountChar("abbccdddd", 'd')
const max = tasks.reduce((acc, curr) => acc.b > curr.b ? acc : curr); 
console.log(max);


var text = 'w5*5-G+H'
  , upper = text.match(/[A-Z]/g).length
  , lower = text.match(/[a-z]/g).length
  , nums = text.match(/[0-9]/g).length
  ;



  







//задачи:
let tasks = [
    {
      name: "Изучить javascript", //описание задачи
      duration: 30, //длительность задачи в днях
      priority: 4, //приоритетность задачи, чем больше цифра тем выше приоритет
    },
    {
      name: "посидеть",
      duration: 2,
      priority: 3,
    },
    {
      name: "встать",
      duration: 1,
      priority: 6,
    },
    {
      name: "Похвалить преподавателя))",
      duration: 1,
      priority: 7,
    },
    {
      name: "походить",
      duration: 0.2,
      priority: 2,
    },
    {
      name: "Помочь другу",
      duration: 1,
      priority: 1,
    },
    {
      name: "Понять что функции в javascript  это очень просто",
      duration: 5,
      priority: 4,
    },
    
  ];
  let tasks = [
    {
      name: "сделать домашку",
      duration: 2,
      priority: 5,
    },
    {
      name: "пойти на учебу",
      duration: 3,
      priority: 4,
    },
    {
      
      
    },
    
  ];
    
  const div = document.querySelector("div")
  const div1 = document.querySelector("hello")
  const div2 = document.querySelector(div)
  const div4   = document.querySelector(div)

  console.log("div")
  console.log("div")
  console.log("div")  
  console.log("div") 
  
div4.innerHTML = "i love js"
let i = 0
const interval = setInterval(() => {
  div.innerHTML = i;
  i++
}, 1000 );


ar = document.querySelector('ul');
list.addEventListener('click', function (ev) {
if(ev.target.tagName === "LI") {
ev.target.classList.toggle('checked');
} else if(ev.target.tagName === "SPAN") {
var div = ev.target.parentNode;
div.remove();

}
}, false);

function newElement() {
var li = document.createElement('li');
var inputValue = document.getElementById('toDoEl').value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if(inputValue == "") {
alert("Введите ваше дело!");
} else {
document.getElementById('list').appendChild(li);
}
document.getElementById('toDoEl').value = "";
var span = document.createElement('SPAN');
var txt = document.createTextNode("X");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);
}

class car {
    constructor(){method1}
    method1(){1.6}
    method2(){50000}
    method3(){100/1}
}
class car {
    constructor(method1){
        this.car = car;
    }
    sayHi() {
        alert(this.car)
    }
}

let car = new car(method1);
car.sayHi();
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Использование:
  let user = new User("Иван");
  user.sayHi();
 