//作用域
//1.静态作用域，（词法作用域）
//2.动态作用域
//JS内部没有动态作用域

//所有定义的变量在binding阶段，按照词法作用域进行
//动态作用域，变量的binding，在执行阶段才进行
let x=10
function test(){
    console.log(x)
}

test()

function main(){
    let x=20
    test()
}

main()


//静态作用域binding的时变量，和变量的值无关
//变量的值需要在调用时才能知道是多少
/** 
 * const env={x_global:10}
 * const identifier={test}
*/   


//作用域和作用域链