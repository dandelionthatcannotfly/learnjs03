//原型链
function test1(){}
const t2={
    sing(){
        console.log('sing')
    }
}

test1.prototype=t2;
test1.constructor=t2;
const t1=new test1()


t1.sing()
console.log(test1.prototype===t2)
console.log(t1.__proto__===t2)
console.log(test1.constructor===t2)
console.log(t1.__proto__.__proto__.__proto__)
