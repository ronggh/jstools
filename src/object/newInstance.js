/**
 * 创建Fn构造函数的实例对象
 * @param {Function} Fn ,构造函数
 * @param  {...any} args ,参数
 *
 */
function newInstance(Fn, ...args) {
    //1. 创建一个新对象
    const obj = {};
    //2. 修改函数内部 this 指向新对象并执行
    const result = Fn.call(obj, ...args);
    //3. 修改新对象的原型对象
    obj.__proto__ = Fn.prototype;
    //4. 返回新对象
    return result instanceof Object ? result : obj;
}


export {newInstance}