//原型
//1.函数是一个对象
//2.函数可以作为构造函数（constructor）使用

//Array（）是一个构造函数，构造器
//const arr=new Array()
//function Foo(){}
//const f=new Foo()
// console.log(f)
// console.log(f._proto_===Foo.prototype)//true
//Foo构造函数和Foo对象，还有原型的关系


// const id=Foo 
// console.log(id)
// console.log(Foo.prototype.constructor===Foo)//true
// {constructor:f}
const arr=[]
// //class-base inherit
// new Array()
// arr{
//     map:()=>{},
//     filter:()=>{},
//     reduce:()=>{},
//     ...
// }
//基于原型的继承方式
//基于class base的继承



//原型继承：数据和方法，只需要创建一次，之后所有实例复用


Array.prototype.hello=function(){
    console.log('hello')
    return 1;
}

console.log(Object.getPrototypeOf(arr)===Array.prototype)