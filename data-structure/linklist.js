const linklist2={
    val:3,
    next:null
}

const linklist1={
    val:2,
    next:linklist2
}

const linklist={
    val:1,
    next:linklist1
}



console.log(linklist.next)


// let p=linklist
// i=0
// while(){
//     i++
//     console.log(p.val)
//     p=p.next
// }


//求取链表长度
//链表的遍历
function getlinklistlength(){
    let p=linklist;
    let i=0;
    while(p){
        i++;
        console.log(p.val)
        p=p.next;
    }
    return i
}


//双向链表
//const linklist={
//     parent:[]
// }