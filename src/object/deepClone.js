/**
 * 实现一: JSON方式
*  问题1: 函数属性会丢失,JSON不能克隆方法
 * 问题2: 循环引用会出错
 * @param target
 * @returns {any}
 */
function cloneByJson(target){
    //通过数据创建 JSON 格式的字符串
    let str = JSON.stringify(target);
    //将 JSON 字符串创建为 JS 数据
    let data = JSON.parse(str);
    return data;
}

/**
 * 实现二：递归，
 * 可以复制函数属性，不能解决循环引用问题
 * @param target
 * @returns {*}
 */
function cloneByRecursion(target){
    //检测数据的类型
    if(typeof target === 'object' && target !== null ){
        //创建一个容器
        const result = Array.isArray(target) ? [] : {};
        //遍历对象
        for(let key in target){
            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
            if(target.hasOwnProperty(key)){
                //拷贝
                result[key] = cloneByRecursion(target[key]);
            }
        }
        return result;
    }else{
        return target;
    }
}

/**
 * 方式三：借助Map解决递归克隆中循环引用问题
 * @param target
 * @param map
 * @returns {*}
 */
function cloneByMap(target, map=new Map()){
    //检测数据的类型
    if(typeof target === 'object' && target !== null ){
        //克隆数据之前, 进行判断, 数据之前是否克隆过
        let cache = map.get(target);
        if(cache){
            return cache;
        }
        //创建一个容器
        const result = Array.isArray(target) ? [] : {};
        //将新的结果存入到容器中
        map.set(target, result);
        //遍历对象
        for(let key in target){
            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
            if(target.hasOwnProperty(key)){
                //拷贝
                result[key] = cloneByMap(target[key], map);
            }
        }
        return result;
    }else{
        return target;
    }
}

/**
 * 优化的方案
 * @param target
 * @param map
 * @returns {*}
 */
function deepClone(target, map=new Map()){
    //检测数据的类型
    if(typeof target === 'object' && target !== null ){
        //克隆数据之前, 进行判断, 数据之前是否克隆过
        let cache = map.get(target);
        if(cache){
            return cache;
        }
        //判断目标数据的类型
        let isArray = Array.isArray(target);
        //创建一个容器
        const result = isArray ? [] : {};
        //将新的结果存入到容器中
        map.set(target, result);
        //如果目标数据为数组
        if(isArray){
            //forEach 遍历
            target.forEach((item, index) => {
                result[index] = deepClone(item, map);
            });
        }else{
            //如果是对象, 获取所有的键名, 然后 forEach 遍历
            Object.keys(target).forEach(key => {
                result[key] = deepClone(target[key], map);
            });
        }
        return result;
    }else{
        return target;
    }
}

export {deepClone}