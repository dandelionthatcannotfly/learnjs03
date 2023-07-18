//创建，属性读取，属性修改，属性删除
//1.对象类型时引用类型
//2.创建对象
var obj={
    name:'zhangsan',
    age:18,
}//简单对象

console.log(typeof '1')
console.log(obj)
//增加属性的方式
obj.value=false
//读取属性
console.log(obj)

//设置属性
obj.name='lisi'
console.log(obj)

//删除属性
delete obj.name
console.log(obj)

//读取属性2
console.log(obj['age'])

//设置属性
obj['age']=20
const str='desc'
obj[str]='this is desc'
console.log(obj)

//删除属性2


//symbol 对象
const unique=Symbol('key')
obj[unique]='this is symbol'
console.log(obj)
console.log(obj[unique])
//私有属性
//如果不给变量，这个属性谁也取不到

//面向对象编程，封装（数据、方法）
//把任何一个对象变成包含不同属性的实体，没有方法时只是一个简单对象
//golang 没有class，只有struct
//函数式编程，函数是一等公民

