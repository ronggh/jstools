/**
 * 据当前数组产生一个去除重复元素后的新数组
 * 方法一：利用forEach()和indexOf()
 * @param {Array} arr 
 */
function unique1(arr){
    //声明一个空数组
    const result = [];
    //遍历原始数组
    arr.forEach(item => {
        //检测 result 数组中是否包含这个元素
        if(result.indexOf(item) === -1) {
            //若没有该元素 则插入到result中
            result.push(item);
        }
    });
    //返回
    return result;
}

/**
 * 据当前数组产生一个去除重复元素后的新数组
 * 方法二： 利用forEach() + 对象容器
 * @param {Array} arr 
 */
function unique2(arr){
    //声明空数组
    const result = [];
    //声明空对象
    const obj = {};
    //遍历数组
    arr.forEach(item => {
        if(obj[item] === undefined){
            //将 item 作为下标存储在 obj 中
            obj[item] = true;
            result.push(item);
        }
    });
    //返回结果
    return result;
}

/**
 * 据当前数组产生一个去除重复元素后的新数组
 * 方法三：利用ES6语法: from + Set 或者 ... + Set
 * @param {Array} arr 
 */
function unique3(arr){
    // //将数组转化为集合 Set
    // let set = new Set(arr);
    // //将 set 展开创建一个数组
    // let array = [...set];
    // return array;
    return [...new Set(arr)];
}

export {unique1,unique2,unique3}