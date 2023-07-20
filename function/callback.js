//回调函数（和API没有任何关系，和异步没有任何关系）
//函数作为参数传递给另一个函数




//platform平台api
//我们自己传递的函数


//platform执行完会得到一个数据1
// function platform(/**a变量要传递一个函数 */fn){
//     fn(1,2,3)
// }
function platform(a){
    a.fn(1,2,3)
}

// const result=platform()
//所有的人都能获取result

//回调函数,被一个第三方函数调用
const fn=function(a,b,c){
    //这里才能获取a,b,c
    console.log(a,b,c)
}

//作为参数传递给第三方
platform(fn)
 

//平台函数不通过return返回值，而是通过回调函数的参数传递返回值


//参数位置
// function test(a,b,c,d){
//     console.log(a,b,c,d)
// }

// function test(obj){
//     // console.log(obj.a,obj.c)

//     //变量的重命名
//     // const {a:first,b,c}=obj;
//     // const a=obj.a
    
// }
//参数较多可以转化成对象
// test({a:1,b:2,c:3,d:4})


// const params={
//     appId:'124',
//     path:'23456',
//     success:function(){}
// } 
// wx.openEmbbeddedMinProgram(params)


//callback函数最大的用处和异步相关