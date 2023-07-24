//1.assign
const target={
    name:1,
    age:2
}

const source={
    address:'xxx',
    name:2
}

//注意区分与target.source的不同
//obj和target指向同一个对象
const obj=Object.assign(target,source)
console.log(obj)

//defineProperty

//2.entries
// const result=obj.entries(obj)
// console.log(result)
// result.forEach(function(item){
//     console.log(`${item[0]}`)
// });
//函数式语言中推崇链式调用
const result=Object.entries(obj)
                   .map(function(item){
                    return`${item[0]}:${item[1]}`
                   })
                   .filter(function(item){
                    return item.indexOf('name')>-1
                   })


//object freeze
const obj1={
    name:'hahaha'
}
Object.freeze(obj1)
obj1.name='xxx'
console.log(obj1)


//Object.keys
const keys=Object.keys(target)
console.log(keys)

//Object.values
const values=Object.values(target)
console.log(values)