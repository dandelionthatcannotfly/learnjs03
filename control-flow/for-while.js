const arr=[1,2,3,4]

for(/**1 */let i=0, j=1;
    /**2 */i+j<arr.length;//true 执行block;false退出for循环
    /**4 */++i,j++){
        /**3 */
        console.log(arr[i])
    }

let ii=0;
const a=i++;//后置自增，先赋值后自增
const b=++i;//前置自增，先自增后赋值
ii=ii+1;

console.log(a)
console.log(b)

//缺点：原数据很容易地被轻易改变


//对象遍历
//for in
//
//for of


//先执行一次，再判断条件
let i=0;
do{
    console.log('do while')
    i++;
}while(i<=3)

//statement不真时，运行block中的代码
// while(true){
// console.log('while')
// }