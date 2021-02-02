// import {call} from './call';

/**
 * 会返回一个新函数。参数可以在bind()中传递，也可以在返回的新函数中传递
 * @param Fn
 * @param obj
 * @param args
 * @returns {Function}
 */
function bind(Fn, obj, ...args){
    //返回一个新的函数
    return function(...args2){
        //执行 call 函数
        return call(Fn, obj, ...args, ...args2);
    }
}