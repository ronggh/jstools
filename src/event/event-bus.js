/**
 * 事件总线
 eventBus: 包含所有功能的事件总线对象
 eventBus.on(eventName, listener): 绑定事件监听
 eventBus.emit(eventName, data): 分发事件
 eventBus.off(eventName): 解绑指定事件名的事件监听, 如果没有指定解绑所有
 */
const eventBus = {
    //保存类型与回调的容器
    callbacks: {}
};

//绑定事件
eventBus.on = function(type, callback){
    //判断
    if(this.callbacks[type]){
        //如果 callbacks 属性中存在该类型事件 
        this.callbacks[type].push(callback);
    }else{
        //如果 callbacks 属性中不存在该类型事件 
        this.callbacks[type] = [callback];
    }
}

//触发事件
eventBus.emit = function(type, data){
    //判断
    if(this.callbacks[type] && this.callbacks[type].length > 0){
        //遍历数组
        this.callbacks[type].forEach(callback => {
            //执行回调
            callback(data);
        });
    }
}

//事件的解绑
eventBus.off = function(eventName){
    //若传入了 eventName 事件类型
    if(eventName){
        //只是删除 eventName 对应的事件回调
        delete this.callbacks[eventName];
    }else{
        this.callbacks = {};
    }
}

export {eventBus}