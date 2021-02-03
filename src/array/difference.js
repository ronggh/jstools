/**
 * 数组取差异：
 * 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function difference(arr1, arr2=[]){
    //判断参数
    if(arr1.length === 0){
        return [];
    }
    if(arr2.length === 0){
        return arr1.slice();
    }
    const result = arr1.filter(item => !arr2.includes(item));
    return result;
}