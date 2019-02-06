// function Fn(name,age){
//     this.name = name;
//     this.age = age;
// }

// Fn.prototype.alertName = function(){
//     console.log(this.name);
// }

// const f = new Fn('Simone',22);
// f.printName = function(){
//     console.log(this.name);
// }

// console.log(f);

// f.alertName();//会从对象的隐式原型上找他的方法，没有就会去找他的对应的构造函数上的显示原型
// f.printName();//会从对象的隐式原型上找他的方法，没有就会去找他的对应的构造函数上的显示原型
// // f.stringPrint();//如果构造函数的显示原型上的没有，f.__proto__的本质也是个对象，f.__proto__.__proto__
// console.log(f.__proto__);


// function Animal(){
//     this.eat = function(){
//         console.log('I will eat');
//     }
// }

// function Dog(){
//     this.dark = function(){
//         console.log('I will dark');
//     }
// }

// Dog.prototype = new Animal();

// const hashqi = new Dog();

// hashqi.eat();


// function Elem(id){
//     this.elem = document.getElementById(id);
// }

// Elem.prototype.html = function(val){
//     var elem = this.elem;
//     if(val){
//         elem.innerHTML = val;
//         return this;
//     }else {
//         return elem.innerHTML;
//     }
// }

// Elem.prototype.on = function(type,fn){
//     var elem = this.elem;
//     elem.addEventListener(type,fn);
// }

// var div1 = new Elem('div1');
// console.log(div1.html());



// var obj = {name:'simone',age:22};//定义普通对象
// var arr = [];//定义数组对象
// var funObj = function(){};//定义函数对象

// //可以任意给引用类型添加属性
// obj.sex = '男';
// arr.index = 0;
// funObj.names = 'simone';


var obj = new Object();
obj.name = 'simone';
obj.age = 22;
var arr = new Array();
arr[0] = 1;
arr[1] = 2;
var funObj = new Function();
funObj.names = 'simone';
console.log(obj,arr,funObj);











