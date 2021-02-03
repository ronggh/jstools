/**
 * 得到当前数组过滤掉左边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 * 如: drop([1,3,5,7], 2) ===> [5, 7]
 * @param {Array} arr 
 * @param {Number} size 
 */
function drop(arr, size){
    //过滤原数组 产生新数组
    // return arr.filter((value, index) => {
    //     //
    //     return index >= size; 
    // });
    return arr.filter((value, index) => index>=size);
}

/**
 * 得到当前数组过滤掉右边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 * 如: dropRight([1,3,5,7], 2) ===> [1, 3]
 * @param arr
 * @param size
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array}
 */
function dropRight(arr, size){
    // return arr.filter((value,index)=>{
    //     return index < arr.length - size;
    // });
    return arr.filter((value, index) => index < arr.length - size);

}