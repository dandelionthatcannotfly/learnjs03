//set,集合数据类型
//集合是由一组无序且唯一（即不能重复）的项目组成的
const set=new Set();
set.add(1);
set.add(1);
set.add(2);
console.log(set.has(1))
console.log(set.has(3))
//set.clear()  清除
set.delete(2)


//数组
const arr=[1,2,2,3,4,5,5]
//请将数组中的重复元素去除
//[1,2,3,4,5]
const arrUniqueSet=new Set(arr)
const arrUniquue=Array.from(arrUniqueSet);
