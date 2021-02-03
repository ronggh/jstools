/**
 * 为obj对象增加一个Fn函数 ，参数为args
 * @param Fn 要增加的函数
 * @param obj 指定的对象
 * @param args 参数
 * @returns  执行结果
 */
function call(Fn, obj, ...args){
    // 判断 obj如果是undefined或null,则让它指向全局对象
    if(obj === undefined || obj === null){
        // 全局对象
        obj = globalThis
    }
    // 为 obj 添加临时的方法
    obj.temp = Fn
    //调用 temp 方法
    let result = obj.temp(...args)
    // 删除 temp 方法
    delete obj.temp
    // 返回执行结果
    return result
}

export {call}