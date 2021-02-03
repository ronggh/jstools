/**
 * 数组扁平化
 * 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 * 如: [1, [3, [2, 4]]] ==> [1, 3, 2, 4]
 * 方法一：forEach 递归遍历
 * @param {Array} arr 
 */
function flatten1(arr){
    //声明空数组
    let result = [];
    //遍历数组
    arr.forEach(item => {
        //判断
        if(Array.isArray(item)){
            result = result.concat(flatten1(item));
        }else{
            result = result.concat(item);
        }
    });
    //返回结果
    return result;
}

/**
 * 方法二：
 * @param {Array} arr 
 */
function flatten2(arr){
    //声明数组
    let result = [...arr];
    //循环判断
    while(result.some(item => Array.isArray(item))){
        result = [].concat(...result);
    }
    //返回结果
    return result;
}