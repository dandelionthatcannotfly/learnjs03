const name='sj'
//==时，会进行隐式数据类型转换
//=== >= <= !==

//多个条件
//&&(与) ||（或）
//&&：两个条件都为真，结果才为真
//||：两个条件有一个为真，结果就为真
//！：取反

if(name ==='sj'){
    console.log('YES')
}else if(name==='sweet'){
    console.log('是sweet')
}


switch(name){
    case 'pjw':{
        console.log('是pjw')
        break;
    }
    case 'sun':{
        console.log('是sun')
        break;
    }
    default:{
        console.log('over')
    }
}