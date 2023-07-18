//函数
//y=f(x) x->Y
//x当作入参
//y当作输出
function add(a,b,c){
    //1.各种各样的表达式
    //只能返回单个值
    // return value
    var d=a+b+c
    return d
    //隐式返回值 undefined
}

//函数调用  函数名（）组成的
add()
add(1,1,1)

var result=add(1,2,3)
console.log(result)

//NaN   

console.log(1/0)
//infinity   typeof number

//函数重载，函数名相同，参数个数，类型，顺序不同
//JS没有函数重载，只有函数的覆盖，谁在后面就听谁的
function add(){
    console.log('hello')
}
