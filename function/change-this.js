//改变this指向
//1.call[this,...args]
//2.apply[this,[]]
//3.bind
//arguments内置方法

const test={
    name:'hahaha',
    sayHi:function(){}
}



//面试：bind函数的实现
//TODO: 用apply和call,实现自定义myBind
//TODO: 实现函数科里化
function add(a,b,c){}
const curryingadd=myCurrying(add)
curryingadd(1)(2)(3)
function addFour(a,b,c,d){}
const  curryingaddFour=myCurrying(addFour)
curryingaddFour(1)(2)(3)(4)