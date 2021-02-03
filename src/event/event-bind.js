/**
 * 如果selector没有，直接给element绑定事件，如果selector有，将selector对应的多个元素的事件委托绑定给父元素element
 * @param el
 * @param type
 * @param fn
 * @param selector
 */
function addEventListener(el, type, fn, selector){
    //判断 el 的类型
    if(typeof el === 'string'){
        el = document.querySelector(el);
    }
    //事件绑定
    //若没有传递子元素的选择器, 则给 el 元素绑定事件
    if(!selector){
        el.addEventListener(type, fn);
    }else{
        el.addEventListener(type, function(e){
            //获取点击的目标事件源
            const target = e.target;
            //判断选择器与目标元素是否相符合,若符合  则调用回调
            if(target.matches(selector)){
                fn.call(target, e);
            }
        });
    }
}