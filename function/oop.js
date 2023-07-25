//js中的面向对象编程
//1.封装（隐藏数据，暴露方法）
//2.继承
//函数作为构造函数，函数中包括属性和方法




//



//请仿写数组的yourselfForEach方法
// const arr=[]
//TODO: arr.youreselfForeach((item)=>{console.log(item)})
//arr.forEach((item)=>{console.log(item)})


//运用回调，函数原型将一个数组平铺
// const fn=function (item){
//     this.item=item
//     arr()
// }
// const arr=function Array(item){
//     console.log(item);
//     fn(function(item){
//         console.log(item)
//     })
// }

// fn.prototype.arr()=function(){
//     console.log(1,2,3)
// }



const arr=[]
const Arr=new arr(
    function(item){
        console.log(item)
        (function(item){
            console.log(item)
            (function(item){
                console.log(item)
            })
        })
}
)
// const fn=function(item){
//     console.log(item)
//     (function(item){
//         console.log(item)
//     })
// }
fn.prototype.Arr('1,2,3')


//map
