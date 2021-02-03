/**
 * 字符串反转,生成一个倒序的字符串
 * 借助数组实现
 * @param str
 * @returns {string}
 */
class StringUtils {}
StringUtils.reverseString=function (str) {
    //将字符串转为数组
    // let arr = str.split('');
    let arr = [...str];
    //翻转数组
    arr.reverse();
    //将数组拼接成字符串
    let s = arr.join('');
    return s;
}

/**
 * 字符串是否为回文，即反转后是否与原串相同
 * @param str
 * @returns {boolean}
 */
StringUtils.palindrome=function (str){
    return reverseString(str) === str;
}

/**
 * 字符串截取指定长度，并加...
 * @param str
 * @param size
 * @returns {string}
 */
 StringUtils.truncate=function(str, size){
    return str.slice(0, size) + '...';
}

export {StringUtils}
