//闭包
const obj={
    name:'1'
}

//此函数执行一定要有obj,一定要有外部数据（环境）
function closure(){
    console.log(obj)
}

const val1=closure//闭包   val1=function + environment

function simpleFn(obj){
    console.log(obj)
}
const val2=simpleFn//val2=function

const arr=[1,2,3,4,5,6]
const result=[]
for(var i=0;i<arr.length;i++){
    // const clo=function(){return i}//function + env[i]

    //内部函数通过静态作用域引用了wrapper函数中的变量
    function wrapper(i_inner){
        return function(){
            return i_inner;
        }
    }
    result.push(wrapper(i))
    //console.log(clo())
    //  result.push(clo())
    //  result.push(clo)
}
//若将上面var换成let，则每个i都为该作用域现声明的,则上述不构成闭包
console.log(result)
console.log(result[0]())
//闭包是语言的特性


//立即执行函数，iife
const clo=(function wrapper(i){
    return i
})(i)


//闭包的问题
//window对象不可能被释放
//1.闭包会导致内存泄漏问题

//2.函数柯里化，curring
//柯里化目的，将多参函数实现为单参函数
//一个函数只有一个参数 y=f(x)
//lambda表达式和lambda演算 x , λx.y , (λx.y) z
//λx.x  (λx.x)z->z
//一个函数有多个参数 y=f(x,z,m,n)
//偏函数

//addMulParam(1,2,3)
function addMulParam(a,b,c){
    return add(a)(b)(c)
}

//add(1)(2)(3)
function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(addMulParam(1,2,3))


//实现一个函数，函数返回柯里化函数
add(1,2,3,4)
//function add(a,b,c,d){return a+b+c+d}
muli(1,2)
//function muli(a,b){return a*b}
function currying(){
    //TODO: ??
}
const addCurrying=currying(add)
const mulCurrying=currying(nuli)
addCurrying(1)(2)(3)(4)
mulCurrying(1)(2)