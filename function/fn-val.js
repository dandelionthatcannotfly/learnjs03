const fn=function(){
    console.log('test');
    const result=function(){
        console.log('hello')
        return 1;
    }
    // return result;
    return result();
}

const obj={
    test:fn
}

// obj.test()

//const fromObjMethod=obj.test()
//fromObjMethod();

const fromObjMethod=obj.test
fromObjMethod();

const fromObjMethod1=obj.fn
obj.sing()
console.log(fromObjMethod1())




//当对象的value是一个变量名，并且这个变量名和对象的key相同，可以简写成一个
//当对象的key和定义的函数名相同时，可以直接省略函数关键词和key
// const obj={
//     fn,
//     sing(){
//         console.log('sing')
//     },
//    //sing: function sing(){}
//     name:'fn-val'
// }