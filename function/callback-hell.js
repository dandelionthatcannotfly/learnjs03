//回调地狱
// function platform(fn,p){

//     fn({name:'hahahaha'})
//     console.log(p)
// }

//当回调函数有依赖关系会出现回调地狱
const fn=function(params){
    console.log(params)
    //在这里才能获取平台函数的返回值
    network(`${params.data}|www.baidu.com/second`,function(params){
        console.log(params);
        network(`${params.data}|www.baidu.com/third`,function(params){
            console.log(params);
            network(`${params.data}|www.baidu.com/forth`,function(params){
                console.log(params);
                
            })
        })
    })
}

// platform(fn)

function network(url,fn){
    //请求url，通过fn返回url结果
    fn({data:url})
}

network('www.baidu.com/first',fn)



// const r1=network('first')
// const r2=network(`${r1}|second`)
// const r3=network(`${r3}|third`)


wx.request({
    url:'https://www.baidu.com',
    data:'yes',
    success:function(params){
        wx.request({
            url:'https://www.baidu.com',
            data:params.data,
            success:function(params){
                wx.request({
                    url:'https://www.baidu.com',
                    data:params.data,
                    success:function(params){
                        //TODO://业务逻辑
                    }
                })
            }
        })
    }
})