//1.打印
console.log('hello world')

//2.全局对象
console.log(globalThis);

//3.注释
/**
 * 多行注释
 */

console.log(/*传入等待打印的参数 */'hello note');


//'ues strict'严格模式


//JS数据类型
//（1）undefined  基础数据类型

//const/let/var/直接写变量a=1

var a

coonsole.log(a);

//（2）null   针对对象


var b=null;
console.log(b);

//(3)string
var c="hhhhh";
var d='hhhhh';
var e=`hhhhh`;
//c和d没有任何区别，e为多行字符串，可以插入变量
var cd=c+d;
console.log(cd);

var f=`${c}/${d}`;
comsole.log(f);


//（4）number 没有浮点类型和整数类型的区别
console.log(1);
console.log(1.1);

//(5)boolean true false
console.log(true);
console.log(false);


//es2015,symbol类型
//确保生成的变量不会重复
var symbolType1=Symbol('123');
var symbolType2=Symbol('123');

//==数据类型转换，如果类型不同，先转换类型再比较
//===严格相等

console.log(symbolType1===symbolType2);
