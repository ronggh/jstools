
/**
 * 功能: 判断obj是否是Type类型的实例
 * 实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回true, 否则返回false
 * @param {Object} obj 
 * @param {Function} Fn 
 */
function myInstanceOf(obj, Fn){
    //获取函数的显式原型
    let prototype = Fn.prototype;
    //获取 obj 的隐式原型对象
    let proto = obj.__proto__;
    //遍历原型链，最终会指向null
    while(proto){
        //检测原型对象是否相等
        if(prototype === proto){
            return true;
        }
        //如果不等于，取下一个原型链
        proto = proto.__proto__;
    }
    return false;
}