/**
 * 数组分块
 * 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 * 如: [1, 3, 5, 6, 7, 8] 调用chunk(arr, 4) ==> [[1, 3, 5, 6], [7,8]]
 * @param {Array} arr 
 * @param {Number} size 
 */

function chunk(arr, size=1){
    //判断
    if(arr.length === 0){
        return [];
    }
    //声明两个变量
    let result = [];
    let tmp = [];// [1,2,3]
    //遍历
    arr.forEach(item => {
        //判断tmp元素长度是否为 0
        if(tmp.length === 0){
            //将 tmp 压入到 result 中
            result.push(tmp);
        }
        //将元素压入到临时数组 tmp 中
        tmp.push(item);
        //判断
        if(tmp.length === size){
            tmp = [];
        }
    });
    return result;
}

export {chunk}