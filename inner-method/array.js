//pop,push,shift
const arr=[1,2,3,4];
const arr1=['{name:1}','{name:2}','{name:3}']

//引用类型在做copy时，只是copy了引用地址：浅拷贝
//深拷贝：新建一个对象，把原来对象的属性值copy过来，如果属性

//1.数组遍历
const callback=function(item,index,arr){
    console.log(item,index,arr)
}
arr.forEach(callback)

arr.forEach (function callback (item,index,arr){
    console.log(item,index,arr);
})


arr1.forEach(function(item){
    //如果原数组的item时引用
    item.name=item.name+1;
})


//2.map
const newArr1=arr1.map(function (item){
    console.log(item)
    return{www:1}
})
console.log(newArr1)
console.log(arr1)




//3.Array.isArray判断是否是数组



//4.every
const result=arr.every(function(item){
    return item<5;
})
console.log(result)


//5.find找出第一个满足条件的元素
const arr4=[{name:'hahahaha'},{name:'xxxx'},{name:'hello'}];
const arr4Result=arr4.find(function(item){
    // if(item.name==='dada'){
    //     return true;
    // }else{
    //     return false;
    // }
    
    return item.name==='dadada'
})
console.log(arr4Result)

//4.1 findIndex
//0是false,-1是有值
//findIndex()方法

const arr5ResultIndex=arr4.findIndex(function(item){
    return item.name==='dadada'
})



//6.include


//7.filter
const arr6=[{name:'1',isVip:true},{name:'2',isVip:false}]
const arr6Result=arr6.filter(function(item){
    //  if(item.isVip){
    //     return true;
    //  }else{
    //     return false;
    //  }

    return !item.isVip;
})



//8.数组扁平化，面试
const arr7=[1,2,3,[4,5,6,[7,8,9]]]
const arr7Result=arr7.flat(1)
console.log(arr7Result)

 
//TODO:问：请将数组扁平化，不能用flat      则只能遍历
//TODO:将一个对象深层拷贝


//9.join 
const arr8=[1,2,3,4,5,6,7,8]
const arr8Result=arr8.join('')//默认连接是,    故去掉“，”加上一对空的引号
console.log(arr8Result);


//10.reverse反转数组



//11.sort
const arr9=[1,10,3,4,5]
arr9.sort(function(a,b){
    // if(a-b){
    //     return -1
    // }else{
    //     return
    // }

    //排序规则
    return a-b      //正序
    //b-a  逆序
})


//12.slice函数,切割数组
const arr10=[1,2,3,4,5,6]
const arr10Result=arr10.slice(1,3)
console.log(arr10Result)



//13.splice splice(start,deleteCount,item1)
//删除元素 splice(start,deleteCount)
//添加元素 splice(start,0,item1,item2)

//14.reduce